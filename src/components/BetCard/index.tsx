import { FC } from 'react'
import Bunus from '../Bonus'
import Button from '../Button'
import Rating from '../Rating'
import { RateProp } from '@/types'

type Props = {
  stars: RateProp
  betAmount: number
  getAmount: number
  title: string //Grosvenor Casinos
  logo: string
}

const BetCard: FC<Props> = (props) => {
  const { stars, betAmount, getAmount, title, logo } = props;

  return (
    <div className='grid w-full grid-cols-1 gap-8 md:gap-5 md:grid-cols-2 lg:grid-rows-1 md:grid-rows-3  lg:grid-cols-4 xl:grid-cols-6 bg-white shadow-lg p-3'>
      <div className="bg-primary grid md:col-span-1 md:row-span-2 xl:col-span-2 lg:row-span-1 items-center justify-center ">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex  flex-col items-center justify-center md:items-start gap-4 lg:flex-col lg:items-center">
        <h2 className="text-xl underline hover:no-underline">{title}</h2>
        <Rating stars={stars} />
      </div>

      <Bunus betAmount={betAmount} getAmount={getAmount} />

      <div className='flex-1 md:col-span-2 lg:col-span-1 xl:col-span-2  xl:pr-12 flex items-center md:items-end lg:items-center justify-center'>
        <Button size='lg' fullWidth>Bet Now</Button>
      </div>
    </div>
  )
}

export default BetCard