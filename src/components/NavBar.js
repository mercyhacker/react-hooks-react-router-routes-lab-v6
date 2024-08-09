import { NavLink } from 'react-router-dom';
import './NavBar.css'; // Make sure this file exists and includes necessary styles

const NavBar = () => (
  <div className="navbar"> {/* Add this class */}
    <NavLink to="/">Home</NavLink>
    <NavLink to="/directors">Directors</NavLink>
    <NavLink to="/actors">Actors</NavLink>
  </div>
);

export default NavBar;
