import React,{useEffect} from 'react'
import {requests} from '../utils/fetchMovieDetails'
import Banner from '../containers/bannerContainer'
import Row from '../containers/rowContainer'
import Nav from './Nav'
import Loader from './Loader'

function Main({
    isFetchingNetflixOriginals,
isFetchingTrending,
isFetchingTopRated,
isFetchingActionMovies,
isFetchingComedyMovies,
isFetchingHorrorMovies,
fetchNetflixOriginals,
fetchtrending,
fetchTopRated,
fetchActionMovies,
fetchComedyMovies,
fetchHorrorMovies
}){

    
    useEffect(()=>{
        fetchNetflixOriginals()
    },[fetchNetflixOriginals])

    useEffect(()=>{
        fetchHorrorMovies()
    },[fetchHorrorMovies])

    useEffect(()=>{
        fetchComedyMovies()
    },[fetchComedyMovies])

    useEffect(()=>{
        fetchActionMovies()
    },[fetchActionMovies])

    useEffect(()=>{
        fetchtrending()
    },[fetchtrending])

    useEffect(()=>{
        fetchTopRated()
    },[fetchTopRated])
    if(isFetchingActionMovies||isFetchingComedyMovies||isFetchingHorrorMovies||
        isFetchingNetflixOriginals||isFetchingTopRated||isFetchingTrending){
            return (
                <Loader />
            )
    }
    return (
        <div className="app">
            <Nav />
            <Banner />
            <Row rowTitle="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} isLarge={true}/>
            <Row rowTitle="Trending Now" fetchURL={requests.fetchTrending} isLarge={false}/>
            <Row rowTitle="Top Rated" fetchURL={requests.fetchTopRated} isLarge={false}/>
            <Row rowTitle="Action Movies" fetchURL={requests.fetchActionMovies} isLarge={false}/>
            <Row rowTitle="Comedy Movies" fetchURL={requests.fetchComedyMovies} isLarge={false}/>
            <Row rowTitle="Horror Movies" fetchURL={requests.fetchHorrorMovies} isLarge={false}/>
        </div>
    )
}

export default Main
