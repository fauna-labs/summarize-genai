import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/Login.css'

export default function Signup() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    username: '',
    password: '',
    passwordRe: ''
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="card">
      <form className="login-container">
        <label>👥 Username: </label>
        <input name="username" onChange={handleChange} value={state.username}/>
        <label>🔑 Password: </label>
        <input type="password" name="password" onChange={handleChange} value={state.password}/>
        <label>🔑 Re-enter Password: </label>
        <input type="password" name="passwordRe" onChange={handleChange} value={state.passwordRe}/>
        <button className="link-btn">Signup</button>

        <p>Already have an Account?</p>
        <button
          onClick={
            e => {
              e.preventDefault();
              navigate('/login');
            }
          }>
          Login
        </button>
      </form>
    </div>
  )
}