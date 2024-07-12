import React from "react";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group dashboard-menu">
          <h4>Admin Panel</h4>
          <NavLink
            to="/addFlight"
            className="list-group-item list-group-item-action"
          >
            Create Flight Record
          </NavLink>
          <NavLink
            to="/addAirport"
            className="list-group-item list-group-item-action"
          >
            Create Airport Record
          </NavLink>
          <NavLink
            to="/addFlight"
            className="list-group-item list-group-item-action"
          >
            View Bookings
          </NavLink>
          <NavLink
            to="/addFlight"
            className="list-group-item list-group-item-action"
          >
            Update flight Details
          </NavLink>
          {/* <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
          >
            Users
          </NavLink> */}
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
