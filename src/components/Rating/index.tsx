import { FC } from 'react'
import StarIcon from '../icons/StarIcon'

type Props = {
  stars: 1 | 2 | 3 | 4 | 5
}

const Rating: FC<Props> = ({ stars }) => {
  return (
    <span className="flex gap-1 max-w-fit">
      {[1, 2, 3, 4, 5].map((star, index) => (
        <StarIcon key={star} active={index < stars} />
      )
      )}
    </span>
  )
}

export default Rating