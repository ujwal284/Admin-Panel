import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { SOCIAL_LINKS } from "./constant/constant";

// Yup Schema for form validation
const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special symbol"
    ),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();

  async function onSubmit(data) {
    console.log("Logging in...");
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating an async process like API call
    console.log("Form Data: ", data);
    navigate("/Home");
  }

  return (
    <div className="login-container">
      <style>
        {`
          * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
          }

          body {
              font-family: 'Arial', sans-serif;
              background-color: #f0f0f0;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
          }

          .login-container {
              background-color: #fff;
              padding: 30px;
              border-radius: 8px;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }

          .login-form {
              width: 300px;
          }

          .login-form h2 {
              text-align: center;
              margin-bottom: 20px;
              color: #000;
              
              
          }

          .input-group {
              margin-bottom: 15px;
          }

          .input-group label {
              display: block;
              margin-bottom: 5px;
              font-size: 14px;
              color: #666;
          }

          .input-group input {
              width: 100%;
              padding: 10px;
              font-size: 14px;
              border: 1px solid #ccc;
              border-radius: 5px;
              transition: border-color 0.2s;
          }

          .input-group input:focus {
              border-color: #007bff;
              outline: none;
          }

          .login-btn {
              width: 100%;
              padding: 10px;
              background-color: #007bff;
              color: #fff;
              font-size: 16px;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              transition: background-color 0.3s;
          }

          .login-btn:hover {
              background-color: #0056b3;
          }

          .error {
              color: red;
              font-size: 12px;
              margin-top: 5px;
          }

          .forgot-password {
              text-align: center;
              margin-top: 10px;
          }

          .forgot-password a {
              font-size: 14px;
              color: #007bff;
              text-decoration: none;
              transition: color 0.3s;
          }

          .forgot-password a:hover {
              color: #0056b3;
              text-decoration: underline;
          }

          .social-icons {
              display: flex;
              justify-content: center;
              margin-top: 20px;
          }

          .icon {
              margin: 0 10px;
              font-size: 24px;
              cursor: pointer;
              transition: transform 0.2s;
          }

          .icon.google {
              color: #db4437; /* Google Red */
          }

          .icon.facebook {
              color: #4267B2; /* Facebook Blue */
          }

          .icon.instagram {
              color: #C13584; /* Instagram Gradient */
          }

          .icon.twitter {
              color: #1DA1F2; /* Twitter Blue */
          }

          .icon.discord {
              color: #7289da; /* Discord Purple */
          }

          .icon:hover {
              transform: scale(1.1);
          }
        `}
      </style>

      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>

        {/* Email Field */}
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register("password")} />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
        </div>

        {/* Submit Button  */}
        <button
          type="submit"
          className="login-btn"
          disabled={isSubmitting} // Disable button while submitting
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>

        {/* Social Media Icons */}
        <div className="social-icons">
          <FcGoogle
            className="icon google"
            onClick={() => window.open(SOCIAL_LINKS.google, "_blank")}
          />
          <FaFacebook
            className="icon facebook"
            onClick={() => window.open(SOCIAL_LINKS.facebook, "_blank")}
          />
          <FaInstagram
            className="icon instagram"
            onClick={() => window.open(SOCIAL_LINKS.instagram, "_blank")}
          />
          <FaXTwitter
            className="icon twitter"
            onClick={() => window.open(SOCIAL_LINKS.twitter, "_blank")}
          />
          <FaDiscord
            className="icon discord"
            onClick={() => window.open(SOCIAL_LINKS.discord, "_blank")}
          />
        </div>

        {/* Forgot Password Link */}
        <div className="forgot-password">
          <Link to="/">Forgot Password?</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
