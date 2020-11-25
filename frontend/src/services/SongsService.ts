import { classicNameResolver } from "typescript";
import { Song,KaraokempSong, YoutubeURL} from "../types";

const KARAOKEMP_API = process.env.REACT_APP_KARAOKEMP_API
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

export default class{

      static async getYoutubeResults(term:string) : Promise<Song[]>{
            let results = new Array<Song>()
            await fetch(`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&type=video&q=${term}&part=snippet&fields=items(id/videoId,snippet/title)&maxResults=3`)
            .then(res => res.json())
            .then((response:{items:{id:{videoId:string},snippet:{title:string}}[]}) => {
            const songs = response.items.map(item=>new Song(item.id.videoId,item.snippet.title,'https://i.ytimg.com/vi/AUjmpbd-U2Q/hqdefault.jpg'))
            results = songs
            }).catch(err=>{
                  console.error(err.message)
            })
      return results
      }
      static async getBucketSongs(): Promise<KaraokempSong[]>{
            let bucketSongs = new Array<KaraokempSong>()

            const objects:KaraokempSong[] = await fetch(`${KARAOKEMP_API}/songs`)
            .then(res => res.json())
            let songs = objects.map(obj=> new KaraokempSong(obj.videoId,obj.title,obj.image,obj.cloudUrl))
            console.log()
            bucketSongs = songs

      return bucketSongs;
      }

      static async getYoutubeSong(link: YoutubeURL) : Promise<Song>{
            let videoId = link!.searchParams.get('v')
            if(videoId){}
            
            const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&type=video&id=${videoId}&part=snippet&fields=items(id,snippet(title,thumbnails))`)
            .then(res => res.json())
            .then((res:{items:{id:string,snippet:{title:string,thumbnails:{standard:{url:string}}}}[]}) => res.items.pop())
            return new Song(res!.id,res!.snippet.title,res!.snippet.thumbnails.standard.url)
      }
      static async processSong(song:Song): Promise<KaraokempSong>{
            let result:any = await fetch(`${KARAOKEMP_API}/songs/youtube?video=${song.videoId}`,{method:'POST'})
            .then(response => response.json())
            const cloudSong: KaraokempSong = new KaraokempSong(result.videoId,result.title,result.image,result.cloudUrl)
            return cloudSong
      } 
}