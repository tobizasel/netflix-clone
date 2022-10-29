import React from "react";
import FilmRow from "../FilmRow/FilmRow";
import { requests } from "../../requests";
import './rows.scss'

const Rows = () => {
  return (
    <div className="rows">
      <FilmRow title="Netflix Originals" url={requests.netflixOriginals} large={true}/>
      <FilmRow title="Trending Now" url={requests.trending} />
      <FilmRow title="Top Rated" url={requests.topRated} />
      <FilmRow title="Comedy" url={requests.comedy} />
      <FilmRow title="Action" url={requests.action} />
      <FilmRow title="Horror" url={requests.horror} />
      <FilmRow title="Romance" url={requests.romance} />
      <FilmRow title="Documentaries" url={requests.documentaries} />

    </div>
  );
};

export default Rows;
