import adventure from '../../assets/adventure.svg'

const Image = () => {
  return (
    <div className='absolute -top-4 right-0 w-32 sm:w-36 sm:-top-5'>
      <img src={adventure} alt='' className='w-full  ' />
    </div>
  )
}

export default Image
