import SearchedMoviesList from "./moviesSearched/SearchedMovieList";
import WatchedList from "./moviesWatched/WatchedList";
import { useState } from "react";

export default function Main({ movies, watched }) {
  const [isSearchedOpen, setIsSearchedOpen] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

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
            isOpen2={isOpen2}
            setIsOpen2={setIsOpen2}
          />
        </div>
      </main>
    </>
  );
}
