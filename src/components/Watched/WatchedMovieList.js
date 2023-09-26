import { useState } from "react";
import MoviesWatchedStats from "./WatchedMovieStats";
import WatchedMovie from "./WatchedMovie";

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

export default function WatchedMovieList() {
  const [isWatchedOpen, setIsWatchedOpen] = useState(true);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <div className="box">
        <MoviesWatchedStats watched={watched} />
        <WatchedMovie
          watched={watched}
          setIsWatchedOpen={setIsWatchedOpen}
          isWatchedOpen={isWatchedOpen}
        />
      </div>
    </>
  );
}
