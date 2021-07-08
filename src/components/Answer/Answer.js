const Answer = ({ i, country, onClickHandler }) => {
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

  return (
    <div
      onClick={() => onClickHandler(country)}
      className='hover:bg-orangeHover hover:border-orangeHover hover:text-white flex items-center p-3 border-2 border-solid border-lightPurple rounded-xl text-lightPurple mb-6 font-medium cursor-pointer'
    >
      <span className='text-2xl mr-11'>{letter}</span> <span className='text-xl'>{country}</span>
    </div>
  )
}

export default Answer
