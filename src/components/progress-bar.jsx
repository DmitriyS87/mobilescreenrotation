import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const position = {
  offsetX: 0,
  offsetY: 25
};

const StyledContainer = styled.div`
  position: absolute;
  bottom: ${position.offsetY}px;
  left: ${position.offsetX}px;
  color: blue;
  z-index: 50;
  width: 98vw;

  .poster-progress {
    position: relative;
    width: 90%;
    height: 2vh;
    border-radius: 1px;
    border: none;
    background: lightblue;
  }

  .poster-progress::-webkit-progress-bar {
    background: lightblue;
  }
  .poster-progress::-webkit-progress-value {
    background: plum;
  }
  .poster-progress::-moz-progress-bar {
    background: plum;
  }

  .poster-progress__container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ProgressBar = props => {
  const { onTimerDone, delay, isAvailable } = props;

  function Counter() {
    const [count, setCount] = useState(1);
    const savedCallback = useRef();
    const savedId = useRef();

    function callback() {
      if (count >= 100) {
        onTimerDone();
      } else {
        setCount(count + 33);
      }
    }

    useEffect(() => {
      savedCallback.current = callback;
    });

    if (isAvailable) {
      useEffect(() => {
        function tick() {
          savedCallback.current();
        }

        savedId.current = setInterval(tick, delay); //eslint-disable-line
        return () => clearInterval(savedId.current);
      }, [delay]);
    }

    if (isAvailable) {
      return <progress value={count} max="100" className="poster-progress" />;
    }
    return <div />;
  }

  return (
    <StyledContainer>
      <div className="poster-progress__container">
        <Counter />
      </div>
    </StyledContainer>
  );
};

export default ProgressBar;
