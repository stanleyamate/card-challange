import React from 'react'

type Props = {
  src: string
  alt: string
  title: string
  isHome?: boolean
}

const Team: React.FC<Props> = ({ src, alt, title, isHome }) => {
  return (
    <div className={`flex ${isHome ? "flex-row-reverse" : "flex-row"} gap-3 w-[200px] border border-slate-200 bg-slate-100 py-4 px-2 rounded-md items-center`}>
      <img
        src={`https://web-api.scorarab.com/uploads/team/${src}`}
        alt={alt}
        className="h-14 w-14"
      />
      <h3 className={`text-md font-bold ${isHome ? "text-right" : "text-left"}`}>{title}</h3>
    </div>
  )
}

export default Team