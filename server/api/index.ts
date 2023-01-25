import { dirName } from '@/server/guests'

export default defineEventHandler(() => ({
  msg: 'Hello There!',
  dirName,
}))
