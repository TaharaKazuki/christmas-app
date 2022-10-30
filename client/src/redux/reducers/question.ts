import { createSlice } from '@reduxjs/toolkit'
import { DataType } from '../../database/type'

type InitStateType = {
  queue: DataType
  answers: Array<any>
  trace: number
}

const initialState: InitStateType = {
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
