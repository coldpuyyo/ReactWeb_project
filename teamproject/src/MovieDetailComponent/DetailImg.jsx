import React from 'react';
import { ImageWrapper, MovieImage } from './DetailStyle';

const DetailImg = ({ imageUrl }) => {
  return (
    <ImageWrapper>
      <MovieImage src={imageUrl} alt="Movie Poster" />
    </ImageWrapper>
  );
};

export default DetailImg;
