import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const VerifyEmail = () => {
  let [query] = useSearchParams();
  //   let token = query.get("token");

  let navigate = useNavigate();

  let emailVerify = async () => {
    try {
      let results = await axios({
        url: "https://localhost:8000/registers/verify-emails",
        method: "Patch",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: data,
      });
    } catch (error) {}
  };
  useEffect(() => {
    emailVerify();
  }, []);
  return <div></div>;
};

export default VerifyEmail;
