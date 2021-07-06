import Image from '../UI/Image'
import Card from '../UI/Card'
import Question from '../Question/Question'
import Answer from '../Answer/Answer'
import Button from '../UI/Button'

const QuizContent = () => {
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
