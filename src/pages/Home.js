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
  const [dataFetched, setDataFetched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [array, setArray] = useState(array1);
  const search = useSelector((state) => state.search);

  if (localStorage.getItem("recentSearch") == null) {
    localStorage.setItem("recentSearch", []);
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  const handleClick = (arg) => {
    if (arg == 1) {
      setArray(array1);
      window.scrollTo(0, 0);
    } else if (arg == 2) {
      setArray(array2);
      window.scrollTo(0, 0);
    } else if (arg == 3) {
      setArray(array3);
      window.scrollTo(0, 0);
    }
  };
  console.log(search);

  useEffect(() => {
    const fetchData = async () => {
      const result1 = await axios.get(requests.pageOne);
      setArray(result1.data.results);

      dispatch(updateData1(result1.data.results));

      const backgroundArray =
        result1.data.results[
          Math.floor(Math.random() * result1.data.results.length)
        ];
      dispatch(updateBackgroundArray(backgroundArray));

      const result2 = await axios.get(requests.pageTwo);
      dispatch(updateData2(result2.data.results));

      const result3 = await axios.get(requests.pageThree);
      dispatch(updateData3(result3.data.results));
    };
    setDataFetched(true);
    fetchData();
  }, []);

  return (
    <div className="container">
      {dataFetched && loading ? (
        <>
          <Navbar array={array} />
          <Background movies={backgroundArray} />
          <Row title={"All Popular Movies"} fetchMovies={array} />
          <MovieDetails fetchMovies={array} />
          <div className="page-buttons">
            <button className="btn" onClick={() => handleClick(1)}>
              1
            </button>
            <button className="btn" onClick={() => handleClick(2)}>
              2
            </button>
            <button className="btn" onClick={() => handleClick(3)}>
              3
            </button>
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
