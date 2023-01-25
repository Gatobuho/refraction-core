export function useCountdown(targetDate: string | Date) {
  const DAY_MULTIPLIER = 1000 * 60 * 60 * 24
  const HOUR_MULTIPLIER = 1000 * 60 * 60
  const MINUTE_MULTIPLIER = 1000 * 60
  const SECOND_MULTIPLIER = 1000

  const nowData = ref(useNow())
  const daysLeft = ref(0)
  const hoursLeft = ref(0)
  const minutesLeft = ref(0)
  const secondsLeft = ref(0)
  const calcDays = () => {
    const weddingDate = new Date(targetDate)
    const diff = weddingDate.getTime() - nowData.value.getTime()
    const days = Math.floor(diff / DAY_MULTIPLIER)
    const hours = Math.floor((diff % DAY_MULTIPLIER) / HOUR_MULTIPLIER)
    const minutes = Math.floor((diff % HOUR_MULTIPLIER) / MINUTE_MULTIPLIER)
    const seconds = Math.floor((diff % MINUTE_MULTIPLIER) / SECOND_MULTIPLIER)
    daysLeft.value = days
    hoursLeft.value = hours
    minutesLeft.value = minutes
    secondsLeft.value = seconds
  }
  const { pause, resume, isActive } = useIntervalFn(() => {
    calcDays()
  }, 1000, { immediateCallback: true })

  return {
    daysLeft,
    hoursLeft,
    minutesLeft,
    secondsLeft,
    pause,
    resume,
    isActive,
  }
}
