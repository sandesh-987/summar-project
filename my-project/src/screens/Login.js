// LoginForm.js

import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Perform validation
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform overall form validation
    if (validateForm()) {
      // Submit the form (you can handle authentication logic here)
      console.log('Form submitted:', formData);
    } else {
      console.log('Form validation failed');
    }
  };

  const validateField = (fieldName, value) => {
    let errorMessage = '';

    switch (fieldName) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        errorMessage = value.trim() === '' ? 'Email is required' : !emailRegex.test(value) ? 'Invalid email' : '';
        break;
      case 'password':
        errorMessage = value.trim() === '' ? 'Password is required' : '';
        break;
      default:
        break;
    }

    setErrors({
      ...errors,
      [fieldName]: errorMessage,
    });
  };

  const validateForm = () => {
    let valid = true;

    Object.values(errors).forEach((error) => {
      if (error.length > 0) {
        valid = false;
      }
    });

    return valid;
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <div style={formGroupStyle}>
        <label htmlFor="email" style={labelStyle}>Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={() => validateField('email', formData.email)}
          style={inputStyle}
        />
        {errors.email && <span style={errorStyle}>{errors.email}</span>}
      </div>

      <div style={formGroupStyle}>
        <label htmlFor="password" style={labelStyle}>Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={() => validateField('password', formData.password)}
          style={inputStyle}
        />
        {errors.password && <span style={errorStyle}>{errors.password}</span>}
      </div>

      <button type="submit" style={buttonStyle}>Login</button>
    </form>
  );
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '300px',
  margin: '100px auto 0', // Margin 10px from the top, auto for horizontal centering
  padding: '20px',
  background: '#f5b3b3', // Background color
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle lift
};

const formGroupStyle = {
  marginBottom: '20px',
};

const labelStyle = {
  display: 'block',
  marginBottom: '5px',
  color: '#615353', // Label color
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #615353', // Input border color
  borderRadius: '4px',
};

const errorStyle = {
  color: '#615353', // Error text color
  fontSize: '10px',
};

const buttonStyle = {
  background: '#007BFF',
  color: '#fff',
  padding: '12px 20px',
  fontSize: '16px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default LoginForm;
