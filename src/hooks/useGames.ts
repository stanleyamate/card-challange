"use client"
import { useContext } from "react"
import GameContext from "@/context/GameContext"

const useGames = () => {
	return useContext(GameContext)
}

export default useGames