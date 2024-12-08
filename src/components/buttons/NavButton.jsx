import React from 'react';
import { Link } from 'react-router-dom';

const NavButton = (props) => {
  const { label, to = '/' } = props;
  return (
    <div className="navButton">
      <Link to={to}>
        <button>
          <h4>{label}</h4>
        </button>
      </Link>
    </div>
  );
};

export default NavButton;
