import MoviesSearched from "./moviesSearched";

export default function MoviesSearchedList({ setIsOpen1, isOpen1, movies }) {
  return (
    <>
      <div className="box">
        <MoviesSearched
          isOpen1={isOpen1}
          movies={movies}
          setIsOpen1={setIsOpen1}
        />
      </div>
    </>
  );
}
