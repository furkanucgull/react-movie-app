import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search.jsx";
import Loading from "./components/Loading.jsx";
import MovieCard from "./components/MovieCard.jsx";
const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async (query = "") => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endPoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endPoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await response.json();
      if (data.Response === "False") {
        setErrorMessage(data.Error);
        setMovieList([]);
        return;
      }
      setMovieList(data.results || []);
    } catch (error) {
      console.log("error fetching movie", error);
      setErrorMessage("Error fetching movies. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchMovies(searchTerm);
  }, [searchTerm]);
  return (
    <div>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <h1>
            <img src="../public/hero.png" alt="Hero Banner" />
            Find <span className="text-gradient"> Movies</span> You will enjoy
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        <section className="all-movies">
          <h2 className="mt-10">All Movies</h2>
          {isLoading ? (
            <Loading />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
};

export default App;
