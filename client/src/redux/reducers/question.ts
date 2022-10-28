import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  queue: [],
  answers: [],
  trace: 0,
}

const questionReducer = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    startExamAction: (state, action) => {
      return {
        ...state,
        queue: action.payload,
      }
    },
  },
})

export const { startExamAction } = questionReducer.actions

export default questionReducer.reducer
