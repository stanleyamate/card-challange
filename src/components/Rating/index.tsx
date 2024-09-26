import { FC } from 'react'
import StarIcon from '../icons/StarIcon'
import { RateProp } from '@/types'

type Props = {
  stars: RateProp
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