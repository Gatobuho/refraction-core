import { serverSupabaseClient } from '#supabase/server'
import type { Family } from '@/types'

export default eventHandler(async (event) => {
  const client = serverSupabaseClient(event)
  const { data } = await client.from('families').select('*, guests(*)')
  return { families: data as Family[] }
})
