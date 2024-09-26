import { FC } from 'react'

type Props = {
  betAmount: number
  getAmount: number
}

const Bunus: FC<Props> = ({ betAmount, getAmount }) => {
  return (
    <div className="flex items-center text-center justify-center  md:self-end lg:self-auto md:items-start lg:items-center flex-col">
      <h4 className='font-bold text-2xl md:text-xl'>Bonus</h4>
      <span className='text-3xl w-full md:leading-5 flex md:gap-2 flex-col sm:justify-center md:justify-start sm:gap-3 sm:flex-row lg:flex-col lg:text-xl'>
        <p>Bet £{betAmount}</p>
        <p>Get £{getAmount}</p>
      </span>
    </div>
  )
}

export default Bunus