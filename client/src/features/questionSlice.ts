import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import data from '../database/data'
export type apiDataType = typeof data

type initialStateType = {
  queue: apiDataType
  answers: Array<string>
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
    startExamAction: (state, action: PayloadAction<apiDataType>) => {
      return {
        ...state,
        queue: action.payload,
      }
    },
  },
})

export const { startExamAction } = questionSlice.actions

export default questionSlice.reducer
