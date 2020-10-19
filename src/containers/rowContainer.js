import {connect} from 'react-redux'
import {fetchMovies} from '../actions'
import Row from '../components/Row'

const mapStateToProps = (state,ownProps) => {

    let movies = []
    let isFetching = false
    switch(ownProps.rowTitle){
        case "Netflix Originals":
            movies = state.movies.netflixOriginals
            isFetching = state.movies.isFetchingNetflixOriginals
            break;
        case "Trending Now":
            movies = state.movies.trending
            isFetching = state.movies.isFetchingTrending
            break;
        case "Top Rated":
            movies = state.movies.topRated
            isFetching = state.movies.isFetchingTopRated
            break;

        case "Action Movies":
            movies = state.movies.actionMovies
            isFetching = state.movies.isFetchingActionMovies
            break;
        case "Comedy Movies":
            movies = state.movies.comedyMovies
            isFetching = state.movies.isFetchingComedyMovies
            break;
        case "Horror Movies":
            movies = state.movies.horrorMovies
            isFetching = state.movies.isFetchingHorrorMovies
            break;   
            
        default:
            break;
            

    }
    //console.log(movies)
    return{
        movies,
        isFetching,
        rowTitle:ownProps.rowTitle,
        isLarge:ownProps.isLarge

    }

}

const mapDispatchToProps = (dispatch,ownProps) => {

    return {
        fetchMovies:()=>dispatch(fetchMovies(ownProps.rowTitle,ownProps.fetchURL))
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Row)