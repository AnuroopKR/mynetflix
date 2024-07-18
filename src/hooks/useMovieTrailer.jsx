import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer=()=>{
    const dispatch=useDispatch()
const getMovieVideos=async ()=>{
    console.log("aaaa");
    const data= await fetch('https://api.themoviedb.org/3/movie/1022789/videos?language=en-US', API_OPTIONS)
    const json = await data.json()
    console.log("video", json);  
    const filterData=json.results.filter((video)=>video.type=="Trailer")
    const trailer=filterData.length==0?filterData[0]:json.results[0]
    console.log(trailer);
      dispatch(addTrailerVideo(trailer))
  }

    useEffect(()=>{
        console.log("aaaaa");
        getMovieVideos()
    },[])
}

export default useMovieTrailer