const Question = ({ randomNum, countries }) => {
  const { name, capital, flag } = countries

  if (randomNum === 0) {
    return (
      <h2 className='max-w-sm sm:w-80 font-bold text-2xl my-5 text-blueTitle'>
        {capital} is the capital of
      </h2>
    )
  }
  if (randomNum === 1) {
    return (
      <h2 className='max-w-sm sm:w-80 font-bold text-2xl my-5 text-blueTitle'>
        <img src={flag} alt={`The flag of ${name}`} className='w-20 h-14 mb-5' />
        Which country does this flag belong to?
      </h2>
    )
  }
}

export default Question
