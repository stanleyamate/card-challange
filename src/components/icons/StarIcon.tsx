import React, { SVGAttributes } from 'react'

type Props = SVGAttributes<SVGAElement> & {
  active: boolean
}

const StarIcon: React.FC<Props> = ({ active }) => {

  return (
    <svg width="30" height="29" viewBox="0 0 30 29" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 0L19.0998 9.85711L29.7414 10.7102L21.6336 17.6554L24.1107 28.0398L15 22.475L5.88933 28.0398L8.36638 17.6554L0.258624 10.7102L10.9002 9.85711L15 0Z" fill={active ? "#F09F00" : "#e3e3e3"} />
    </svg>
  )
}

export default StarIcon