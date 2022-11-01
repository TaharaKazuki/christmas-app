import { AppDispatch } from '../redux/store'
import { pushResultAction } from '../redux/reducers/result'

export const PushAnswer = (result: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(pushResultAction(result))
  } catch (error) {
    console.info('error')
  }
}
