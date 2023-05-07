import "./Recents.css";
import { useState, useEffect } from "react";

const Recents = ({ title, fetchMovies }) => {
  const [movies, setMovies] = useState(() => {
    const savedMovies = localStorage.getItem("movies");
    return savedMovies ? JSON.parse(savedMovies) : fetchMovies;
  });

  const handleDelete = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  };

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  return (
    <div className="recents">
      <h2 className="recent__title">recent searches</h2>
      <div className="recent__posters">
        {movies.map((movie) => (
          <div key={movie.id} className="recent__posterContainer">
            <img
              className={`recent__poster ${"recent__posterLarge"}`}
              src={`https://image.tmdb.org/t/p/${"w500"}${
                movie.poster_path || movie.backdrop_path
              }`}
              alt={movie.name}
            />
            <button
              className="recent__deleteButton"
              onClick={() => handleDelete(movie.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recents;
