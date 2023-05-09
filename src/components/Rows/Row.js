import "./Row.css";
const Row = ({ title, fetchMovies }) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {fetchMovies.map((movie) => (
          <div className="row__poster__div">
            <img
              key={movie.id}
              className={`row__poster ${"row__posterLarge"} `}
              src={`https://image.tmdb.org/t/p/${"w500"}${
                movie.poster_path || movie.backdrop_path
              }`}
              alt={movie.name}
            />
            <div className="movie-metadata">
              <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                {movie.title}
              </p>
              <p>Language: {movie.original_language}</p>
              <p>Votes: {movie.vote_average}</p>
              <p>Popularity: {movie.popularity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
