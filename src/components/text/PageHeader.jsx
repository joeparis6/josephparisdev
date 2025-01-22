import React from 'react';
import TextFrame from './TextFrame';

const PageHeader = (props) => {
  const { children } = props;
  return (
    <div className="pageHeader">
      <TextFrame>{children}</TextFrame>
    </div>
  );
};

export default PageHeader;
