import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import data from '../database/data'
export type apiDataType = typeof data

type initialStateType = {
  queue: apiDataType
  answers: Array<number>
  trace: number
}

const initialState: initialStateType = {
  queue: [],
  answers: [],
  trace: 0,
}

export const questionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    startExamAction: (state, action: PayloadAction<Omit<initialStateType, 'trace'>>) => {
      const { queue, answers } = action.payload
      return {
        ...state,
        queue,
        answers,
      }
    },
    moveNextAction: (state) => {
      return {
        ...state,
        trace: state.trace + 1,
      }
    },
    movePrevAction: (state) => {
      return {
        ...state,
        trace: state.trace - 1,
      }
    },
    resetAllAction: () => {
      return {
        queue: [],
        answers: [],
        trace: 0,
      }
    },
  },
})

export const { startExamAction, moveNextAction, movePrevAction, resetAllAction } =
  questionSlice.actions

export default questionSlice.reducer
