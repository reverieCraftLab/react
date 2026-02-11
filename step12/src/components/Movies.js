import { Link } from "react-router-dom";

function Movies ({id, coverImg, title, summary, genres }) {
    return (
        <div className="movie-card">
            <img src={coverImg} alt={title} />
            <div className="movie-card-body">
                <Link to={`/movie/${id}`}>
                    <div className="movie-card-title">{title}</div>
                </Link>
                <p className="movie-card-summary">{summary}</p>
                <ul className="genre-list">
                    {genres.map((g) => (
                        <li className="genre-tag" key={g}>{g}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Movies;