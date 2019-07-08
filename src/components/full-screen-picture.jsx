import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.picture`
  img {
    width: 100%;
  }
`;

const FullScreenPicture = props => {
  const { pictureTitle } = props;
  return (
    <StyledContainer>
      <source srcSet={`img/squooshed/${pictureTitle}.webp`} type="image/webp" />
      <img
        src={`img/squooshed/${pictureTitle}.jpg`}
        srcSet={`img/squooshed/${pictureTitle}.png 2x, img/${pictureTitle}.png 3x`}
        alt=""
      />
    </StyledContainer>
  );
};

export default FullScreenPicture;
