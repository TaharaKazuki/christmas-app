import { AppDispatch } from '../redux/store'
import { pushResultAction, updateResultActin } from '../redux/reducers/result'

export const pushAnswer = (result: number | undefined) => async (dispatch: AppDispatch) => {
  try {
    dispatch(pushResultAction(result))
  } catch (error) {
    console.info('error')
  }
}

export const updateResult = (index: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(updateResultActin(index))
  } catch (error) {
    console.info(error)
  }
}
