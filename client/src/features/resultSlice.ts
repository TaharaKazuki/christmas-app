import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type initialStateType = {
  userId: number | null
  result: Array<number>
}

const initialState: initialStateType = {
  userId: null,
  result: [],
}

export const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<number | null>) => {
      state.userId = action.payload
    },
    pushResult: (state, action: PayloadAction<number>) => {
      state.result.push(action.payload)
    },
  },
})

export const { setUserId, pushResult } = resultSlice.actions

export default resultSlice.reducer
