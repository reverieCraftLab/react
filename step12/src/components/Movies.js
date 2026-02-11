import { Link } from "react-router-dom";

function Movies ({id, coverImg, title, summary, genres }) {
    return (
        <div>
            <img src={coverImg} alt={title} />
            <div>
                <Link to={`/movie/${id}`}>{title}</Link>
            </div>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

export default Movies;