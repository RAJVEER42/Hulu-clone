import React from 'react'
import Header from '../Components/Header'
import MovieList from '../Components/MovieList'

function Sports() {
  // Define different sports categories with their dummy data
  const sportsDocumentaries = {
    genreId: 99,
    movies: [
      {
        id: 1,
        title: "The Last Dance",
        poster_path: "https://image.tmdb.org/t/p/w500/2FYzxgLNuNVwncilzUeCGbOQzP7.jpg",
        vote_average: 9.1
      },
      {
        id: 2,
        title: "Formula 1: Drive to Survive",
        poster_path: "https://image.tmdb.org/t/p/w500/hZqx2JcZVjHSY2lK9hEI4JMF6IR.jpg",
        vote_average: 8.8
      },
      {
        id: 3,
        title: "All or Nothing: Manchester City",
        poster_path: "https://image.tmdb.org/t/p/w500/7FqUz6YUJZrF4pJaKwN6SiR6bzU.jpg",
        vote_average: 8.5
      }
    ]
  };

  const realitySports = {
    genreId: 10764,
    movies: [
      {
        id: 4,
        title: "UFC Fight Night",
        poster_path: "https://image.tmdb.org/t/p/w500/8W2qYH3J9oNcKYEI9zoGGh8KdWm.jpg",
        vote_average: 8.2
      },
      {
        id: 5,
        title: "WWE Raw",
        poster_path: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
        vote_average: 7.8
      },
      {
        id: 6,
        title: "Hard Knocks: NFL",
        poster_path: "https://image.tmdb.org/t/p/w500/9kMV2FzvF6yJ8kDBR3d3JkHqYi3.jpg",
        vote_average: 8.4
      }
    ]
  };

  const liveSports = {
    genreId: 10768,
    movies: [
      {
        id: 7,
        title: "Premier League Live",
        poster_path: "https://image.tmdb.org/t/p/w500/2SEgJ0mHJ7TSdVDbkGU061tR33K.jpg",
        vote_average: 8.9
      },
      {
        id: 8,
        title: "NBA Basketball",
        poster_path: "https://image.tmdb.org/t/p/w500/5RzXD1SnEFqXFYkYkurNlFnTwXK.jpg",
        vote_average: 8.7
      },
      {
        id: 9,
        title: "MLB Baseball",
        poster_path: "https://image.tmdb.org/t/p/w500/3KUjDt8XY7w2Ku70UE0SECmv1zP.jpg",
        vote_average: 8.3
      }
    ]
  };

  return (
    <div className='bg-[#1A1C22] min-h-screen'>
      <Header />
      <div className='pt-[100px] px-8'>
        <h2 className='text-white text-[20px] font-bold mb-5'>Sports Documentaries</h2>
        <MovieList genreId={sportsDocumentaries.genreId} movieData={sportsDocumentaries.movies} />
        
        <h2 className='text-white text-[20px] font-bold mb-5'>Reality Sports</h2>
        <MovieList genreId={realitySports.genreId} movieData={realitySports.movies} />
        
        <h2 className='text-white text-[20px] font-bold mb-5'>Live Sports</h2>
        <MovieList genreId={liveSports.genreId} movieData={liveSports.movies} />
      </div>
    </div>
  )
}

export default Sports