import { configureStore } from '@reduxjs/toolkit'
import countriesSlice from './countries-slice'
import quizSlice from './quiz-slice'
import loadingSlice from './loading-slice'

const store = configureStore({
  reducer: {
    countries: countriesSlice.reducer,
    quiz: quizSlice.reducer,
    loading: loadingSlice.reducer,
  },
})

export default store
