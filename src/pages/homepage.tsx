import { FC } from 'react'
import Rating from '@/components/Rating'
import Button from '@/components/Button'

type Props = object

const HomePage: FC<Props> = () => {
  return (
    <main className="grid bg-gray-200 items-center px-3 md:px-32 min-h-screen">
      <div className="p-3 bg-white rounded text-center md:text-left w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 shadow-lg">
        <section className='flex flex-col gap-4 md:flex-row md:gap-8 lg:flex-auto lg:gap-10'>
          <div className="bg-primary md:w-[40%] grid items-center justify-center">
            <img src="/logo.svg" alt="logo" />
          </div>
          <div className='grid gap-4 lg:grid-flow-col lg:gap-9'>
            <div className="flex flex-col items-center md:items-start gap-4 lg:flex-col lg:items-center">
              <p className="text-2xl underline hover:no-underline">Grosvenor Casinos</p>
              <Rating stars={5} />
            </div>
            <div className="">
              <h4 className='font-bold text-2xl md:text-xl'>Bonus</h4>
              <span className='text-3xl md:flex md:gap-2 lg:flex-col'>
                <p>Bet £10</p>
                <p>Get £400</p>
              </span>
            </div>
          </div>
        </section>
        <Button>Pay Now</Button>
      </div>
    </main>
  )
}

export default HomePage