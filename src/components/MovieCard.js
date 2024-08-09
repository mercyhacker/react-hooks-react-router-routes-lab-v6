import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <div>
    <h3>{movie.title}</h3>
    <Link to={`/movie/${movie.id}`}>View Details</Link>
  </div>
);

export default MovieCard;
