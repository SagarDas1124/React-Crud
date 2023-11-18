import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { Avatar } from "@mui/material";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link
          to="/"
          className="navbar-brand logo d-flex flex-row align-items-center"
        >
          <Avatar alt="Remy Sharp" src={Logo} className="me-2" />
          <span>ITE</span>
        </Link>
        <Link to="/create" className="btn btn-outline-light">
          Create
        </Link>
      </div>
    </nav>
  );
};
