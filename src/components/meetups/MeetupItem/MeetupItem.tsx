import './MeetupItem.css'
import Card from '../../ui/Card'
import { IMeetup } from '../../../types'

const MeetupItem: React.FC<IMeetup> = ({
  title,
  address,
  description,
  image,
}) => {
  return (
    <li className='item' data-test='meet-up-item'>
      <Card>
        <div className='image'>
          <img src={image} alt={title} />
        </div>
        <div className='content'>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className='actions'>
          <button>Add to favorites</button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem
