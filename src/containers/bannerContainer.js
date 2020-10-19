import {connect} from 'react-redux'
import Banner from '../components/Banner'

const mapStateToProps = (state) => ({
    movie:state.movies.netflixOriginals[Math.floor(Math.random()*state.movies.netflixOriginals.length)]
})

export default connect(mapStateToProps)(Banner) 
