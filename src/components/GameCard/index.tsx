import { Game } from '@/types'
import React, { useEffect, useState } from 'react'
import Team from '../Team'
import PlayIcon from '../icons/PlayIcon'
import { convertGmtToLocalTime } from '@/utils'
import { useNavigate } from 'react-router-dom'

type Props = {
  game: Game
  appTime: {
    hours: number
    minutes: number
  }
}

const GameCard: React.FC<Props> = ({ game, appTime }) => {
  const [isLive, setIsLive] = useState(false)
  const [playBtn, setPlayBtn] = useState(false)
  const navigate = useNavigate()


  const checkLive = () => {
    const today = new Date()
    const gameDate = new Date(game.date)

    if (today.getFullYear() === gameDate.getFullYear() && today.getMonth() === gameDate.getMonth() && today.getDate() === gameDate.getDate()) {
      const hour = Number(game.time?.split(":")?.[0])
      const minute = Number(game.time?.split(":")?.[1])

      if (hour <= appTime.hours) {
        setIsLive(true)
      }

      else if (hour < appTime.hours && minute < appTime.minutes) {
        setIsLive(true)
      }
      else setIsLive(false)
    }
  }

  useEffect(() => {
    checkLive()
  }, [])

  return (
    <div onMouseLeave={() => setPlayBtn(false)} onMouseEnter={() => setPlayBtn(true)} onClick={() => navigate(`/play-match/${game.id}`)} className="hover:bg-gray-100 flex justify-between items-center relative gap-2 p-2 bg-white shadow-md rounded-md md:w-[600px]">
      <div className={`${playBtn ? "block" : "hidden"} absolute top-8 left-[46%] opacity-80`}>
        <PlayIcon />
      </div>
      <Team isHome alt={game.home_en} src={game.home_logo} title={game.home_en} />
      <div className="w-[50px] grid text-center items-center justify-center">
        <img className="w-10 h-10" src={`https://web-api.scorarab.com/uploads/league/${game.league_logo}`} />
        <div>
          {game.home_score ?
            <>
              <span className="text-lg font-bold">{game.home_score}</span>
              <span className="text-lg font-bold"> - {game.away_score}</span>
            </> :
            <span className="text-lg font-bold">VS</span>
          }
          {isLive ? <span className="text-md font-bold text-red-600 flex items-center justify-center gap-1 animate-pulse">
            <p>LIVE</p>
          </span>
            : <p className="text-sm font-medium">{convertGmtToLocalTime(game.time)}</p>}
        </div>
      </div>
      <Team alt={game.away_en} src={game.away_logo} title={game.away_en} />
    </div>
  )
}

export default
  GameCard