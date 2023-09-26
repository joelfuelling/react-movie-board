import SearchedMovie from "./SearchedMovie";

import { useState } from "react";
export default function SearchedMoviesList({ movies }) {
  const [isSearchedOpen, setIsSearchedOpen] = useState(true);
  return (
    <>
      <ul className="list">
        {movies?.map((movie) =>
          isSearchedOpen ? <SearchedMovie movie={movie} /> : null
        )}
      </ul>
    </>
  );
}
