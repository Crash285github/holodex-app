import { Link } from "react-router-dom";

const Navbar = () => {

  return ( 
    <div className="navbar">
      <div className="navbar-title">
        <div>
          Crash285's Hololive App to practice React and Typescript and this is too long for a title...
        </div>
      </div>
      <nav className="navbar-body">
        <div className="searchbar">
          <input type="text" placeholder="Search..."/>
          <button>Search talents</button>
        </div>
        <div className="links">
          <Link to='/'>Homepage</Link>
        </div>
      </nav>
    </div>
   );
}
 
export default Navbar;