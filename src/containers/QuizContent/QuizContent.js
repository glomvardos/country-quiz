import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Image from '../../components/UI/Image'
import Card from '../../components/UI/Card'
import Question from '../../components/Question/Question'
import Answer from '../../components/Answer/Answer'
import Button from '../../components/UI/Button'

import { fetchCountries } from '../../store/counties-actions'

const QuizContent = () => {
  const dispatch = useDispatch()
  const allCountries = useSelector(state => state.countries.countries)
  console.log(allCountries)

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  return (
    <div className='relative max-w-lg sm:w-96 '>
      <h1 className='text-2xl sm:text-4xl text-gray-100 font-bold mb-3'>COUNTRY QUIZ</h1>
      <Image />
      <Card>
        <Question />
        <Answer letter='A' />
        <Answer letter='B' />
        <Answer letter='C' />
        <Answer letter='D' />
        <Button text='Next' />
      </Card>
    </div>
  )
}

export default QuizContent
