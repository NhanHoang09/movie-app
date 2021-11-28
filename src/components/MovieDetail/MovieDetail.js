import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectDetail,
  fetchAsyncDetail,
  removeSelectMovie,
} from "./../../features/movies/movieSlice";
import "./MovieDetail.scss";

function MovieDetail() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const dataDetail = useSelector(getSelectDetail);
  console.log("Movie Detail: ", dataDetail);

  useEffect(() => {
    dispatch(fetchAsyncDetail(imdbID));

    return dispatch(removeSelectMovie());
  }, [dispatch, imdbID]);

  const {
    Title,
    imdbRating,
    imdbVotes,
    Runtime,
    Year,
    plot,
    Director,
    Actors,
    Genre,
    Language,
    Awards,
    Poster,
  } = dataDetail;
  return (
    <div className="movie-section">
      {Object.keys(dataDetail).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i> : {imdbRating}{" "}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> : {imdbVotes}{" "}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i> : {Runtime}{" "}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i> : {Year}{" "}
              </span>
            </div>
            <div className="movie-plot">{plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={Poster} alt={Title} />
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetail;
