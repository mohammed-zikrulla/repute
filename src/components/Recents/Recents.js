import "./Recents.css";
import { useSelector, useDispatch } from "react-redux";
import { updateRecentSearch } from "../../Store";

const Recents = () => {
  const dispatch = useDispatch();

  const recentArray = useSelector((state) => state.recentSearch);

  const handleDelete = (id) => {
    const updatedMovies = recentArray.filter((movie) => movie.id !== id);
    dispatch(updateRecentSearch(updatedMovies));
  };

  const deleteAll = () => {
    const updateMovies = [];
    dispatch(updateRecentSearch(updateMovies));
  };

  return (
    <div className="recents">
      <h2 className="recent__title">recent searches</h2>
      <div className="recent__posters">
        {recentArray.map((movie) => (
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

      {recentArray.length > 1 && (
        <div className="deleteAll">
          <button className="deleteAllButton" onClick={deleteAll}>
            Delete All
          </button>
        </div>
      )}
    </div>
  );
};

export default Recents;
