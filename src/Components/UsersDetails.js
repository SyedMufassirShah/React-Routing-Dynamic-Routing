import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UsersDetails = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <h2>UsersDetails</h2>
      <h3>Here's Detail about User Id {userId}</h3>
      <button onClick={() => navigate(-1)}>GO BACK</button>
    </div>
  );
};

export default UsersDetails;
