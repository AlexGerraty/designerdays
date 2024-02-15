import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

    function Login() {
        const [formState, setFormState] = useState({ email: '', password: '' });
        const [login, { error }] = useMutation(LOGIN);
      
        const handleFormSubmit = async (event) => {
          event.preventDefault();
          try {
            const mutationResponse = await login({
              variables: { email: formState.email, password: formState.password },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
          } catch (e) {
            console.log(e);
          }
        };
      
        const handleChange = (event) => {
          const { email, value } = event.target;
          setFormState({
            ...formState,
            [email]: value,
          });
        };

    return (
        <div style={{position: "fixed",
        top: "25%",
        left: "40%",
        width: "400px",
        padding: "30px",
        textAlign: "center"}}>
            <h1> Login</h1>
            <form onSubmit={handleFormSubmit}>
                <input type= "email" placeholder="email@here.com" onChange={handleChange}/>
                <input type= "password" placeholder="******"  onChange={handleChange}/>
                <button>Login</button>
                {error ? (
                <div>
                     <p>The provided credentials are incorrect</p>
                </div>
                ) : null}
                <h3> Are you new here? <Link to={'/register'}>Join us</Link></h3>
                </form>
        </div>
        
    )
}
export default Login;