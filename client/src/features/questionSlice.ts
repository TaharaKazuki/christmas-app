import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type initialStateType = {
  queue: Array<string>
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
    startExamAction: (state, action: PayloadAction<Array<string>>) => {
      return {
        ...state,
        queue: action.payload,
      }
    },
  },
})

export const { startExamAction } = questionSlice.actions

export default questionSlice.reducer
