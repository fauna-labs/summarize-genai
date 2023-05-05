import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/Login.css'

export default function Login() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(state);
  }

  return (
    <div className="card">
      <form className="login-container">
        <label>👥 Username: </label>
        <input name="username" onChange={handleChange} value={state.username}/>
        <label>🔑 Password: </label>
        <input type="password" name="password" onChange={handleChange} value={state.password}/>
        <button onClick={handleLogin}>Login</button>

        <p>Need an Account ?</p>
        <button
          className="link-btn" 
          onClick={
            e => {
              e.preventDefault();
              navigate('/signup');
            }
          }>
          Sign Up
        </button>
      </form>
    </div>
  )
}