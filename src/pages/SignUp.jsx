import React, { useContext, useState } from "react";
import UserContext from "../components/Context/UserContext";
import { Link } from "react-router-dom";
import axios from "axios";

export const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  const { setUser } = useContext(UserContext);

  const handleSignup = async (e) => {
    e.preventDefault();

    const data = new FormData();
    profilePic ? data.append("profilePic", profilePic) : null;
    data.append("fullName", fullName);
    data.append("username", username);
    data.append("email", email);
    data.append("password", password);

    try {
        const res = await axios.post(import.meta.env.VITE_BASE_URL +"/user/register",data);
        if (res.data) {
            const {_id: userId } = res.data;
            setUser(userId);
            window.location.replace("/profile");
        }
    } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
            alert(error.response.data.error);
        } else {
            alert("An error occurred while registering. Please try again later.");
        }
    }
};


  return (
    <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
      <div className="row gx-lg-5 align-items-center mb-5">
        <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
          <h1
            className="my-5 display-5 fs-1 fw-bold"
            style={{ color: "hsl(218, 81%, 95%)" }}
          >
            Sign Up
            <br />
            <span style={{ color: "hsl(218, 81%, 75%)" }}>
              Get updated on latest cosmic updates
            </span>
          </h1>
        </div>

        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
          <div className="card bg-glass">
            <div className="card-body px-4 py-5 px-md-5">
              <form>
                <div className="mb-4 text-center">
                  <img
                    src={
                      profilePic
                        ? URL.createObjectURL(profilePic)
                        : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    }
                    className="rounded-circle img-fluid"
                    style={{ width: "100px" }}
                    alt="Profile"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    className="mx-auto d-block mt-2"
                    onChange={(e) => {
                      setProfilePic(e.target.files[0]);
                      // console.log(e.target.files[0]);
                    }}
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example1"
                        className="form-control"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example2"
                        className="form-control"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary d-block mb-4 mx-auto"
                  onClick={handleSignup}
                >
                  Sign up
                </button>

                <div className="text-center">
                  <p>Already have an account ? </p>
                  <Link to="/login">Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
