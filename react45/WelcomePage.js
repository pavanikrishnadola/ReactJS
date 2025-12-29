import React, { useContext } from "react";
import { UserContext } from "./Context";
const WelcomePage = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Welcome User:</h1>
      <p>
        Name: {user.name} <br />
        ID: {user.id}
      </p>
    </div>
  );
};
export default WelcomePage;
