import SearchedMovie from "./SearchedMovie";
import Button from "../UI/button";
export default function SearchedMoviesList({
  movies,
  isSearchedOpen,
  setIsSearchedOpen,
}) {
  return (
    <>
      <div className="box">
        <Button
          className="btn-toggle"
          onClick={() => setIsSearchedOpen((open) => !open)}
        >
          {isSearchedOpen ? "–" : "+"}
        </Button>
        <ul className="list">
          <SearchedMovie
            movies={movies}
            setIsSearchedOpen={setIsSearchedOpen}
            isSearchedOpen={isSearchedOpen}
          />
        </ul>
      </div>
    </>
  );
}
