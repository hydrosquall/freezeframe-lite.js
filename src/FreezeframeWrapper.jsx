import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Freezeframe from './freezeframe-lite';

const FreezeframeWrapper = props => {
  const imgRef = useRef();
  const freezeframe = useRef();

  const { src, className } = props;

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
  src: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default FreezeframeWrapper;
