import { Game } from "@/types";
import axios from "axios";

export const getAllGames = async(date:string, time:number):Promise<Game[]>=>{
  const response = await axios.get(`https://web-api.scorarab.com/api/detail-matches/${date}?t=${time}`)
 return response?.data
}

export const cdn_frame = "https://koora.vip/share.php?ch="; // Where ch is key_ch found in channels[i].ch