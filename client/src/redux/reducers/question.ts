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
  questionReducer.actions

export default questionReducer.reducer
