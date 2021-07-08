const Button = ({ text, onClickHandler }) => {
  return (
    <button
      onClick={onClickHandler}
      className='block bg-orangeHover text-white font-bold text-lg px-9 py-4 ml-auto rounded-xl hover:opacity-90 transition-opacity duration-200'
    >
      {text}
    </button>
  )
}

export default Button
