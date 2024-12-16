import { cdn_frame } from '@/config/axios';
import { Game } from '@/types';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

type Props = object

const PlayPage: React.FC<Props> = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true);
  const [channelLink, setChannelLink] = useState('');
  const [selectedGame, setSelectedGame] = useState<Game | undefined>(undefined);

  const gamesStorage = localStorage.getItem("games");

  useEffect(() => {
    if (gamesStorage) {
      const games = JSON.parse(gamesStorage) as Game[];
      const game = games.filter((g) => g.id === id);
      console.log(game)
      setSelectedGame(game[0]);
      setLoading(false);
    }
  }, [id])


  return (
    <main className="grid bg-grey-300 items-center min-h-screen bg-gray-100 pb-32">
      <section className="flex flex-col items-center justify-center py-10 bg-blue-950 shadow-md">
        <div className='bg-[rgba(255,255,255,0.7)] p-3 text-center rounded-lg'>
          <h2 className="text-3xl font-bold mb-4">Stanko Sports Live</h2>
          <p className="text-lg">Watch and enjoy your Game</p>
        </div>
      </section>
      <section className="grid md:grid-cols-2 lg:px-52 gap-6 mt-12">
        {loading && <div className='text-center'>Loading...</div>}
        {selectedGame && selectedGame?.channels?.map((c) => (
          <div onClick={() => setChannelLink(c.ch)} key={c.id} className="bg-black text-white hover:bg-white hover:text-black border-2 border-black font-semibold p-4 flex items-center justify-center text-center">
            <p>{c.server_name_en}</p>
          </div>
        ))
        }
      </section>

      <div className='flex flex-col gap-2 mt-10 items-center lg:px-52'>
        <strong className="text-center text-sm border my-3">
          {`<iframe
            width='100%'
            height='500px'
            allowfullscreen="true"
            src=https://koora.vip/share.php?ch=${channelLink}
          ></iframe>`}
        </strong>
        {
          channelLink &&
          <iframe width="100%" height="100%" allow="autoplay" id="match_frame" allowFullScreen={true} loading="lazy" src={`${cdn_frame + channelLink}`}>
            {selectedGame?.html}
          </iframe>
        }
      </div>
    </main>
  )
}

export default PlayPage