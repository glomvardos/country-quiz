import { createSlice } from '@reduxjs/toolkit'

const quizSlice = createSlice({
  name: 'questions',
  initialState: {
    randomQuestion: Math.floor(Math.random() * 2),
    nextQuestion: false,
    score: 0,
  },
  reducers: {
    setRandomQuestion(state) {
      state.randomQuestion = Math.floor(Math.random() * 2)
    },
    setNextQuestion(state) {
      state.nextQuestion = !state.nextQuestion
    },
  },
})

export const quizActions = quizSlice.actions

export default quizSlice
