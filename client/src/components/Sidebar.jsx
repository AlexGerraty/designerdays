import {Link} from "react-router-dom"
import Auth from "../utils/auth"
      function Nav() {

        function showNavigation() {
          if (Auth.loggedIn()) {
            return (
              <ul className="flex-row">
                <li className="mx-1">
                  <Link to="/mybookings">
                    My Bookings
                  </Link>
                </li>
                <li className="mx-1">
                  <a href="/" onClick={() => Auth.logout()}>
                    Logout
                  </a>
                </li>
              </ul>
            );
          } else {
            return (
              <ul>
                <li>
                  <Link to="/register">
                    Register
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            );
          }
        }
      
        return (
          <header className="flex-row px-1">
            <h1>
              <Link to="/">
              </Link>
            </h1>
      
            <nav>
              {showNavigation()}
            </nav>
          </header>
        );
      }
      
export default Nav;