import { createContext, FC, ReactNode, useState } from "react";
import { Game } from "@/types";

interface Props {
  children: ReactNode;
}

type IGameContext = {
  games: Game[]
  setGames: (arg: Game[]) => void
}

const defaultState = {
  games: [],
};

const GameContext = createContext<Partial<IGameContext>>(defaultState);

export const GameProvider: FC<Props> = ({ children }) => {
  const [games, setGames] = useState<Game[]>([]);

  // values to share in the context
  const values = {
    games,
    setGames,
  };

  return <GameContext.Provider value={values}>{children}</GameContext.Provider>;
};

export default GameContext;
