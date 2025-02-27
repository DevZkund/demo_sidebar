// Login.js (remains the same as previous version)
import React, { useState } from 'react';
import './styles.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setError('Please fill in all fields');
      return;
    }
    console.log('Login attempt with:', formData);
    setFormData({ username: '', password: '' });
    setError('');
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2 className="login-title">Welcome Back</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="username" className="input-label">
              Username/Email
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username or email"
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="input-field"
            />
          </div>
          <button
            type="submit"
            className="login-button"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="button-text">Login</span>
            <span className={`button-arrow ${isHovered ? 'arrow-animate' : ''}`}>
              →
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;