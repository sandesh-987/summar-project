import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();
  //   let global = useContext(GlobalVariableContext);
  let handelSubmit = async (e) => {
    e.preventDefault();
    let data = {
      email: email,
      password: password,
    };

    try {
      let result = await axios({
        url: "https://localhost:8000/registers/login",
        method: "post",
        data: data,
      });

      let token = result.data.token;
        localStorage.setItem("token", token);
      //   global.setToken(token);

      navigate("/");
    } catch (error) {
      toast(error.response.data.message);
    }
  };

  return (
    <>
      <ToastContainer></ToastContainer>
      <div className="container" align-center>
      <form onSubmit={handelSubmit}>
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

        <button style={{ cursor: "pointer" }} type="submit">
          Login
        </button>
        {/* <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/forget-password");
          }}
        >
          Forget Password
        </div> */}
      </form>
      </div>
    </>
  );
};

export default Login;
