const Answer = ({ letter, country }) => {
  return (
    <div className='hover:bg-orangeHover hover:border-orangeHover hover:text-white flex items-center p-3 border-2 border-solid border-lightPurple rounded-xl text-lightPurple mb-6 font-medium cursor-pointer'>
      <span className='text-2xl mr-11'>{letter}</span> <span className='text-xl'>Country</span>
    </div>
  )
}

export default Answer
