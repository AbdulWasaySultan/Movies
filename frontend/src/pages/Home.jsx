import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("error occured,cant load movies");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

   async function searchPressed(e) {
    e.preventDefault();
    if (!searchQuery.trim()) return
    
    setLoading(true);
   try {
    const searchResults = await searchMovies(searchQuery)
setMovies(searchResults);
setError(null)
    
   } catch (err) {
    setError("Failed to search movie")
    console.log(err)
   }
finally{
  setLoading(false);
}
  }

  return (
    <div className="home">
      <form onSubmit={searchPressed} className="search-form">
        <input
          className="search-input"
          type="text"
          placeholder="Search For Movies"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-Button">
          Search
        </button>
      </form>

{error && <div className="error-message"> {error}</div>}


       {loading ? (
      <div>Loading...</div>
    ) : (
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    )}
    </div>
  );
}

export default Home;
