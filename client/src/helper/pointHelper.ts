export const attemptNum = <T>(result: Array<T>) => {
  return result.filter((r) => r !== undefined).length
}

export const earnPointNum = (result: number[], answers: number[], point: number) => {
  return result
    .map((element, i) => answers[i] === element)
    .filter((i) => i)
    .map((_i) => point)
    .reduce((prev, curr) => prev + curr, 0)
}

export const passFlagResult = (totalPoints: number, earnPoints: number) => {
  return (totalPoints * 50) / 100 < earnPoints
}
