import adventure from '../../assets/adventure.svg'
import winner from '../../assets/winner.svg'

const Image = ({ image }) => {
  let classes
  let srcImage

  if (image === 'adventure') {
    srcImage = adventure
    classes = 'absolute -top-4 right-0 w-32 sm:w-36 sm:-top-5'
  }
  if (image === 'winner') {
    srcImage = winner
    classes = 'w-44 mx-auto sm:w-48'
  }

  return (
    <div className={classes}>
      <img src={srcImage} alt='' className='w-full' />
    </div>
  )
}

export default Image
