import { serverSupabaseClient } from '#supabase/server'
import type { Family } from '@/types'
export default eventHandler(async (event) => {
  const body = await readBody(event)
  const client = serverSupabaseClient(event)

  console.log('/family/update.put', body)
  return

  const { id, comments } = body as Partial<Family>
  if (!id || !comments) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad request',
    })
  }

  const { data, error } = await client.from('family').update({ comments }).eq('id', id).select()

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
