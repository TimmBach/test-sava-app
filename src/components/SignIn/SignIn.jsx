import React, { useRef, useState } from "react";
import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../contexts/AuthContext";
import LogoCloud from "../../assets/cloud-logo.png";
import LogoText from "../../assets/SAVA-logo.png";
import signin_image from "../../assets/signin/signin_image.png";
import css from "./signin.module.css";

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  // const { signin } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);
  const history = useNavigate();

  const handlePasswordShow = () => {
    setPasswordShow(!passwordShow);
  };

  const handleSubmit = async function (e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      // await signin(emailRef.current.value, passwordRef.current.value);
      history("/");
    } catch {
      setError("Failed to Sign In");
    }

    setLoading(false);
  };
  return (
    <div className={css.main_div}>
      <div className={css.signup}>
        <div className={css.left}>
          <img src={signin_image} alt="sign in" />
        </div>
        <div className={css.right}>
          <div className={css.logo}>
            <img src={LogoCloud} alt="logo-cloud" />
            <img src={LogoText} alt="logo-text" />
          </div>

          <div>
            <h3 className="">Welcome back!</h3>
            <span style={{ fontSize: "0.8rem", fontWeight: "500" }}>
              Please fill in your details
            </span>
            {error && <Alert variant="danger">{error}</Alert>}
            <form onSubmit={handleSubmit}>
              <div className={css.form_group} id="email">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  ref={emailRef}
                  required
                  // placeholder="Email"
                  // class="info-placeholder"
                ></input>
              </div>
              <div className={css.form_group} id="password">
                <label htmlFor="password">Password</label>
                <input
                  name="password"
                  id="password"
                  type={passwordShow ? "text" : "password"}
                  ref={passwordRef}
                  required
                  // placeholder="Password"
                  // class="info-placeholder"
                ></input>
                <i
                  class={`${css.eye_icon} fa-solid ${
                    passwordShow ? "fa-eye" : "fa-eye-slash"
                  }`}
                  onClick={handlePasswordShow}
                ></i>
              </div>
              <div
                style={{
                  marginRight: "-10px",
                  marginTop: "5px",
                  display: "flex",
                  justifyContent: "flex-end",
                  fontWeight: "500",
                  fontSize: "0.9rem",
                }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: "grey",
                  }}
                  className="text-secondary"
                  to="/forgot-password"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                disabled={loading}
                className={css.form_button}
                type="submit"
              >
                Sign In
              </button>
            </form>
          </div>
          <div
            style={{
              marginRight: "40px",
              fontWeight: "500",
            }}
          >
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
