import { createSlice } from '@reduxjs/toolkit'

const quizSlice = createSlice({
  name: 'questions',
  initialState: {
    randomQuestion: Math.floor(Math.random() * 2),
    nextQuestion: false,
    isAnswered: false,
    score: 0,
  },
  reducers: {
    setRandomQuestion(state) {
      state.randomQuestion = Math.floor(Math.random() * 2)
    },
    setNextQuestion(state) {
      state.nextQuestion = !state.nextQuestion
    },
    setIsAnswered(state) {
      state.isAnswered = !state.isAnswered
    },
    setScore(state) {
      state.score++
      console.log(state.score)
    },
    resetScore(state) {
      state.score = 0
    },
  },
})

export const quizActions = quizSlice.actions

export default quizSlice
