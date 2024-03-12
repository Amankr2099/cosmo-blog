import { Link } from "react-router-dom"
import parse from 'html-react-parser'


export const Card = ({ card }) => {

  
  return (
    <Link to={`/post/${card._id}`} className="text-decoration-none"  onClick={()=>{window.scrollTo(0,0)}}>
    <div className="card my-3 " style={{ maxWidth: "590px" }}>
      <div className="row g-0">
        <div className="col-md-4 ">
          <img
            src={card.blogImage ? card.blogImage : "https://via.placeholder.com/600x300?text=Image is not available"}
            className="img-fluid object-fit-cover rounded-3 h-100 "
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{card.title} </h5>
            {/* <p className="card-text" > {card.content.substring(0, 400)} </p> */}
            <p className="card-text" > {card.caption} </p>
            <p className="card-text" > <i className="fa-solid fa-pen"/> {card.authorName} </p>

            {/* <p className="card-text" > {parse(card.content).slice(0, 400)} ...</p> */}
            {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
          </div>
        </div>
      </div>
    </div>
    </Link>
    
  );
};
