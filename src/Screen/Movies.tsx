import React from 'react'
import Header from '../Components/Header'
import MovieList from '../Components/MovieList'

function Movies() {
  // Define different movie categories with their dummy data
  const actionMovies = {
    genreId: 28,
    movies: [
      {
        id: 1,
        title: "The Dark Knight",
        poster_path: "https://image.tmdb.org/t/p/w500/1QFj9nV5mo1vxF4QrHrTEU4SM9n.jpg",
        vote_average: 8.4
      },
      {
        id: 2,
        title: "Inception",
        poster_path: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        vote_average: 8.8
      }
    ]
  };

  const comedyMovies = {
    genreId: 35,
    movies: [
      {
        id: 3,
        title: "The Hangover",
        poster_path: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg",
        vote_average: 7.7
      },
      {
        id: 4,
        title: "Superbad",
        poster_path: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEuslWxE.jpg",
        vote_average: 7.6
      }
    ]
  };

  const horrorMovies = {
    genreId: 27,
    movies: [
      {
        id: 5,
        title: "The Conjuring",
        poster_path: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
        vote_average: 7.5
      },
      {
        id: 6,
        title: "A Quiet Place",
        poster_path: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
        vote_average: 7.5
      }
    ]
  };

  return (
    <div className='bg-[#1A1C22] min-h-screen'>
      <Header />
      <div className='pt-[100px] px-8'>
        <h2 className='text-white text-[20px] font-bold mb-5'>Action Movies</h2>
        <MovieList genreId={actionMovies.genreId} movieData={actionMovies.movies} />
        
        <h2 className='text-white text-[20px] font-bold mb-5'>Comedy Movies</h2>
        <MovieList genreId={comedyMovies.genreId} movieData={comedyMovies.movies} />
        
        <h2 className='text-white text-[20px] font-bold mb-5'>Horror Movies</h2>
        <MovieList genreId={horrorMovies.genreId} movieData={horrorMovies.movies} />
      </div>
    </div>
  )
}

export default Movies