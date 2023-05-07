import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Background from "../components/Background/Background";
import axios from "axios";
import "./Home.css";
import Row from "../components/Rows/Row";
import requests from "../request";
import {
  updateData1,
  updateData2,
  updateData3,
  updateRecentSearch,
  updateBackgroundArray,
} from "../Store";
import { useSelector, useDispatch } from "react-redux";
import MovieDetails from "../components/MovieDetails/MovieDetails";

const Home = () => {
  const dispatch = useDispatch();
  const array1 = useSelector((state) => state.data1);
  const array2 = useSelector((state) => state.data2);
  const array3 = useSelector((state) => state.data3);
  const backgroundArray = useSelector((state) => state.backgroundArray);
  const recentSearch = useSelector((state) => state.recentSearch);

  const [dataFetched, setDataFetched] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(requests.pageOne);
      const backgroundArray =
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ];
      dispatch(updateBackgroundArray(backgroundArray));

      const result1 = await axios.get(requests.pageOne);

      dispatch(updateData1(result1.data.results));

      const result2 = await axios.get(requests.pageTwo);
      dispatch(updateData2(result2.data.results));

      const result3 = await axios.get(requests.pageThree);
      dispatch(updateData3(result3.data.results));
      const recentSearch = await axios.get(requests.pageThree);
      const recentSearchLimited = recentSearch.data.results.slice(0, 3);
      dispatch(updateRecentSearch(recentSearchLimited));
    };
    setDataFetched(true);
    fetchData();
  }, []);

  return (
    <div className="container">
      {dataFetched && loading ? (
        <>
          <Navbar />
          <Background movies={backgroundArray} />
          <Row title={"All Popular Movies"} fetchMovies={array1} />
          <MovieDetails fetchMovies={array1} />
          <div className="page-buttons">
            <button className="btn">1</button>
            <button className="btn">2</button>
            <button className="btn">3</button>
          </div>
        </>
      ) : (
        <div className="spinner">
          <div className="loading-spinner"></div>
        </div>
      )}
    </div>
  );
};

export default Home;
