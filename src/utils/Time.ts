export function getHourDegree(hours: number, minutes: number) {
  return hours * 30 + 90 + (minutes / 60) * 30;
}

// for minutes, seconds
export function getTimeDegree(time: number) {
  return time * 6 + 90;
}
