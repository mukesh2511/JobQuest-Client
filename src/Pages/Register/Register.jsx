import React, { useState } from "react";
import "./Register.scss";
import { useNavigate } from "react-router-dom";
import upload from "../../utils/Upload.js";
import NewRequest from "../../utils/NewRequest.js";

const Register = () => {
  const [error, setError] = useState("");
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    phone: "",
    isSeller: false,
    desc: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = await upload(file);

    try {
      const res = await NewRequest.post("/auth/register", {
        ...user,
        img: url,
      });
      // console.log(res);
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/");
    } catch (error) {
      setError(error.response.data);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="register">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="left">
            <h1>Create a new account</h1>
            <label htmlFor="">Username</label>
            <input
              autoComplete="off"
              name="username"
              onChange={handleChange}
              type="text"
              placeholder="john doe"
            />
            <label htmlFor="">Email</label>
            <input
              autoComplete="off"
              name="email"
              onChange={handleChange}
              type="text"
              placeholder="email"
            />
            <label htmlFor="">Password</label>
            <input
              autoComplete="off"
              name="password"
              onChange={handleChange}
              type="text"
              placeholder="random223"
            />
            <label htmlFor="">Profile Picture</label>
            <input
              name="img"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="">Country</label>
            <input
              autoComplete="off"
              name="country"
              onChange={handleChange}
              type="text"
              placeholder="India"
            />
            <button>Register</button>
          </div>
          <div className="right">
            <h1>I want to become a seller</h1>
            <div>
              <label htmlFor="">Activate the seller account</label>
              <input type="checkbox" onChange={handleSeller} />
            </div>
            <label htmlFor="">Phone Number</label>
            <input
              autoComplete="off"
              name="phone"
              onChange={handleChange}
              type="Number"
              placeholder="+91 345 756 8962"
            />
            <label htmlFor="">Description</label>
            <textarea
              name="desc"
              id=""
              cols="30"
              rows="10"
              placeholder="A short description of yourself"
            ></textarea>
          </div>
        </form>
        {error && <h2>{error}</h2>}
      </div>
    </div>
  );
};

export default Register;
