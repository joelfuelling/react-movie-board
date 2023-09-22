import MoviesSearchedList from "./moviesSearched/moviesSearchedList";
import MoviesWatchedList from "./moviesWatched/moviesWatchedList";
import { useState } from "react";

export default function Main({ movies, watched }) {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <>
      <main className="main">
        <MoviesSearchedList
          movies={movies}
          isOpen1={isOpen1}
          setIsOpen1={setIsOpen1}
        />
        {/* MoviesWatchedList  */}
        <div className="box">
          <MoviesWatchedList
            watched={watched}
            isOpen2={isOpen2}
            setIsOpen2={setIsOpen2}
            avgImdbRating={avgImdbRating}
            avgUserRating={avgUserRating}
            avgRuntime={avgRuntime}
          />
        </div>
      </main>
    </>
  );
}
