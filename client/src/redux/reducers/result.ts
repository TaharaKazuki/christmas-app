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
  },
})

export const { setUserId, pushResultAction } = resultReducer.actions

export default resultReducer.reducer
