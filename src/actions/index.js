import { getMovies } from "../utils/fetchMovieDetails"

export const REQUEST_TRENDING = "REQUEST_TRENDING"
export const REQUEST_NETFLIX_ORIGINALS = "REQUEST_NETFLIX_ORIGINALS"
export const REQUEST_TOP_RATED = "REQUEST_TOP_RATED"
export const REQUEST_ACTION_MOVIES = "REQUEST_ACTION_MOVIES"
export const REQUEST_COMEDY_MOVIES = "REQUEST_COMEDY_MOVIES"
export const REQUEST_HORROR_MOVIES = "REQUEST_HORROR_MOVIES"

export const RESPONSE_TRENDING = "RESPONSE_TRENDING"
export const RESPONSE_NETFLIX_ORIGINALS = "RESPONSE_NETFLIX_ORIGINALS"
export const RESPONSE_TOP_RATED = "RESPONSE_TOP_RATED"
export const RESPONSE_ACTION_MOVIES = "RESPONSE_ACTION_MOVIES"
export const RESPONSE_COMEDY_MOVIES = "RESPONSE_COMEDY_MOVIES"
export const RESPONSE_HORROR_MOVIES = "RESPONSE_HORROR_MOVIES"

const requestMovies = (action) => ({
    type:action,
})

const responseMovies = (action,data) => ({
    type:action,
    payload:data
})

export const fetchMovies = (type,url) => {

    return async (dispatch) => {
        let requestAction = ""
        let responseAction = ""
        switch(type){
            case "Netflix Originals":
                requestAction = REQUEST_NETFLIX_ORIGINALS
                responseAction = RESPONSE_NETFLIX_ORIGINALS
                break;
            case "Trending Now":
                requestAction = REQUEST_TRENDING
                responseAction = RESPONSE_TRENDING
                break;
            case "Top Rated":
                requestAction = REQUEST_TOP_RATED
                responseAction = RESPONSE_TOP_RATED
                break;

            case "Action Movies":
                requestAction = REQUEST_ACTION_MOVIES
                responseAction = RESPONSE_ACTION_MOVIES
                break;
            case "Comedy Movies":
                requestAction = REQUEST_COMEDY_MOVIES
                responseAction = RESPONSE_COMEDY_MOVIES
                break;
            case "Horror Movies":
                requestAction = REQUEST_HORROR_MOVIES
                responseAction = RESPONSE_HORROR_MOVIES
                break;   
                
            default:
                break;
                

        }

        dispatch(requestMovies(requestAction))
        let response = await getMovies(url)
        //console.log(response)
        dispatch(responseMovies(responseAction,response))

    }
}

