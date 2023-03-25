import React, { useState } from "react";
import FormInput from "./formInput/FormInput";
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase/Firebase";
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a Valid email address",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "text",
      placeholder: "password",
      errorMessage:
        "Password should be a 8-20 characters and include at least, 1 letter , 1 number, 1 Special character",
      pattern: `(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&^*()_+]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: "confirmPassword",
      type: "text",
      placeholder: "confirm Password",
      errorMessage: "Passsword don't Match",
      required: true,
      pattern: inputValues.password,
    },
  ];

  ///////////////handlechange Function  ////////////////
  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };
  // console.log(inputValues);

  //////////////Firebase Workk
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(
        auth,
        inputValues.email,
        inputValues.password
      ).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(user.currentUser, {
          displayName: inputValues.email,
        });
        navigate("/signIn");
        // ...
      });
    } catch (error) {}
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "90px",
        padding: " 20px",
      }}
    >
      <div class="form-box">
        <form class="form">
          <span class="title">Sign up</span>
          <span class="subtitle">Create a free account with your email.</span>
          <div>
            {inputs.map((input) => (
              <div class="form-container">
                <FormInput
                  key={input.id}
                  {...input}
                  value={inputValues[input.name]}
                  onChange={handleChange}
                />
              </div>
            ))}

            {/* <input type="text" class="input" placeholder="Full Name" />
            <input type="email" class="input" placeholder="Email" />
            <input type="password" class="input" placeholder="Password" /> */}
          </div>
          <button type="submit" onClick={handleRegister}>
            Sign up
          </button>
        </form>
        <div class="form-section">
          <p>
            Have an account?
            <Link to={"/signIn"}> {""}Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
