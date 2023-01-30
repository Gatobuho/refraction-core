import { serverSupabaseClient } from '#supabase/server'
export default eventHandler(async (event) => {
  const client = serverSupabaseClient(event)
  const { data } = await client.from('families').select('uuid')

  if (!data) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Family not found',
    })
  }

  const codes = data.map(f => f.uuid)

  return {
    statusCode: 200,
    codes,
  }
})
