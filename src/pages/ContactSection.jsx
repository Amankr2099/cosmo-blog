import React from "react";
import {Link} from 'react-router-dom'

export const ContactSection = () => {
  return (
    <div className="container my-5  bg-secondary rounded-5 text-white p-4">
      <div className="row">
        <div className="col-md-6  p-4">
          <h2>Contact Us</h2>
          <p>Feel free to reach out to us for any inquiries or assistance. We're here to help!</p>
          <ul className="list-unstyled">
            <li><strong>Email:</strong> cosmoblog@gmail.com</li>
            <li><strong>Phone:</strong> +1 234 567 890</li>
          </ul>
        </div>
        <div className="col-md-6">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
            </div>
            <Link to={'/'}>
            <button type="submit" className="btn btn-primary mt-4">Submit</button>
            
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
;
