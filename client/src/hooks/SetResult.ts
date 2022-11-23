import { AppDispatch } from '../app/store'
import { pushResult, updateResult } from '../features/resultSlice'

export const PushAnswer = (result: number) => async (dispatch: AppDispatch) => {
  try {
    await dispatch(pushResult(result))
  } catch (error) {
    console.info(error)
  }
}

export const updateAnswer =
  (value: { trace: number; checked: number }) => async (dispatch: AppDispatch) => {
    try {
      dispatch(updateResult(value))
    } catch (error) {
      console.info(error)
    }
  }
