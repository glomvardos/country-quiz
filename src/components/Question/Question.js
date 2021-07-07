const Question = ({ randomNum, city, flag }) => {
  if (randomNum === 0) {
    return (
      <h2 className='max-w-sm sm:w-80 font-bold text-2xl my-5 text-blueTitle'>
        City is the capital of
      </h2>
    )
  }
  if (randomNum === 1) {
    return (
      <h2 className='max-w-sm sm:w-80 font-bold text-2xl my-5 text-blueTitle'>
        Which country does this flag belong to?
      </h2>
    )
  }
}

export default Question
