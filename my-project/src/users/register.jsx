import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const AdminRegister = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [location, setLocation] = useState("");
  let navigate = useNavigate();
  let handelSubmit = async (e) => {
    e.preventDefault();
    let data = {
      Name: name,
      email: email,
      password: password,
      location: location,
    };
    data = {
      ...data,
      role: "admin",
    };

    let results= await axios({
      url: "https://localhost:5000/registers",
      method: "POST",
      data: data,
    });
    console.log(results)

    setName("");
    setEmail("");     
    setPassword("");
    setLocation("");  
    navigate("/login");
  };

  return (
    <>
      <ToastContainer></ToastContainer>
      <div className="container">
        <form onSubmit={handelSubmit}>
          <div>
            <label htmlFor="name"> Name :</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          </div>

          <div>
            <label htmlFor="email">Email :</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password :</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="location">location :</label>
            <input
              id="location"
              type="location"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            ></input>
          </div>

          <button type="submit">submit</button>
          <Link to="/login"></Link>
        </form>
      </div>
    </>
  );
};

export default AdminRegister;
