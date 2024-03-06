import React, { useContext, useState } from "react";
import "quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import UserContext from "./Context/UserContext";
import axios from "axios";

export const WritePost = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [blogImage, setBlogImage] = useState(null);

  const { user } = useContext(UserContext);

  const handlePublish = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", title);
    data.append("author", user);
    data.append("caption", caption);
    data.append("content", content);
    blogImage ? data.append("blogImage", blogImage) : null;

    try {
      const res = await axios.post("/api/blogs/addblog", data);
      const blogId = res.data._id;

      blogId && window.location.replace(`/post/${blogId}`);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        alert(error.response.data.error);
      } else {
        alert(
          "An error occurred while posting the blog. Please try again later."
        );
      }
    }
  };

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
          placeholder="Your Blog Title"
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
          placeholder="Your Blog Caption"
          value={caption}
          onChange={(e) => {
            setCaption(e.target.value);
          }}
        />
      </div>

      <img
        src={
          blogImage
            ? URL.createObjectURL(blogImage)
            : "https://via.placeholder.com/600x300?text=An Image would be appreciable"
        }
        alt="img"
        className="w-lg-75 w-sm-100 img-fluid py-2 mx-auto d-block"
      />
      <input
        type="file"
        className="mx-auto d-block py-1"
        onChange={(e) => {
          setBlogImage(e.target.files[0]);
        }}
      />

      <div className="w-75 pt-2 mx-auto ">
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          placeholder="write your content ...."
          className="text-center fs-sm-6 "
          value={content}
          onChange={(newValue) => setContent(newValue)}
        ></ReactQuill>
      </div>

      <button
        type="button"
        className="btn btn-danger mx-auto d-block m-3 btn-md"
        onClick={handlePublish}
      >
        Publish
      </button>
    </div>
  );
};
