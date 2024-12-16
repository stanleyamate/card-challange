import { FC, useEffect } from 'react'
import GameCard from '@/components/GameCard'
import useGetallGames from '@/hooks/useGetallGames'
import useGames from '@/hooks/useGames'

const HomePage: FC = () => {
  const { setGames } = useGames()
  const today = new Date()
  const todayDate = today.toISOString().slice(0, 10);
  const time = today.getMinutes();

  const appTime = {
    hours: today.getUTCHours(),
    minutes: today.getUTCMinutes()
  }

  const { data, isPending } = useGetallGames(todayDate, time)

  useEffect(() => {
    if (data) {
      setGames?.(data)
      console.log('games', data)
      localStorage.setItem('games', JSON.stringify(data)) // save to local storage for offline support
    }
  }, [data])

  //=========== component =============

  return (
    <main className="grid bg-grey-300 items-center px-3 min-h-screen relative bg-gray-100">
      <section className="flex flex-col items-center justify-center py-10 bg-blue-950 z-10 fixed top-0 left-0 w-full shadow-md">
        <div className='bg-[rgba(255,255,255,0.7)] p-3 text-center rounded-lg'>
          <h2 className="text-3xl font-bold mb-4">Welcome to Stanko Sports Live</h2>
          <p className="text-lg">Enjoy our live sports streaming experience</p>
        </div>
      </section>

      <div className='flex flex-col gap-2 items-center mt-52'>
        {isPending && <div className='text-center'>Loading...</div>}
        {
          data &&
          data?.sort((a, b) => {
            return a.time.localeCompare(b.time);
          })?.map((game) => (
            <GameCard game={game} appTime={appTime} />
          ))}

      </div>
      {/* <iframe src='https://koora.vip/share.php?ch=main_1' allowFullScreen={true} frameBorder={0} height='500px' scrolling='1' width='100%'></iframe> */}
    </main>
  )
}

export default HomePage