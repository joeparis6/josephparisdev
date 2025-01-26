import React from 'react';

const Hyperlink = (props) => {
  const { url, displayText, isEmail = false } = props;
  return (
    <div className="hyperlink">
      <a
        href={isEmail ? `mailto:${url}` : url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {displayText}{' '}
      </a>
    </div>
  );
};

export default Hyperlink;
