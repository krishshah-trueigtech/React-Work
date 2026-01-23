import React from "react";
import { useLoaderData, Link, Outlet, useSearchParams } from "react-router-dom";

export const userListLoader = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

  if (!response.ok) {
    throw new Error("couldn't fetch Users");
  }
  return response.json();
};
const UserList = () => {
  const users = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const filterTerm = searchParams.get("filter") || "";

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(filterTerm.toLowerCase()),
  );

  return (
    <>
      <div className="User Container" style={{ display: "flex", gap: "20px" }}>
        <div style={{ flex: 1 }}>
          <h2>User List</h2>
          <ul className="user-list">
            <input
              type="text"
              placeholder="Search users..."
              value={filterTerm}
              onChange={(e) => {
                const term = e.target.value;
                setSearchParams(term ? { filter: term } : {});
              }}
              style={{ marginBottom: "15px", padding: "5px" }}
            />
            {filteredUsers.map((u) => (
              <li
                key={u.id}
                className="user-card"
                style={{
                  marginBottom: "10px",
                  padding: "10px",
                  border: "1px solid #eee",
                }}
              >
                <Link to={`/users/${u.id}`} style={{ fontWeight: "bold" }}>
                  {u.name}
                </Link>
                <p style={{ margin: 0, fontSize: "0.9em" }}>{u.email}</p>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ flex: 1, padding: "20px" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default UserList;
