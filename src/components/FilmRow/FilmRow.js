import React, { useState, useEffect } from "react";
import { instance } from "../../axios";
import "./filmrow.scss";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const FilmRow = ({ title, url, large }) => {
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState("");

  const baseURL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function getData() {
      const request = await instance.get(url);
      setMovies(request.data.results);
    }
    getData();
  }, [url]);

  console.log(title, movies);

  const options = {
    height: "390",
    width: "60%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {

    console.log("la pelicula es " + movie);

    if (trailer) {
      setTrailer("")
    } else{
      movieTrailer(movie?.name || movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search); 
          setTrailer(urlParams.get('v'))
        }) .catch(() => alert("The trailer is not available"))
    }
  }

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            src={`${baseURL}${large ? movie.poster_path : movie.backdrop_path}`}
            className={`row__poster ${large && "row__large"}`}
            alt={movie.name ? movie.name : movie.title}
          />
        ))}
      </div>
      { trailer ? <YouTube className="row__trailer" videoId={trailer} opts={options}/> : ""}
    </div>
  );
};

export default FilmRow;
