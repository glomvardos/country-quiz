import { createSlice } from '@reduxjs/toolkit'

const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    isLoading: true,
  },
  reducers: {
    setIsNotLoading(state) {
      state.isLoading = false
    },
  },
})

export const loadingActions = loadingSlice.actions

export default loadingSlice
