import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quizActions } from '../../store/quiz-slice'

const Answer = ({ i, country, allCountries }) => {
  const [isCorrect, setIsCorrect] = useState(false)
  const [isWrong, setIsWrong] = useState(false)

  const dispatch = useDispatch()
  const index = useSelector(state => state.countries.countriesArrayIndex)
  const isAnswered = useSelector(state => state.quiz.isAnswered)

  useEffect(() => {
    setIsCorrect(false)
    setIsWrong(false)
  }, [index])

  const correctAnswerHandler = () => {
    if (allCountries.name === country) {
      setIsCorrect(true)
      dispatch(quizActions.setScore())
    }
    if (allCountries.name !== country) {
      setIsWrong(true)
      dispatch(quizActions.setWrongAnswer())
    }
    dispatch(quizActions.setIsAnswered())
    dispatch(quizActions.setNextQuestion())
  }

  console.log(index)

  const showCorrectAnswer = () => {
    if (!isCorrect && allCountries.name === country) {
      setIsCorrect(true)
    }
  }

  let letter
  switch (true) {
    case i === 0:
      letter = 'A'
      break
    case i === 1:
      letter = 'B'
      break
    case i === 2:
      letter = 'C'
      break
    case i === 3:
      letter = 'D'
      break
    default:
      break
  }

  const correctAnswerClasses = `bg-correctAnswer border-correctAnswer text-white flex items-center p-3 border-2 border-solid rounded-xl mb-6 font-medium cursor-pointer`
  const wrongAnswerClasses = `bg-wrongAnswer border-wrongAnswer text-white flex items-center p-3 border-2 border-solid rounded-xl mb-6 font-medium cursor-pointer`
  const defaultClasses = `hover:bg-orangeHover hover:border-orangeHover hover:text-white text-lightPurple flex items-center p-3 border-2 border-solid border-lightPurple rounded-xl  mb-6 font-medium cursor-pointer`

  return (
    <div
      onClick={!isAnswered ? correctAnswerHandler : showCorrectAnswer()}
      className={isCorrect ? correctAnswerClasses : isWrong ? wrongAnswerClasses : defaultClasses}
    >
      <span className='text-2xl mr-11'>{letter}</span> <span className='text-xl'>{country}</span>
    </div>
  )
}

export default Answer
