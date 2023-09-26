import Button from "../UI/button";

export default function Watched({ watched, isWatchedOpen, setIsWatchedOpen }) {
  return (
    <>
      <Button
        className="btn-toggle"
        onClick={() => setIsWatchedOpen((open) => !open)}
      >
        {isWatchedOpen ? "–" : "+"}
      </Button>
      {isWatchedOpen ? (
        <ul className="list">
          {watched.map((movie) => (
            <li key={movie.imdbID}>
              <img src={movie.Poster} alt={`${movie.Title} poster`} />
              <h3>{movie.Title}</h3>
              <div>
                <p>
                  <span>⭐️</span>
                  <span>{movie.imdbRating}</span>
                </p>
                <p>
                  <span>🌟</span>
                  <span>{movie.userRating}</span>
                </p>
                <p>
                  <span>⏳</span>
                  <span>{movie.runtime} min</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
