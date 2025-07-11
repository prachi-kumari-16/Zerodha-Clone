import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3002/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      alert("Login successful!");
      navigate('/dashboard');  // ✅ change this to wherever your dashboard is
    } catch (err) {
      console.error("Login error:", err);
      const errorMsg = err?.response?.data?.msg || "Login failed. Please try again.";
      alert(errorMsg);

      // 👇 Check for specific login errors and redirect
      if (
        errorMsg.toLowerCase().includes("invalid") ||
        errorMsg.toLowerCase().includes("user")
      ) {
        navigate('/signup');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img
          src="https://zerodha.com/static/images/logo.svg"
          alt="Zerodha Logo"
          className="logo"
        />
        <h2>Login to Zerodha</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account?{' '}
          <span
            onClick={() => navigate('/signup')}
            style={{ color: 'blue', cursor: 'pointer' }}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
