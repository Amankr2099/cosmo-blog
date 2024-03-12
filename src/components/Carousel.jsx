import { Link } from "react-router-dom";

const Carousel = ({ blogs }) => {

  return (
    <>
      <div className="container w-75 mt-5">
        <div id="carouselExampleCaptions" className="carousel slide ">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            {blogs.map((item, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <Link to={`/post/${item._id}`}  onClick={()=>{window.scrollTo(0,0)}}>
                  <img
                    src={item.blogImage ? item.blogImage : "https://via.placeholder.com/600x300?text=Image is not available"}
                    className="d-block w-100"
                    alt="..."
                  />
                </Link>

                  <div className="carousel-caption d-none d-md-block">
                    <h5>{item.title}</h5>
                    <p>{item.caption}</p>
                  </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
