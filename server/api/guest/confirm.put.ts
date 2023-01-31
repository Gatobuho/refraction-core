import { serverSupabaseClient } from '#supabase/server'
import type { Guest } from '@/types'
export default eventHandler(async (event) => {
  const body = await readBody(event)
  const client = serverSupabaseClient(event)

  console.log('/guest/confirm.put', body)
  return

  const { id, confirmed } = body as Partial<Guest>
  if (!id || !confirmed) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad request',
    })
  }

  const { data, error } = await client.from('guests').update({ confirmed }).eq('id', id).select()

  if (!data || error) {
    console.error(error)
    throw createError({
      statusCode: 404,
      statusMessage: 'Guest had an error',
    })
  }

  if (data[0])
    return { family: data[0] as Guest }

  throw createError({
    statusCode: 418,
    statusMessage: 'Your guest is a teapot',
  })
})
