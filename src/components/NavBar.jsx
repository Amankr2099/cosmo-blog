import { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../components/Context/UserContext";

export const NavBar = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <div
        className="bg-dark text-white text-center rounded-3 py-4 mx-3 mt-3 border border-2"
        style={{ fontSize: "8vw" }}
      >
        CosmoBlog
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3 mx-3 mt-3 border border-2 p-0 p-lg-2">
        {/* <a className="navbar-brand" href="#">My Website</a> */}
        <button
          className="navbar-toggler p-0 mx-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            style={{ fontSize: "8px" }}
          ></span>
        </button>
        <div className="collapse navbar-collapse text-center" id="navbarNav">
          <ul className="w-100 navbar-nav ms-auto d-flex justify-content-around ">
            <li className="nav-item ">
              <NavLink
                to={""}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-info" : "text-light"
                  } text-decoration-none`
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-info" : "text-light"
                  } text-decoration-none`
                }
              >
                About us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to={"/posts"}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-info" : "text-light"
                  } text-decoration-none`
                }
              >
                Popular
              </NavLink>
            </li>

            {user ? (
              <li className="nav-item">
                <NavLink
                  to={"/profile"}
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-info" : "text-light"
                    } text-decoration-none`
                  }
                >
                  Profile
                </NavLink>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    to={"/signup"}
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-info" : "text-light"
                      } text-decoration-none`
                    }
                  >
                    SignUp
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to={"/login"}
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-info" : "text-light"
                      } text-decoration-none`
                    }
                  >
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};
