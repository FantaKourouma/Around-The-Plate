import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../context/UserContext"; // Import UserContext   
import api from '../api/config';
import "./authpage.css";
import './AuthPage.css';

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const endpoint = isSignIn ? '/api/auth/signin' : '/api/auth/signup';
      const response = await api.post(endpoint, {
        email,
        password
      });

      if (response.data.success) {
        setUser(response.data.user);
        navigate('/');
      } else {
        setError(response.data.message || 'Authentication failed');
      }
    } catch (err) {
      console.error('Auth error:', err);
      setError(err.response?.data?.message || 'An error occurred during authentication');
      
      // In development, simulate successful login
      if (import.meta.env.MODE === 'development') {
        console.log('Development mode: Simulating successful login');
        setUser({
          id: 1,
          email: email,
          name: 'Demo User'
        });
        navigate('/');
        return;
      }
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-box">
          <div className="auth-header">
            <h2>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
            <p>Welcome to Around the Plate</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            {error && <div className="error-message">{error}</div>}
            
            <button type="submit" className="auth-button">
              {isSignIn ? 'Sign In' : 'Sign Up'}
            </button>
          </form>

          <div className="auth-switch">
            <p>
              {isSignIn ? "Don't have an account? " : "Already have an account? "}
              <button onClick={() => setIsSignIn(!isSignIn)}>
                {isSignIn ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>

          <div className="social-auth">
            <p>Or continue with</p>
            <div className="social-buttons">
              <button className="social-button">
                <i className="fab fa-google"></i>
                Google
              </button>
              <button className="social-button">
                <i className="fab fa-facebook"></i>
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;

