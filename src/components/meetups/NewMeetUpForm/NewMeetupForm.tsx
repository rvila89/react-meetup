import { useState } from 'react'
import { IMeetup } from '../../../common/types'
import { REQUIRED } from '../../../common/utils/constants'
import { useAppContext } from '../../../context/AppContext'
import { Card } from '../../ui/Card'
import ErrorText from '../../ui/ErrorText/ErrorText'
import { Inputs } from './NewMeetUpForm.types'
import classes from './NewMeetupForm.module.css'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Modal } from '../../ui/Modal'

const NewMeetupForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>()
  const { setMeetups } = useAppContext()
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleCloseModal = () => {
    setIsModalOpen(false)
    navigate('/')
  }

  const onSubmit: SubmitHandler<Inputs> = (data: IMeetup) => {
    reset()
    setIsModalOpen(true)
    const newMeetup: IMeetup = {
      id: crypto.randomUUID(),
      title: data.title,
      address: data.address,
      image: data.image,
      description: data.description,
    }
    setMeetups((prevMeetups) => [...prevMeetups, newMeetup])
  }

  return (
    <>
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.control}>
            <label htmlFor='title'>Meetup Title</label>
            <input {...register('title', { required: true })} />
            {errors.title && <ErrorText text={REQUIRED} />}
          </div>
          <div className={classes.control}>
            <label htmlFor='title'>Meetup Image</label>
            <input {...register('image', { required: true })} />
            {errors.image && <ErrorText text={REQUIRED} />}
          </div>
          <div className={classes.control}>
            <label htmlFor='address'>Address</label>
            <input {...register('address', { required: true })} />
            {errors.address && <ErrorText text={REQUIRED} />}
          </div>
          <div className={classes.control}>
            <label htmlFor='description'>Description</label>
            <textarea
              {...register('description', { required: true })}
              rows={5}
            ></textarea>
            {errors.description && <ErrorText text={REQUIRED} />}
          </div>
          <div className={classes.actions}>
            <button type='submit'>Add Meetup</button>
          </div>
        </form>
      </Card>
      {isModalOpen && <Modal handleCloseModal={handleCloseModal} />}
    </>
  )
}

export default NewMeetupForm
