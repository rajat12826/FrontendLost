import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import Register from "./Register";
import Handle from "./Handle";
function Navbar() {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  const switchTabs = () => {
    navigate(`/login`);
  };
  return (
    <nav>
      {user ? (
        <ul className="flex justify-between bg-gray-800 text-white font-semibold text-md py-5 px-10 max-sm:px-0 ">
          <li>
            <Link to="/" className="hover:font-bold hover:text-green-500 ">
              Home
            </Link>
          </li>
          <li
            className="hover:font-bold hover:text-green-500 "
            onClick={() => {
              localStorage.removeItem("user");
              window.location.reload();
            }}
          >
            Logout
          </li>
          <li>
            <Link to="/find" className="hover:font-bold hover:text-green-500 ">
              Find
            </Link>
          </li>
          <li>
            <Link
              to="/report"
              className="hover:font-bold hover:text-green-500 "
            >
              Report
            </Link>
          </li>

          <li
            onClick={() => {
              window.location.reload();
            }}
          >
            <Link to="/items" className="hover:font-bold hover:text-green-500 ">
              Items
            </Link>
          </li>
        </ul>
      ) : (
        <Handle />
      )}
    </nav>
  );
}

export default Navbar;
