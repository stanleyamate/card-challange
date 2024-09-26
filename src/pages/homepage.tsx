import { FC } from 'react'
import BetCard from '@/components/BetCard'

const HomePage: FC = () => {

  return (
    <main className="grid bg-gray-200 items-center px-3 min-h-screen">
      <BetCard
        stars={5}
        betAmount={10}
        getAmount={30}
        logo="/logo.svg"
        title="Grosvenor Casinos"
      />
    </main>
  )
}

export default HomePage