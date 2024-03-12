import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../components/Context/UserContext";
import axios from "axios";

export const Profile = () => {
  const [editOption, setEditOption] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const inputFile = useRef(null);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  const [profile, setProfile] = useState({});

  const getProfile = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL }/user/${user}`);
      if (res.data) {
        setProfile(res.data);
        // const {username,email,fullName,profilePic,password} = res.data;
        // setUsername(username)
        // setFullName(fullName)
        // setEmail(email);
        // setProfilePic(profilePic)
        // setPassword(password)
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        alert(error.response.data.error);
      } else {
        alert("Unable to get this profile");
      }
    }
  };

  useEffect(() => {
    getProfile();
  }, [user]);

  const handleLogout = () => {
    setUser(null);
  };

  const updateProfile = async (e) => {
    e.preventDefault();

    // const data = new FormData();
    // fullName ? data.append("fullName", fullName) : null;
    // username ? data.append("username", username) : null;
    // email ? data.append("email", email) : null;
    // password ? data.append("password", password) : null;

    const data = {};

    if (fullName) data.fullName = fullName;
    if (username) data.username = username;
    if (email) data.email = email;
    if (password) data.password = password; 

    // console.log(fullName,username,email,password);
    try {
      const res = await axios.put(`api/user/${user}`, data);
      if (res.data) {

        window.location.replace("/profile");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        alert(error.response.data.error);
      } else {
        alert(
          "Unable to update this profile"
        );
      }
    }
  };

  const updateImage = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("profilePic", profilePic);

    try {
      const res = await axios.put(`api/user/profilePic/${user}`, data);
      if (res) {
        window.location.replace("/profile");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        alert(error.response.data.error);
      } else {
        alert("Unable to update image");
      }
    }
  };

  const changeImage = () => {
    inputFile.current.click();
  };

  return (
    <div className="container w-100 mx-auto my-5 py-5  bg-white bg-gradient rounded">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-12 col-xl-4">
          <div className="card rounded-2 my-5">
            <div className="card-body text-center">
              <div className="mt-3 mb-4">
                <img
                  src={
                    profilePic
                      ? URL.createObjectURL(profilePic)
                      : profile.profilePic
                  }
                  className="rounded-circle object-fit-cover img-fluid"
                  style={{ width: "100px", height: "100px" }}
                  alt="Profile"
                  onClick={changeImage}
                />

                {profilePic && (
                  <button
                    type="button"
                    className="btn btn-info btn-rounded btn-md mt-1 d-block mx-auto"
                    onClick={updateImage}
                  >
                    Update Pic
                  </button>
                )}

                <input
                  type="file"
                  accept="image/*"
                  className="d-none"
                  ref={inputFile}
                  onChange={(e) => {
                    setProfilePic(e.target.files[0]);
                  }}
                />
              </div>
              <h4 className="mb-2">{fullName ? fullName : profile.fullName}</h4>
              <p className="text-muted mb-3">@Writter </p>
              <p className="mb-5 h5"> 12 Blogs written by you </p>

              <div className="d-flex justify-content-around">
                <button
                  type="button"
                  className="btn btn-info btn-rounded btn-md"
                  onClick={() => {
                    setEditOption(!editOption);
                  }}
                >
                  <i
                    className={`fa-solid fa-${
                      editOption ? "xmark" : "pen"
                    } px-2`}
                  />
                  {editOption ? "Cancel" : "Edit Profile"}
                </button>

                <Link to="/write-post"  onClick={()=>{window.scrollTo(0,0)}}>
                  <button
                    type="button"
                    className="btn btn-info btn-rounded btn-md"
                  >
                    <i className="fa-solid fa-file-pen" /> Write
                  </button>
                </Link>
              </div>

              {editOption && (
                <>
                  <div className=" text-center mt-2 mb-2 d-flex flex-column p-2">
                    <input
                      type="text"
                      value={fullName}
                      placeholder={profile.fullName}
                      className="rounded mb-2 form-control w-75 mx-auto"
                      onChange={(e) => {
                        setFullName(e.target.value);
                      }}
                    />

                    <input
                      type="text"
                      placeholder={profile.username}
                      value={username}
                      className="rounded mb-2 form-control w-75 mx-auto"
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />

                    <input
                      type="email"
                      value={email}
                      placeholder={profile.email}
                      className="rounded mb-2 form-control w-75 mx-auto"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />

                    <input
                      type="password"
                      className="rounded mb-2 form-control w-75 mx-auto"
                      placeholder="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>

                  <button
                    type="button"
                    className="btn btn-info btn-rounded btn-md d-block mx-auto"
                    onClick={updateProfile}
                  >
                    <i className={`fa-solid fa-check px-2`} />
                    {"Confirm Update"}
                  </button>

                  <button
                    type="button"
                    className="btn btn-danger btn-rounded btn-md mt-3 d-block mx-auto"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
