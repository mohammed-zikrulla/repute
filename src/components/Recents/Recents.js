import "./Recents.css";
import { useSelector, useDispatch } from "react-redux";
import { updateRecentSearch } from "../../Store";
import { useEffect } from "react";

const Recents = () => {
  const dispatch = useDispatch();

  const recentSearch = useSelector((state) => state.recentSearch);

  useEffect(() => {
    const searches = localStorage.getItem("recentSearch");
    if (searches === null || JSON.parse(searches).length === 0) {
      dispatch(updateRecentSearch([]));
    } else {
      dispatch(updateRecentSearch(JSON.parse(searches)));
    }
  }, []);

  const handleDelete = (id) => {
    const localArray = localStorage.getItem("recentSearch");
    const updatedMovies = recentSearch.filter((movie) => movie.id !== id);
    localStorage.setItem("recentSearch", JSON.stringify(updatedMovies));
    dispatch(updateRecentSearch(updatedMovies));
  };

  return (
    <div className="recents">
      <h2 className="recent__title">recent searches</h2>
      <div className="recent__posters">
        {recentSearch.map((movie) => (
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
