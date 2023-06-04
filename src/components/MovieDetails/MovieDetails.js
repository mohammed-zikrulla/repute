import "./MovieDetails.css";
import { useDispatch, useSelector } from "react-redux";

const MovieDetails = ({ fetchMovies }) => {
  const filterArray = useSelector((state) => state.filterArray);

  return filterArray.map((movie) => (
    <div className="moviesContainer">
      <div className="movieRow">
        <img
          className={"posters"}
          src={`https://image.tmdb.org/t/p/${"w500"}${movie.backdrop_path}`}
          alt={movie.name}
        />
        <div className="title-description">
          <p className="movie-title">{movie.title}</p>
          <p className="movie-description">
            <span>{"  "}🎬Description:</span> {movie.overview}
          </p>
          <p className="movie-likes">
            {" "}
            {movie.vote_count} people liked this movie! {"  "} 📀
          </p>
        </div>
        <div className="language-rating">
          <p className="movie-language">
            language: '{movie.original_language}'
          </p>
          <p className="movie-rating">Rating: {movie.vote_average}⭐⭐⭐⭐⭐</p>
          <p className="movie-language">Release Date: {movie.release_date}</p>
          <p className="movie-rating">Popularity: {movie.popularity}🔥🔥🔥🔥</p>
        </div>
      </div>
    </div>
  ));
};

export default MovieDetails;
