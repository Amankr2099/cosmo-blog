import React, { useEffect, useState } from "react";
import { Card } from "./Card";
// import {Cards} from './data'
import axios from "axios";

export const PostsSection = () => {
  const [blogs, setBlogs] = useState([])

    const getBlogs = async () => {
        try {
            const { data } = await axios.get("api/blogs/allblogs")
            if (data) {
                setBlogs(data)
            }
        } catch (error) {
          if (error.response && error.response.data && error.response.data.error) {
            alert(error.response.data.error);
          } else {
            alert(
              "Unable to find blogs"
            );
          }
        } 
    }

    useEffect(() => {
        getBlogs()
    }, [])
 
  
  return (
    <div
      className="container m-5 mx-auto rounded-2 w-75"
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
      </div>
  );
};