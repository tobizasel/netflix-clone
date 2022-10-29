import React, { useState, useEffect } from "react";
import { instance } from "../../axios";
import { requests } from "../../requests";
import "./banner.scss";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  const reduceDescription = (str, n) => {
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
  }

  useEffect(() => {
    async function getData() {
      const request = await instance.get(requests.netflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    getData();
  }, [requests.netflixOriginals]);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">{movie.name ? movie.name : movie.title}</h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My list</button>
        </div>

        <h2 className="banner__description">{reduceDescription(movie.overview, 150)}</h2>
      </div>

      <div className="banner--fadeBottom"/>
    </header>
  );
};

export default Banner;
