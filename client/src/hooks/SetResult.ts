import { AppDispatch } from '../app/store'
import { pushResult } from '../features/resultSlice'

export const PushAnswer = (result: number) => async (dispatch: AppDispatch) => {
  try {
    await dispatch(pushResult(result))
  } catch (error) {
    console.info(error)
  }
}
