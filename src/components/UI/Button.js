const Button = ({ text, onClickHandler }) => {
  let classes

  if (text === 'Next') {
    classes =
      'block bg-orangeHover text-white font-bold text-lg px-9 py-4 ml-auto rounded-xl hover:opacity-90 transition-opacity duration-200'
  }

  if (text === 'Try again') {
    classes =
      'block bg-white text-resultsTitle font-semibold text-lg mx-auto px-14 py-4 border-2 border-solid border-resultsTitle rounded-xl hover:text-white hover:bg-resultsTitle transition-all duration-200'
  }

  return (
    <button onClick={onClickHandler} className={classes}>
      {text}
    </button>
  )
}

export default Button
