import MoviesWatchedStats from "./moviesWatchedStats";
import MoviesWatched from "./moviesWatched";

export default function MoviesWatchedList({
  watched,
  isOpen2,
  avgImdbRating,
  setIsOpen2,
  avgUserRating,
  avgRuntime,
}) {
  return (
    <>
      {isOpen2 && (
        <>
          <MoviesWatchedStats
            watched={watched}
            avgImdbRating={avgImdbRating}
            avgUserRating={avgUserRating}
            avgRuntime={avgRuntime}
          />
          <MoviesWatched watched={watched} setIsOpen2={setIsOpen2} />
        </>
      )}
    </>
  );
}
