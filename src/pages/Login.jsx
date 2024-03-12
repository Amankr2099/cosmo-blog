import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../components/Context/UserContext";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  const { setUser } = useContext(UserContext);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
        const res = await axios.post(import.meta.env.VITE_BASE_URL+"/user/login", {
            username: username,
            email: email,
            password: password,
        });
        if (res.data) {
            const { _id: userId } = res.data;
            setUser(userId);
            window.location.replace("/");
        }
    } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
            alert(error.response.data.error);
        } else {
            alert("An error occurred while processing your request");
        }
    }
};


  return (
    <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
      <div className="row gx-lg-5 align-items-center mb-5">
        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
          <div className="card bg-glass">
            <div className="card-body px-4 py-5 px-md-5">
              <form>
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
                <p className="text-center my-2 text-muted">
                  Or login with email
                </p>

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
                  className="btn btn-primary d-block mx-auto mb-4"
                  onClick={handleLogin}
                >
                  Login
                </button>

                <div className="text-center">
                  <p>Don't have an account ? </p>
                  <Link to="/signup">Sign Up</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
          <h1
            className="my-5 display-5 fs-1 fw-bold"
            style={{ color: "hsl(218, 81%, 95%)" }}
          >
            Welcome back !
            <br />
            <span style={{ color: "hsl(218, 51%, 80%)" }}>
              Start writing your knowledge
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};
