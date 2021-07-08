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
  const isCorrect = useSelector(state => state.quiz.isCorrect)

  const allCountries = useSelector(state => state.countries.countries)
  const selectedCountries = useSelector(state => state.countries.selectedCountries)
  const index = useSelector(state => state.countries.countriesArrayIndex)

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  console.log(index)
  console.log(allCountries)
  console.log(selectedCountries)

  const nextQuestionHandler = () => {
    dispatch(countriesActions.arrayIndexHanlder())
    dispatch(quizActions.setRandomQuestion())
    dispatch(countriesActions.nextCountryHandler())
  }

  const correctAnswerHanlder = country => (allCountries[index].name === country ? true : false)

  const displayAnswers = selectedCountries.map((country, i) => (
    <Answer key={i} i={i} country={country.name} onClickHandler={correctAnswerHanlder} />
  ))
  return (
    <div className='relative max-w-lg sm:w-96 '>
      <h1 className='text-2xl sm:text-4xl text-gray-100 font-bold mb-3'>COUNTRY QUIZ</h1>
      <Image />
      <Card>
        {isLoading && <Spinner />}
        {!isLoading && (
          <>
            <Question randomNum={randomNum} countries={allCountries[index]} />
            {displayAnswers}
            {!isCorrect && <Button onClickHandler={nextQuestionHandler} text='Next' />}
          </>
        )}
      </Card>
    </div>
  )
}

export default QuizContent