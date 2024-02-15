import { Typography } from 'antd'
import { Link } from 'react-router-dom'
import Auth from "../utils/auth"
export default function Header() {
  const { Title } = Typography; 

    function showNavigation() {
      if (Auth.loggedIn()) {
        return (
          <ul>
            <li>
              <Link to="/">
                My Appointments
              </Link>
            </li>
            <li>
              {/* this is not using the Link component to logout or user and then refresh the application to the start */}
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
    <header style={{ backgroundColor: "#c0c0c0", height: "20vh", top: "0", left: "0", width: "100vw",  }}>
      <a href="/" >
      <Title style={{ margin: "150px 10px 10px 200px"}} >designerdays.</Title>
      </a>
    
  
        <nav>
          {showNavigation()}
        </nav>
      </header>
    );
  }
  
  