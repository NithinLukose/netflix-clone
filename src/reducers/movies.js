import {REQUEST_TRENDING,RESPONSE_TRENDING,
REQUEST_TOP_RATED,RESPONSE_TOP_RATED,REQUEST_ACTION_MOVIES,RESPONSE_ACTION_MOVIES,
REQUEST_COMEDY_MOVIES,RESPONSE_COMEDY_MOVIES,REQUEST_HORROR_MOVIES,
RESPONSE_HORROR_MOVIES,RESPONSE_NETFLIX_ORIGINALS,REQUEST_NETFLIX_ORIGINALS} from '../actions'

const movies = (state={
    netflixOriginals:[],
    trending:[],
    topRated:[],
    actionMovies:[],
    comedyMovies:[],
    horrorMovies:[],
    isFetchingNetflixOriginals:false,
    isFetchingTrending:false,
    isFetchingTopRated:false,
    isFetchingActionMovies:false,
    isFetchingComedyMovies:false,
    isFetchingHorrorMovies:false,
},action) => {

    //console.log(action.payload)
    switch(action.type){
        case REQUEST_NETFLIX_ORIGINALS:
            return {...state,isFetchingNetflixOriginals:true}
        case REQUEST_TRENDING:
            return {...state,isFetchingTrending:true}
        case REQUEST_TOP_RATED:
            return {...state,isFetchingTopRated:true}
        case REQUEST_ACTION_MOVIES:
            return {...state,isFetchingActionMovies:true}
        case REQUEST_COMEDY_MOVIES:
            return {...state,isFetchingComedyMovies:true}
        case REQUEST_HORROR_MOVIES:
            return {...state,isFetchingHorrorMovies:true}
        case RESPONSE_NETFLIX_ORIGINALS:
            return {...state,netflixOriginals:action.payload,isFetchingNetflixOriginals:false}
        case RESPONSE_TRENDING:
            return {...state,trending:action.payload,isFetchingTrending:false}
        case RESPONSE_TOP_RATED:
            return {...state,topRated:action.payload,isFetchingTopRated:false}
        case RESPONSE_ACTION_MOVIES:
            return {...state,actionMovies:action.payload,isFetchingActionMovies:false}
        case RESPONSE_COMEDY_MOVIES:
            return {...state,comedyMovies:action.payload,isFetchingComedyMovies:false}
        case RESPONSE_HORROR_MOVIES:
            return {...state,horrorMovies:action.payload,isFetchingHorrorMovies:false}
        default:
            return state

    }
}

export default movies