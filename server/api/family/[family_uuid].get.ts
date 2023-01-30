import { serverSupabaseClient } from '#supabase/server'
import type { Family } from '@/types'
export default eventHandler(async (event) => {
  const params = getRouterParams(event)
  const client = serverSupabaseClient(event)
  const { data } = await client.from('families').select('*, guests(*)').eq('uuid', params.family_uuid).limit(1)

  if (!data) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Family not found',
    })
  }

  if (data[0])
    return { family: data[0] as Family }

  throw createError({
    statusCode: 418,
    statusMessage: 'Your family is a teapot',
  })
})
/*
const body = await readBody(event)
    return { body }
*/
