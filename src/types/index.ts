export type RateProp = 1|2|3|4|5
export type Game = {
  time:string
  id: string,
  home_en: string,
  home_logo: string,
  away_en: string,
  away_logo: string,
  date: string,
  channels:Channel[]
  home_score:string
  away_score:string
  html:string
  league:string
  league_en:string
  league_logo:string
  page:null | string
  page_id:string
  score:string
  selected:string
  sitemap:number
  status:number
}

export type Channel = {
ch:string
edge:string
have_second_link:string
id:string
key:string
lang:string
link:string
server_name: string
server_name_en:string
server_num: string
type:string
}