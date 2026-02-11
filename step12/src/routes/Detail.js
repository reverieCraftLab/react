import {useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

function Detail() {
    const {id} = useParams();
    const history = useHistory();
    const [movieInfo, setMovieInfo] = useState({});
    const getMovie = async () => {
        const json = await (
            await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ko-KR`)
        ).json();
        setMovieInfo(json);
    }
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div className="detail-page">
            <button className="back-btn" onClick={() => history.goBack()}>
                ← Back
            </button>
            <div className="detail-container">
                <div className="detail-poster">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
                        alt={movieInfo.title}
                    />
                </div>
                <div className="detail-info">
                    <div className="detail-header">
                        <h2 className="detail-title">{movieInfo.title}</h2>
                        <span className="detail-date">{movieInfo.release_date}</span>
                        <span className="detail-rating"> ⭐ {movieInfo.vote_average?.toFixed(1)} </span>
                    </div>
                    <p className="detail-overview">{movieInfo.overview}</p>
                </div>
            </div>
        </div>
    );
}

export default Detail;