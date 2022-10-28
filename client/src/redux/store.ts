import { combineReducers, configureStore } from '@reduxjs/toolkit'

import questionReducer from './reducers/question'
import resultReducer from './reducers/result'

const rootReducer = combineReducers({
  questions: questionReducer,
  result: resultReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
