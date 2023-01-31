import { serverSupabaseClient } from '#supabase/server'
import type { Guest } from '@/types'

export default eventHandler(async (event) => {
  const client = serverSupabaseClient(event)
  const { data } = await client.from('guests').select()

  return { guests: data as Guest[] }
})
