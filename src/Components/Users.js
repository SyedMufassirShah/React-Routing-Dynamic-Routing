import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Users = () => {

  const [searchParams, setSearchParam] = useSearchParams();

  const showActiveUsers = searchParams.get("filter") === "active";

  const users = [
    { id: "CS120212045", name: "Syed Mufassir Shah" },
    { id: "CS120212038", name: "Muhammad Rehan Afridi" },
    { id: "CS120212028", name: "Muhammad Moiz" },
    { id: "CS120212003", name: "Abdur Razzaq" },
    { id: "CS120212042", name: "Shafi ur Rehman" },
  ];
  return (
    <div>
      {users.map((entity) => (
        <Link to={`users/${entity.id}`} key={entity.id}>
          <div className="userDataPlate">
            <h5 className="user-id">{entity.id}</h5>
            <h5 className="user-name">{entity.name}</h5>
          </div>
        </Link>
      ))}
      <Outlet />

      <button onClick={() => setSearchParam({filter: "active"})}>ACTIVE</button>
      <button onClick={() => setSearchParam({})}>RESET</button>
      <div>
        {
          showActiveUsers ? (
            <h2>Show Active Users</h2>
          ) : (
            <h2>Show All Users</h2>
          ) 
        }
      </div>
    </div>
  );
};

export default Users;
