export const attemptNum = <T>(result: Array<T>) => {
  return result.filter((r) => r !== undefined).length
}

export const earnPointNum = () => {}

export const passFlagResult = (totalPoints: number, earnPoints: number) => {
  return (totalPoints * 50) / 100 < earnPoints
}
