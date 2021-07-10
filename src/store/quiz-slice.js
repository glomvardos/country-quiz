import { createSlice } from '@reduxjs/toolkit'

const quizSlice = createSlice({
  name: 'questions',
  initialState: {
    randomQuestion: Math.floor(Math.random() * 2),
    nextQuestion: false,
    isAnswered: false,
    score: 0,
    showResults: false,
    wrongAnswer: false,
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
    },
    resetScore(state) {
      state.score = 0
    },
    setShowResults(state) {
      state.showResults = !state.showResults
    },
    setWrongAnswer(state) {
      state.wrongAnswer = !state.wrongAnswer
    },
  },
})

export const quizActions = quizSlice.actions

export default quizSlice
