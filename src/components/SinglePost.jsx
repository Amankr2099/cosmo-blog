import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";
import UserContext from "./Context/UserContext";
import { Buffering } from "./Buffering";

export const SinglePost = () => {
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const [buffering, setBuffering] = useState(true);
  const [post, setPost] = useState(null); // Start with null to represent no data
  const { user } = useContext(UserContext);

  const getPost = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/blogs/${postId}`
      );
      if (res.data) {
        setPost(res.data);
      } else {
        setPost(null); // Set post to null if no data is returned
      }
    } catch (error) {
      alert(error.message);
      setPost(null); // Set post to null if there's an error fetching
    } finally {
      setBuffering(false);
    }
  };

  useEffect(() => {
    getPost();
  }, [postId]);

  return (
    <>
      {buffering ? (
        <Buffering />
      ) : post === null ? ( // Check if post is null, meaning it was not found
        <div
          className="container m-5 mx-auto rounded-2"
          style={{ backgroundColor: "rgba(140, 137, 137, 0.5)" }}
        >
          <div className="header text-center p-4 text-white">
            <h1>Not found...</h1>
          </div>
        </div>
      ) : (
        <div
          className="container m-5 mx-auto rounded-2"
          style={{ backgroundColor: "rgba(140, 137, 137, 0.5)" }}
        >
          <div className="header text-center p-4 text-white">
            <h1>{post.title}</h1>
            <p>{post.caption}</p>
          </div>
          <img
            src={post.blogImage}
            className="img-fluid rounded-4 w-100"
            alt="Fissure in Sandstone"
          />

          <div className="container w-lg-75 w-100 my-4 p-2 p-lg-5 ms-auto bg-white rounded-2">
            {parse(String(post.content))}
          </div>
          <div className="fs-5 px-3 pb-2 text-white">
            <p>
              {" "}
              <i className="fa-solid fa-pen px-2" /> Author : {post.authorName}
            </p>
            {post.author == user && (
              <Link
                to={`/edit-post/${postId}`}
                className="text-decoration-none"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <button
                  type="button"
                  className="btn btn-danger btn-rounded btn-md mt-3 d-block mx-auto"
                >
                  Edit
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};
