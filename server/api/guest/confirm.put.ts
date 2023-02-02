import { serverSupabaseClient } from '#supabase/server'
import type { Guest } from '@/types'
export default eventHandler(async (event) => {
  const body = await readBody(event)
  const client = serverSupabaseClient(event)

  if (body.length <= 0) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad request',
    })
  }

  const confs = []

  for (let i = 0; i < body.length; i++) {
    const { id, confirmed, ceremonyConfirm } = body[i] as Partial<Guest>
    // @ts-expect-error: Supabase doesn't know about the confirmed field
    const confirmation = client.from('guests').update({ confirmed, ceremonyConfirm }).eq('id', id).select()
    confs.push(confirmation)
  }

  const responses = await Promise.all(confs)

  if (responses.length <= 0 || responses.some((res: any) => res.error) || responses.some((res: any) => !res.data)) {
    responses.forEach((res: any) => console.error(res.error))
    throw createError({
      statusCode: 404,
      statusMessage: 'Guests had an error',
    })
  }

  const responseData = responses.map((res: any) => {
    return res.data[0]
  })
  if (responseData.length)
    return { guests: responseData as Guest[] }

  throw createError({
    statusCode: 418,
    statusMessage: 'Your guests is a teapot',
  })
})
