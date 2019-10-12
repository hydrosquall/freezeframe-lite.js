// Example of how to use freezeframe-lite in a React 16.8+ project using hooks
// This is quite similar to the wrapper that could be used for the main Freezeframe-js library too.
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Freezeframe from 'freezeframe-lite';

const FreezeframeWrapper = props => {
  const imgRef = useRef();
  const freezeframe = useRef();

  const { src, className = "" } = props;

  useEffect(() => {
    freezeframe.current = new Freezeframe(imgRef.current);
  }, []);

  return (
    <div className={className}>
      <img ref={imgRef} src={src} />
    </div>
  );
};

FreezeframeWrapper.propTypes = {
  src: PropTypes.string.isRequired, // Should end with GIF!
  className: PropTypes.string
};

export default FreezeframeWrapper;
