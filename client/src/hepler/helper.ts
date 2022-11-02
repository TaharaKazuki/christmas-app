export const attemptsNumber = (result: Array<any>) => result.filter((r) => r !== undefined).length

export const earnPointNumber = (result: Array<any>, answers: Array<any>, point: any) =>
  result
    .map((element, i) => answers[i] === element)
    .filter((i) => i)
    .map((i) => point)
    .reduce((prev: number, curr: number) => prev + curr, 0)

export const flagResult = (totalPoints: number, earnPoint: number) =>
  (totalPoints * 50) / 100 < earnPoint
