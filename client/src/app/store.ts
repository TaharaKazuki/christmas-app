import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import questionReducer from '../features/questionSlice'
import resultReducer from '../features/resultSlice'

export const store = configureStore({
  reducer: {
    questions: questionReducer,
    result: resultReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
