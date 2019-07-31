import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.picture`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const FullScreenPicture = props => {
  const { pictureTitle } = props;
  return (
    <StyledContainer>
      <source srcSet={`img/squooshed/${pictureTitle}_min.webp 1x, img/squooshed/${pictureTitle}_mid.webp 2x, img/squooshed/${pictureTitle}_max.webp 3x`} type='image/webp' />
      <source srcSet={`img/squooshed/${pictureTitle}_min.jpg 1x, img/squooshed/${pictureTitle}_mid.jpg 2x, img/squooshed/${pictureTitle}_max.jpg 3x`} type='image/jpeg' />
      <img
        src={`img/squooshed/${pictureTitle}_min.png`}
        alt="Красивая картинка"
      />
    </StyledContainer>
  );
};

export default FullScreenPicture;
