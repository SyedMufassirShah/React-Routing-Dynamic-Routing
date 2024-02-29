import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h2>Contact Page</h2>
      <p>Reach Out to us Via These Platforms</p>
      <Link to={"instagram"}>
        <button>Instagram</button>
      </Link>
      <Link to={"facebook"}>
        <button>Facebook</button>
      </Link>
      <Link to={"github"}>
        <button>Github</button>
      </Link>
      <Outlet />
    </div>
  );
};

export default Contact;
