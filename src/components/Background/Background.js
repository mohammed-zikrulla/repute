import "./Background.css";
import Recents from "../Recents/Recents";
import { useSelector } from "react-redux";

const Background = () => {
  const movies = useSelector((state) => state.backgroundArray);
  const recentSearch = useSelector((state) => state.recentSearch);

  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${
            movies?.backdrop_path ?? ""
          })`,
          backgroundSize: "cover",
          backgroundPosition: "50% 10%",
          boxShadow: "0 0 70px rgba(255, 255, 255, 0.8)",
        }}
      >
        <div className="banner__contents">
          <Recents fetchMovies={recentSearch} />
        </div>
      </header>
    </div>
  );
};

export default Background;
