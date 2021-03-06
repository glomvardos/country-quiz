import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Image from '../../components/UI/Image'
import Card from '../../components/UI/Card'
import Question from '../../components/Question/Question'
import Answer from '../../components/Answer/Answer'
import Button from '../../components/UI/Button'
import Spinner from '../../components/UI/Spinner/Spinner'

import { fetchCountries } from '../../store/counties-actions'
import { countriesActions } from '../../store/countries-slice'
import { quizActions } from '../../store/quiz-slice'

const QuizContent = () => {
  const dispatch = useDispatch()

  const isLoading = useSelector(state => state.loading.isLoading)

  const randomNum = useSelector(state => state.quiz.randomQuestion)
  const nextQuestion = useSelector(state => state.quiz.nextQuestion)
  const wrongAnswer = useSelector(state => state.quiz.wrongAnswer)

  const allCountries = useSelector(state => state.countries.countries)
  const selectedCountries = useSelector(state => state.countries.selectedCountries)
  const index = useSelector(state => state.countries.countriesArrayIndex)

  useEffect(() => {
    if (isLoading) {
      dispatch(fetchCountries())
    }
  }, [dispatch, isLoading])

  const nextQuestionHandler = () => {
    if (wrongAnswer || index === allCountries.length - 1) {
      dispatch(quizActions.setShowResults())
    }

    dispatch(countriesActions.arrayIndexHanlder())
    dispatch(countriesActions.nextCountryHandler())
    dispatch(quizActions.setRandomQuestion())
    dispatch(quizActions.setNextQuestion())
    dispatch(quizActions.setIsAnswered())
  }

  const displayAnswers = selectedCountries.map((country, i) => (
    <Answer key={i} i={i} allCountries={allCountries[index]} country={country.name} />
  ))
  return (
    <div className='relative max-w-lg my-auto sm:w-96'>
      <h1 className='text-2xl sm:text-4xl text-gray-100 font-bold mb-3'>COUNTRY QUIZ</h1>
      <Image image='adventure' />
      <Card>
        {isLoading && <Spinner />}
        {!isLoading && (
          <>
            <Question randomNum={randomNum} countries={allCountries[index]} />
            {displayAnswers}
            {nextQuestion && <Button onClickHandler={nextQuestionHandler} text='Next' />}
          </>
        )}
      </Card>
    </div>
  )
}

export default QuizContent
