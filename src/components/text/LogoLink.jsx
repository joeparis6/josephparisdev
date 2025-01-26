import React from 'react';
import Hyperlink from './Hyperlink';

const LogoLink = (props) => {
  const { logo, ...other } = props;
  return (
    <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
      {logo}
      <Hyperlink {...other} />
    </div>
  );
};

export default LogoLink;
