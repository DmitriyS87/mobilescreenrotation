import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: absolute;
  right: calc(100vw / 25);
  top: calc(100vh / 35);
  z-index: 50;
  color: red;
`;

const CloseCross = props => {
  const { isAvailable } = props;
  return (
    <StyledContainer>
      <div className="visually-hidden">
        <svg
          version="1.1"
          id="close_cross"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0,33.2l6.8,6.8L20,26.8l13.2,13.2l6.8-6.8L26.8,20L39.9,6.8L33.2,0L20,13.2L6.8,0L0,6.8L13.2,20L0,33.2z"
            fillOpacity="0.7"
          />
        </svg>
      </div>
      <button
        type="button"
        className={`button ${isAvailable ? '' : 'visually-hidden'}`}
      >
        <svg viewBox="0 0 50 50" width="50" height="50">
          <use xlinkHref="#close_cross" />
        </svg>
      </button>
    </StyledContainer>
  );
};

export default CloseCross;
