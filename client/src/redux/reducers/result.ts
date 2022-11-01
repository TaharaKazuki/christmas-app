import { createSlice } from '@reduxjs/toolkit'

type InitStateType = {
  userId: number | null
  result: Array<any>
}

const initialState: InitStateType = {
  userId: null,
  result: [],
}

export const resultReducer = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload
    },
    pushResultAction: (state, action) => {
      state.result.push(action.payload)
    },
    updateResultActin: (state, action) => {
      const { trace, checked } = action.payload
      state.result.fill(checked, trace, trace + 1)
    },
    resetResultAction: () => {
      return {
        userId: null,
        result: [],
      }
    },
  },
})

export const { setUserId, pushResultAction, updateResultActin, resetResultAction } =
  resultReducer.actions

export default resultReducer.reducer
