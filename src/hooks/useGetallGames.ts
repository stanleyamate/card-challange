import { getAllGames } from "@/config/axios"
import { useQuery } from "@tanstack/react-query"

const useGetallGames =(date:string, time:number)=>{
 const query = useQuery({
  queryKey: ['getAllGames', date, time],
  queryFn:()=>getAllGames(date, time),
})
return query
}

export default useGetallGames