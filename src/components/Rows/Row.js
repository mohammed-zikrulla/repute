import "./Row.css";
const Row = ({ title, fetchMovies }) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {fetchMovies.map((movie) => (
          <>
            <img
              key={movie.id}
              className={`row__poster ${"row__posterLarge"} `}
              src={`https://image.tmdb.org/t/p/${"w500"}${
                movie.poster_path || movie.backdrop_path
              }`}
              alt={movie.name}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Row;
