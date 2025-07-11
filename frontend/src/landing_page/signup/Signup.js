// // import React from "react";

// // function Signup() {
// //   return (
// //     <h1>Signup</h1>
// //   )
// // }

// // export default Signup;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Signup() {
//   const [form, setForm] = useState({ username: '', email: '', phone: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const res = await axios.post("http://localhost:3002/api/auth/signup", form);
//     alert(res?.data?.msg || "Signup successful!");
//     navigate('/login');
//   } catch (err) {
//     console.error("Signup error (network/log):", err);
//     const errorMsg = err?.response?.data?.msg || err?.message || "Signup failed!";
//     alert(errorMsg); // ✅ Never shows undefined now
//   }
// };


//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="username" onChange={handleChange} placeholder="Username" required />
//       <input name="email" type="email" onChange={handleChange} placeholder="Email" required />
//       <input name="phone" onChange={handleChange} placeholder="Phone" required />
//       <input name="password" type="password" onChange={handleChange} placeholder="Password" required />
//       <button type="submit">Signup</button>
//     </form>
//   );
// }

// export default Signup;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import { Link } from 'react-router-dom';



function Signup() {
  
  const [form, setForm] = useState({
    username: '',
    email: '',
    phone: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/api/auth/signup", form);
      alert(res?.data?.msg || "Signup successful!");
      navigate('/login');
    } catch (err) {
      console.error("Signup error:", err);
      const errorMsg = err?.response?.data?.msg || err?.message || "Signup failed!";
      alert(errorMsg);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <img
          src="https://zerodha.com/static/images/logo.svg"
          alt="Zerodha Logo"
          className="logo"
        />
        <h2>Create your Zerodha account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Full Name"
            value={form.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Mobile number"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign up</button>
        </form>
        <p>
  Already have an account? <Link to="/login">Log in</Link>
</p>
      </div>
    </div>
  );
}

export default Signup;



