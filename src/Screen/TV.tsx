import React from 'react'
import Header from '../Components/Header'
import MovieList from '../Components/MovieList'

function TV() {
  // Define different TV show categories with their dummy data
  const popularShows = {
    genreId: 10765,
    movies: [
      {
        id: 1,
        title: "Stranger Things",
        poster_path: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
        vote_average: 8.6
      },
      {
        id: 2,
        title: "The Mandalorian",
        poster_path: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
        vote_average: 8.5
      }
    ]
  };

  const dramaShows = {
    genreId: 18,
    movies: [
      {
        id: 3,
        title: "Breaking Bad",
        poster_path: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
        vote_average: 9.5
      },
      {
        id: 4,
        title: "The Crown",
        poster_path: "https://image.tmdb.org/t/p/w500/dlUxHtGz8LKtYM9TQ42dmG0vJYQ.jpg",
        vote_average: 8.7
      }
    ]
  };

  const crimeShows = {
    genreId: 80,
    movies: [
      {
        id: 5,
        title: "Money Heist",
        poster_path: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
        vote_average: 8.3
      },
      {
        id: 6,
        title: "Peaky Blinders",
        poster_path: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
        vote_average: 8.6
      }
    ]
  };

  return (
    <div className='bg-[#1A1C22] min-h-screen'>
      <Header />
      <div className='pt-[100px] px-8'>
        <h2 className='text-white text-[20px] font-bold mb-5'>Popular TV Shows</h2>
        <MovieList genreId={popularShows.genreId} movieData={popularShows.movies} />
        
        <h2 className='text-white text-[20px] font-bold mb-5'>Drama Series</h2>
        <MovieList genreId={dramaShows.genreId} movieData={dramaShows.movies} />
        
        <h2 className='text-white text-[20px] font-bold mb-5'>Crime Shows</h2>
        <MovieList genreId={crimeShows.genreId} movieData={crimeShows.movies} />
      </div>
    </div>
  )
}

export default TV