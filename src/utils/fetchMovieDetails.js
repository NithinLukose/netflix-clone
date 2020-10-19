import axios from 'axios'

const APIKey = "d8c68258b4b299ce557cb9262936200c"

const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
})

export const imageBaseURL = "https://image.tmdb.org/t/p/original/"

export const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKey}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${APIKey}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKey}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${APIKey}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${APIKey}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${APIKey}&with_genres=27`,

}

export const getMovies = async (url) => {
    let response = await instance.get(url)
    .then(res=>res.data.results)
    //console.log(response)

    return response
}