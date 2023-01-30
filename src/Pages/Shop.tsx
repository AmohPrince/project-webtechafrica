import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../Components/Button";
import { useAuth } from "../Hooks/UseAuth";

const Shop = () => {
  const { user } = useAuth();
  const { pathname } = useLocation();
  const isAdmin = pathname.includes("admin");

  if (isAdmin && !user) {
    return (
      <p>
        You are not signed in{" "}
        <Link to="/sign-in">
          <Button text="sign-in " />
        </Link>{" "}
      </p>
    );
  }

  return (
    <div>
      Welcome to test user`s shop <p>{isAdmin && "Admin"}</p>
    </div>
  );
};

export default Shop;
