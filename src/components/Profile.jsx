import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>plz login</div>;
  return (
    <div>
      <p>Welcome {user.username}</p>
      <p>
        your password is &nbsp;
        <b>{user.password}</b>
      </p>
    </div>
  );
}

export default Profile;
