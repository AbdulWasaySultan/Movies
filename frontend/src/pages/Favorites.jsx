import "../css/Favorites.css";
import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../context/MovieContext";

function Favorites() {
 
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>Your Favourites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <p>No Favorite Movies Yet.</p>
    </div>
  );
}

export default Favorites;
