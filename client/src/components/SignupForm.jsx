import React, { useState } from "react";
import Image from "../assets/Mobile login.gif";

function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isSignIn, setIsSignIn] = useState(false);

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
  };

  return (
    <div className="w-full h-screen max-w-[1200px] mx-auto flex items-center justify-center">
      <div className="grid grid-cols-2 place-items-center">
        <div>
          <img src={Image} alt="Image" />
        </div>
        <form className="form">
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
      </div>
    </div>
  );
}

export default SignupForm;
