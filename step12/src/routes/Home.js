import {useEffect, useState} from "react";
import Movies from "../components/Movies";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

function Home () {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [genreMap, setGenreMap] = useState({});

    const getMovies = async () => {
        const [genreRes, movieRes] = await Promise.all([
            fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=ko-KR`),
            fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`),
        ]);

        const genreJson = await genreRes.json();
        const movieJson = await movieRes.json();

        const map = {};
        genreJson.genres.forEach((g) => {
            map[g.id] = g.name;
        });

        setGenreMap(map);
        setMovies(movieJson.results);
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {movies.map((movie) => (
                        <Movies
                            key={movie.id}
                            id={movie.id}
                            coverImg={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            title={movie.title}
                            summary={movie.overview}
                            genres={movie.genre_ids.map((id) => genreMap[id] || "기타")}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;