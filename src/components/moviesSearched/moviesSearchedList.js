import Button from "../button";
import MoviesSearched from "./moviesSearched";

export default function MoviesSearchedList({ setIsOpen1, isOpen1, movies }) {
  return (
    <>
      <div className="box">
        <Button
          className="btn-toggle"
          onClick={() => setIsOpen1((open) => !open)}
        >
          {isOpen1 ? "–" : "+"}
        </Button>
        <MoviesSearched isOpen1={isOpen1} movies={movies} />
      </div>
    </>
  );
}
