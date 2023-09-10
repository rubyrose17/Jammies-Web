import React, { useState } from "react";
import Image from "../assets/Mobile login.gif";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Forms = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isSignIn, setIsSignIn] = useState(false);
  const [message, setMessage] = useState("");
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] =
    useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleToggleForm = () => {
    setIsSignIn(!isSignIn);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setMessage("");
  };

  const closeModal = () => {
    setShowModal(false);
    setIsSignIn(true); // Switch to the sign-in form
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignIn) {
      axios
        .post("http://localhost:3000/api/signin", formData)
        .then((response) => {
          setMessage("Sign-in successful");
          navigate("/home");
        })
        .catch((error) => {
          setMessage("Sign-in failed");
          console.error(error);
        });
    } else {
      axios
        .post("http://localhost:3000/api/register", formData)
        .then((response) => {
          setMessage("Registration successful");
          setIsRegistrationSuccessful(true); // Set registration success to true
          setShowModal(true); // Show the modal
        })
        .catch((error) => {
          setMessage("Registration failed");
          console.error(error);
        });
    }
  };

  return (
    <div className="w-full h-screen max-w-[1200px] mx-auto flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
        <div className="hidden md:flex">
          <img src={Image} alt="Image" />
        </div>
        <form className="form " onSubmit={handleSubmit}>
          <p className="title">{isSignIn ? "Sign In" : "Register"}</p>
          <p className="message">
            {isSignIn
              ? "Sign in to access your account."
              : "Signup now and get full access to our app."}
          </p>
          {!isSignIn && (
            <div className="flex">
              <label className={formData.firstName && "active"}>
                <input
                  className="input-style"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <span>First Name</span>
              </label>

              <label className={formData.lastName && "active"}>
                <input
                  className="input-style"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                <span>Last Name</span>
              </label>
            </div>
          )}

          <label className={formData.email && "active"}>
            <input
              className="input-style"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <span>Email</span>
          </label>

          <label className={formData.password && "active"}>
            <input
              className="input-style"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span>Password</span>
          </label>
          {!isSignIn && (
            <label className={formData.confirmPassword && "active"}>
              <input
                className="input-style"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <span>Confirm Password</span>
            </label>
          )}
          <button className="submit" type="submit">
            {isSignIn ? "Sign In" : "Register"}
          </button>
          <p className="toggle-form" onClick={handleToggleForm}>
            {isSignIn ? (
              <>
                Don't have an account?{" "}
                <span className="text-blue-600 font-medium">
                  Register here.
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span className="text-blue-600 font-medium">Sign in here.</span>
              </>
            )}
          </p>
        </form>
        {!showModal && (
          <div className="modal shadow-xl p-4 rounded">
            <div className="modal-content">
              <p>{message}</p>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Forms;
