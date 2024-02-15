import { Typography, Col } from 'antd'
import { Link } from 'react-router-dom'
import Auth from "../utils/auth"
export default function Header() {
  const { Title } = Typography; 

  //Nav bar that stores user data and changes menu options upon succesful login
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Col span={8} style={{ width: 'fit-content', margin: 'auto', fontSize: "20px" }}>
          <ul>
            <li>
              <Link to="/">
                My Appointments
              </Link>
            </li>
            <li>
              
              <a href="/" onClick={() => Auth.logout()}>
                Logout
              </a>
            </li>
          </ul>
        </Col>
      );
    } else {
      return (
        <Col span={8} style={{ width: 'fit-content', margin: 'auto', display:"flex", fontSize: "20px" }}>
          
            <div>
              <Link to="/register">
                Register
              </Link>
            </div>
            <div>
              <Link to="/login">
                Login
              </Link>
            </div>
          
        </Col>
      );
    }
  }
  

  return (
    <header style={{backgroundColor: "silver"}}>
      <a href="/" >
      <Title style={{ margin: "auto", width:"100vh"}} >designerdays.</Title>
      </a>
    
  
        <nav>
          {showNavigation()}
        </nav>
      </header>
    );
  }
  
  