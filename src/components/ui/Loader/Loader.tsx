import classes from './Loader.module.css'

const Loader: React.FC = () => {
  return (
    <div className={classes.container}>
      <img src='/assets/loader.svg' alt='loader' width={24} height={24} />{' '}
      <span className={classes['ml-2']}>Loading...</span>
    </div>
  )
}

export default Loader
