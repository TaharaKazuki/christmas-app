import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type initialStateType = {
  userId: string | null
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
    setUserId: (state, action: PayloadAction<string | null>) => {
      state.userId = action.payload
    },
    pushResult: (state, action: PayloadAction<number>) => {
      state.result.push(action.payload)
    },
    updateResult: (state, action: PayloadAction<{ trace: number; checked: number }>) => {
      const { trace, checked } = action.payload
      state.result.fill(checked, trace, trace + 1)
    },
    resetResult: () => {
      return {
        userId: null,
        result: [],
      }
    },
  },
})

export const { setUserId, pushResult, updateResult, resetResult } = resultSlice.actions

export default resultSlice.reducer
