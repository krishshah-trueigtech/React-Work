import { useLoaderData, Link } from "react-router-dom";
import React from "react";

export const userDetailLoader = async ({ params }) => {
  const id = params.id;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );

  if (!response.ok) {
    throw new Error("Could not find the User");
  }

  return response.json();
};

const UserDetail = () => {
  const user = useLoaderData();

  return (
    <div
      className="user-detail-card"
      style={{ padding: "10px", border: "1px solid #ccc", marginTop: "20px" }}
    >
      <h2>{user.name}</h2>
      <p>
        <strong>Email: </strong>
        {user.email}
      </p>
      <p>
        <strong>Phone: </strong>
        {user.phone}
      </p>
      <p>
        <strong>Company:</strong>
        {user.company.name}
      </p>

      <Link to="/users" style={{ marginTop: "10px", display: "inline-block" }}>
        Back to users
      </Link>
    </div>
  );
};

export default UserDetail;
