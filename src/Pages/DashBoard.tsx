import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Components/Button";
import { useAuth } from "../Hooks/UseAuth";
import { getNoSpaceLowerCaseString } from "../Util/Utilities";

const DashBoard = () => {
  const { user } = useAuth();
  return (
    <div>
      <p>Hello {user?.name}</p>
      <Link to={getNoSpaceLowerCaseString(user!.name) + "/adminshop"}>
        <Button text="View Your Shop" />
      </Link>
      <p>My Plan</p>
      <h1 className="h3">Fill in Form</h1>
      Pick theme
      <p>Get Website</p>
    </div>
  );
};

export default DashBoard;
