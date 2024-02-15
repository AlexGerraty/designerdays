import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';


function Register() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        fullName: formState.fullName,
    
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

    return (
        <div style={{position: "fixed",
        top: "25%",
        left: "40%",
        width: "400px",
        padding: "30px",
        textAlign: "center"}}>
            <h1> Register</h1>
            <form onSubmit={handleFormSubmit}>
                <input type="name" placeholder="Your Name"  onChange={handleChange}/>
                <input type= "email" placeholder="email@here.com"  onChange={handleChange}/>
                <input type= "password" placeholder="******"  onChange={handleChange}/>
                <button>Register</button>
                <h3> Already have an account? <Link to={'/login'}>Login Here</Link></h3>
                </form>
        </div>
        
    )
}

export default Register;