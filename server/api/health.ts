const startAt = Date.now()
let count = 0

export default defineEventHandler(() => ({
  page_view: count++,
  startAt,
}))
