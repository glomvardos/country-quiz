import { useDispatch, useSelector } from 'react-redux'

import Card from '../../components/UI/Card'
import Image from '../../components/UI/Image'
import Button from '../../components/UI/Button'

import { quizActions } from '../../store/quiz-slice'
import { countriesActions } from '../../store/countries-slice'

const Results = () => {
  const dispatch = useDispatch()

  const score = useSelector(state => state.quiz.score)

  const resetGameHandler = () => {
    dispatch(countriesActions.resetCountriesAndIndex())
    dispatch(quizActions.resetScore())
    dispatch(quizActions.setWrongAnswer())
    dispatch(quizActions.setShowResults())
  }

  let answersText
  if (score === 1) answersText = 'answer'
  if (score === 0 || score > 1) answersText = 'answers'

  return (
    <div className='w-80 sm:w-96 my-auto'>
      <h1 className='text-2xl sm:text-4xl text-gray-100 font-bold mb-3'>COUNTRY QUIZ</h1>
      <Card>
        <Image image='winner' />
        <h2 className='font-bold text-5xl text-resultsTitle text-center mt-16 mb-5'>Results</h2>
        <p className='text-center font-normal text-resultsTitle text-lg mb-16'>
          You got <span className='font-bold text-4xl text-correctAnswer mx-0.5'>{score}</span>{' '}
          correct {answersText}
        </p>
        <Button onClickHandler={resetGameHandler} text='Try again' />
      </Card>
    </div>
  )
}

export default Results
