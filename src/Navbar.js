import React from "react";
import { Menu, MenuItem } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Menu>
      <Link to="/">
        <MenuItem>Home</MenuItem>
      </Link>
      <Link to="/about">
        <MenuItem>About</MenuItem>
      </Link>
      <Link to="/contact_us">
        <MenuItem>Contact us</MenuItem>
      </Link>
      <Link to="/blog">
        <MenuItem>Blog</MenuItem>
      </Link>
    </Menu>
  );
};

export default Navbar;
