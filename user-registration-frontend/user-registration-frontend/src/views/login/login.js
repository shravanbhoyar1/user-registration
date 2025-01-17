
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserService from "../../service/UserService";
import './login.css'

const Login = ({ setUser }) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    UserService.getUserByUsername(credentials.username)
      .then((res) => {
        if (res != null) {
          if (res.data.password === credentials.password) {
            setError("");
            setUser(res.data);
            navigate("/dashboard");
          } else {
            toast.error("Invalid password!", { position: "top-center" });
          }
        }
      })
      .catch(() => {
        toast.error("Invalid Username!", { position: "top-center" });
      });
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="parent-container">
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="userId" className="form-label">Username</label>
            <input
              type="text"
              id="userId"
              name="username"
              className="form-input"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="pass" className="form-label">Password</label>
            <input
              type="password"
              id="pass"
              name="password"
              className="form-input"
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Sign In
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
