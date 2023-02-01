import { serverSupabaseClient } from '#supabase/server'
import type { Family } from '@/types'
export default eventHandler(async (event) => {
  const body = await readBody(event)
  const client = serverSupabaseClient(event)

  const { id, comments } = body as Partial<Family>
  if (!id || !comments) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad request',
    })
  }

  // @ts-expect-error: Supabase doesn't know about the comments field
  const { data, error } = await client.from('families').update({ comments }).eq('id', id).select()

  if (!data || error) {
    console.error(error)
    throw createError({
      statusCode: 404,
      statusMessage: 'Guest had an error',
    })
  }

  if (data[0])
    return { family: data[0] as Family }

  throw createError({
    statusCode: 418,
    statusMessage: 'Your guest is a teapot',
  })
})
