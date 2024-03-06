import React, { useContext, useEffect, useState } from "react";
import "quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import axios from "axios";
import { useLocation } from "react-router-dom";
// import parse from "html-react-parser";

export const EditPost = () => {
  const location = useLocation();
  const postId = location.pathname.split("/")[2];

  // const [post, setPost] = useState({});

  const [content, setContent] = useState(null);
  const [title, setTitle] = useState(null);
  const [caption, setCaption] = useState(null);
  const [blogImage, setBlogImage] = useState(null);
  const [localImage, setLocalImage] = useState(null);

  const getPost = async () => {
    try {
      const res = await axios.get(`/api/blogs/${postId}`);
      if (res.data) {
        const { title, caption, content, blogImage } = res.data;
        setTitle(title);
        setCaption(caption);
        setContent(content);
        setBlogImage(blogImage);
      }
      // console.log(post);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        alert(error.response.data.error);
      } else {
        alert(
          "Unable to find this blog"
        );
      }
    }
  };

  useEffect(() => {
    getPost();
  }, [postId]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const data = {};

    if (title) data.title = title;
    if (caption) data.caption = caption;
    if (content) data.content = content;

    try {
      const res = await axios.put(`/api/blogs/${postId}`, data);

      if (res.data) {
        window.location.replace(`/post/${postId}`);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        alert(error.response.data.error);
      } else {
        alert(
          "Unable to update this blog"
        );
      }
    }
  };

  const updateImage = async (e) => {
    e.preventDefault();
    const data = new FormData();
    localImage && data.append("blogImage", localImage);

    try {
      const res = await axios.put(`/api/blogs/updateImage/${postId}`, data);
      if (res.data) {
        window.location.replace(`/post/${postId}`);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        alert(error.response.data.error);
      } else {
        alert(
          "Unable to update"
        );
      }
    }
  };

  const handleDelete = async()=>{
    try {
      const res = await axios.delete(`/api/blogs/${postId}`)
      if (res.data) {
        window.location.replace(`/posts`);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        alert(error.response.data.error);
      } else {
        alert(
          "Unable delete this blog"
        );
      }
    } 
  }

  var modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] },
      ],
      [
        {
          color: [
            "#000000",
            "#e60000",
            "#ff9900",
            "#ffff00",
            "#008a00",
            "#0066cc",
            "#9933ff",
            "#ffffff",
            "#facccc",
            "#ffebcc",
            "#ffffcc",
            "#cce8cc",
            "#cce0f5",
            "#ebd6ff",
            "#bbbbbb",
            "#f06666",
            "#ffc266",
            "#ffff66",
            "#66b966",
            "#66a3e0",
            "#c285ff",
            "#888888",
            "#a10000",
            "#b26b00",
            "#b2b200",
            "#006100",
            "#0047b2",
            "#6b24b2",
            "#444444",
            "#5c0000",
            "#663d00",
            "#666600",
            "#003700",
            "#002966",
            "#3d1466",
            "custom-color",
          ],
        },
      ],
    ],
  };

  var formats = [
    "header",
    "height",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "color",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "size",
  ];

  return (
    <div className="my-5 bg-white rounded-2 p-2">
      <div className="fs-2 pt-3 text-center">Write a post</div>
      <div className="form-outline" data-mdb-input-init>
        <input
          type="text"
          id="blogTitle"
          className="form-control mt-4 w-75 mx-auto"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="form-outline" data-mdb-input-init>
        <input
          type="text"
          id="blogCaption"
          className="form-control mt-4 w-75 mx-auto"
          value={caption}
          onChange={(e) => {
            setCaption(e.target.value);
          }}
        />
      </div>

      <img
        src={localImage ? URL.createObjectURL(localImage) : blogImage}
        alt="img"
        className="w-lg-75 w-sm-100 img-fluid py-2 mx-auto d-block"
      />
      {localImage && (
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
        className="mx-auto d-block py-1"
        onChange={(e) => {
          setLocalImage(e.target.files[0]);
        }}
      />

      <div className="w-75 pt-2 mx-auto ">
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          className="text-center fs-sm-6 "
          value={content}
          onChange={(newValue) => setContent(newValue)}
        ></ReactQuill>
      </div>

      <button
        type="button"
        className="btn btn-danger mx-auto d-block m-3 btn-md"
        onClick={handleUpdate}
      >
        Update
      </button>

      <button
        type="button"
        className="btn btn-danger mx-auto d-block m-3 btn-md"
        onClick={handleDelete}
      >
        Delete Post
      </button>
    </div>
  );
};
