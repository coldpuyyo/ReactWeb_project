import React from 'react';
import { MovieImage } from './DetailStyle';

const DetailImg = ({ imageUrl }) => {
  return (

    <MovieImage src={imageUrl} alt="Movie Poster" />
  );
};

export default DetailImg;
