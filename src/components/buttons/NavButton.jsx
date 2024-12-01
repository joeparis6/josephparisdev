import React from 'react';
import { Link } from 'react-router-dom';

const NavButton = (props) => {
  const { label, to = '/' } = props;
  return (
    <Link to={to}>
      <button className="navButton">
        <h4>{label}</h4>
      </button>
    </Link>
  );
};

export default NavButton;
