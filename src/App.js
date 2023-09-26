import { useState } from "react";
import NavBar from "./components/UI/navbar";
import Main from "./components/main";
import Logo from "./components/UI/logo";
import NumResults from "./components/UI/numResults";
import SearchBar from "./components/UI/searchBar";
import SearchedMoviesList from "./components/Searched/SearchedMovieList";
import WatchedMovieList from "./components/Watched/WatchedMovieList";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

export default function App() {
  const [isSearchedOpen, setIsSearchedOpen] = useState(true);
  const [isWatchedOpen, setIsWatchedOpen] = useState(true);
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <NavBar movies={movies}>
        <Logo />
        <SearchBar />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <SearchedMoviesList
          isSearchedOpen={isSearchedOpen}
          setIsSearchedOpen={setIsSearchedOpen}
          movies={movies}
        />
        <WatchedMovieList
          isWatchedOpen={isWatchedOpen}
          setIsWatchedOpen={setIsWatchedOpen}
        />
      </Main>
    </>
  );
}
