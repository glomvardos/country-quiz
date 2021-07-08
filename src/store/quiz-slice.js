import { createSlice } from '@reduxjs/toolkit'

const quizSlice = createSlice({
  name: 'questions',
  initialState: {
    randomQuestion: Math.floor(Math.random() * 2),
    isCorrect: false,
  },
  reducers: {
    setRandomQuestion(state) {
      state.randomQuestion = Math.floor(Math.random() * 2)
    },
  },
})

export const quizActions = quizSlice.actions

export default quizSlice
