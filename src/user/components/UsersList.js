import React from "react";
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";
import "./UsersList.css";

const UsersList = ({ users }) => {
  if (users.length === 0) {
    return (
      <div>
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="users-list">
      {users.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          venueCount={user.venuesCount}
        />
      ))}
    </ul>
  );
};

export default UsersList;
