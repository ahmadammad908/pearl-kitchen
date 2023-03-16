import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  //   const navigate = useNavigate();
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // console.log(inputs);

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      signInWithEmailAndPassword(auth, inputs.email, inputs.password).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user;
          //   navigate("/received");
          // ...
        }
      );
    } catch (error) {}
  };
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "90px" }}
      >
        <div class="form-box">
          <form class="form">
            <span class="title">Login</span>
            <span class="subtitle">Create a free account with your email.</span>
            <div>
              <input
                type={"email"}
                name={"email"}
                id="email"
                placeholder="Email"
                className="input"
                onChange={handleChange}
                required
              />
              <input
                type={"password"}
                name={"password"}
                id="password"
                placeholder="password"
                onChange={handleChange}
                className="input"
                required
              />

              {/* <input type="text" class="input" placeholder="Full Name" />
            <input type="email" class="input" placeholder="Email" />
            <input type="password" class="input" placeholder="Password" /> */}
            </div>
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </form>
          <div class="form-section">
            <p>
              Dont have an account?
              <Link to={"/checkout"}> {""}Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
