//importing hooks
import { useEffect, useState} from "react";
//importing app
import './App.css';
// importing search icon for search bar
import SearchIcon from './search.svg'
// importing moviecard store in jsx file
import MovieCard from './MovieCard'

// Api key df9b6356
const API_URL = "https://www.omdbapi.com?apikey=df9b6356";

//application function
const App = () => {

       const [movies, setMovies] = useState([]);
       const [searchTerm, setSearchTerm] = useState('');

       //fetching and storing data from api
       const searchMovies = async (title) => {
              const response = await fetch(`${API_URL}&s=${title}`)
              const data = await response.json();
              
              setMovies(data.Search);
       }

       //default movie search on start
       useEffect(() => {
              searchMovies('spiderman');
       }, []);

       return (
       <div className="app">

              {/* title of movie */}
              <h1>Movies Club</h1>

              {/* searchbar */}
              <div className="search">
                     <input
                     placeholder="Search for movies"
                     value={searchTerm}
                     onChange={(e) => setSearchTerm(e.target.value)}
                     />
                     <img
                     src={SearchIcon}
                     alt="search"
                     onClick={() => searchMovies(searchTerm)}
                     />
              </div>

              {/* mapping the movie and message if no movie is found */}
              {movies?.length > 0 ? (
              <div className="container">
              {movies.map((movie) => (
              <MovieCard movie={movie} />
              ))}
              </div>
               ) : (
              <div className="empty">
              <h2>No movies found</h2>
              </div>
              )}
                                        
       </div>
       );};

export default App;