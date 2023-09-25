import SearchedMoviesList from "./Searched/SearchedMovieList";
import WatchedList from "./Watched/WatchedList";
import { useState } from "react";

// {movies} being passed through 'Main' from 'App' to the children components.
export default function Main({ movies, watched }) {
  const [isSearchedOpen, setIsSearchedOpen] = useState(true);
  const [isWatchedOpen, setIsWatchedOpen] = useState(true);

  return (
    <>
      <main className="main">
        <div className="box">
          <SearchedMoviesList
            movies={movies}
            isSearchedOpen={isSearchedOpen}
            setIsSearchedOpen={setIsSearchedOpen}
          />
        </div>

        <div className="box">
          <WatchedList
            watched={watched}
            isWatchedOpen={isWatchedOpen}
            setIsWatchedOpen={setIsWatchedOpen}
          />
        </div>
      </main>
    </>
  );
}
