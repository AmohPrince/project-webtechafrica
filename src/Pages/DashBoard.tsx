import React, { useState } from "react";
import ActiveWebsite from "../Components/ActiveWebsite";
import { Button } from "../Components/Button";
import DevWebsiteComponent from "../Components/DevWebsiteComponent";
import WebsiteBuilderForm from "../Components/WebsiteBuilderForm";
import { useAuth } from "../Hooks/UseAuth";

const DashBoard = () => {
  const { user } = useAuth();
  const [showForm, setShowForm] = useState<boolean>(false);

  return (
    <div className="py-3 px-8 relative">
      {showForm && <WebsiteBuilderForm closeFn={setShowForm} />}
      <div className="flex justify-between items-center">
        <p className="h4">Hello {user?.name} 👋</p>
        <Button
          text="Get new website"
          onClick={() => setShowForm((prev) => !prev)}
        />
        <Button text="Log out" onClick={() => setShowForm((prev) => !prev)} />
      </div>
      <h2 className="h2 mt-5 border-t">Active Websites</h2>
      {user?.activeWebsites.map((website) => (
        <ActiveWebsite website={website} />
      ))}
      <h2 className="h2 mt-5 border-t">Under construction websites</h2>
      {user?.devWebsites.map((website) => (
        <DevWebsiteComponent website={website} />
      ))}
      <h2 className="h2 mt-5 border-t">My Plan</h2>
      <p>
        You are currently on the {user?.plan} plan{" "}
        {user?.plan.toLowerCase() === "premium" ? "🎉" : "🔮"}
      </p>
      <p>Billing breakdown</p>
      <div className="flex justify-between">
        <p>testuser.webtechafrica.com</p>
        <p>Ksh 4700 billed monthly on 13th of each month</p>
      </div>
      <h2 className="h2 mt-5 border-t">Payment methods</h2>
      <p>No payment methods selected</p>
      <p>Select payment method</p>
    </div>
  );
};

export default DashBoard;
