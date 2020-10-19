import {connect} from 'react-redux'
import Main from '../components/Main'
import {requests} from '../utils/fetchMovieDetails'
import {fetchMovies} from '../actions'


const mapStateToProps = (state) => ({
    isFetchingNetflixOriginals:state.movies.isFetchingNetflixOriginals,
    isFetchingTrending:state.movies.isFetchingTrending,
    isFetchingTopRated:state.movies.isFetchingTopRated,
    isFetchingActionMovies:state.movies.isFetchingActionMovies,
    isFetchingComedyMovies:state.movies.isFetchingComedyMovies,
    isFetchingHorrorMovies:state.movies.isFetchingHorrorMovies
})

const mapDispatchToProps = (dispatch) => ({
    fetchNetflixOriginals:() => dispatch(fetchMovies("Netflix Originals",requests.fetchNetflixOriginals)),
    fetchtrending:() => dispatch(fetchMovies("Trending Now",requests.fetchTrending)),
    fetchTopRated:() => dispatch(fetchMovies("Top Rated",requests.fetchTopRated)),
    fetchActionMovies:() => dispatch(fetchMovies("Action Movies",requests.fetchActionMovies)),
    fetchComedyMovies:() => dispatch(fetchMovies("Comedy Movies",requests.fetchComedyMovies)),
    fetchHorrorMovies:() => dispatch(fetchMovies("Horror Movies",requests.fetchHorrorMovies)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Main)