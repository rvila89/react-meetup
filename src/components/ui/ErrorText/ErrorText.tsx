import classes from './ErrorText.module.css'

const ErrorText: React.FC<{ text: string | undefined }> = ({ text }) => (
  <span className={classes.error}>{text}</span>
)

export default ErrorText
