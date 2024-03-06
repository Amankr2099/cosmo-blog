import Carousel from "../components/Carousel";
import { Card } from "../components/Card";
import { Link } from "react-router-dom";
import { Prologue } from "../components/Prologue";
import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const { data } = await axios.get("api/blogs/allblogs");
      if (data) {
        setBlogs(data);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        alert(error.response.data.error);
      } else {
        alert(
          "Unable to get blogs"
        );
      }
    }
  }; 

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <Carousel blogs={blogs.slice(0,3)}/>
      <Prologue />
      <div
        className="container m-5 mx-auto rounded-2"
        style={{ backgroundColor: "rgba(140, 137, 137, 0.5)" }}
      >
        {blogs.map((item, index) => {
          return (
            <div className="clearfix " key={index}>
              <div className={`float-${index % 2 == 0 ? "start" : "end"}`}>
                <Card card={item} />
              </div>
            </div>
          );
        })}
        <div className="text-center p-3">
          <Link
            to={"/posts"}
            className={
              "link-info link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover fs-3"
            }
          >
            All Posts
          </Link>
        </div>
      </div>
    </>
  );
};
