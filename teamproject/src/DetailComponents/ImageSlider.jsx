import React, { useState, useEffect } from "react";
import { SliderWrapper, SlideImage } from "../DetailStyledComponents/Detail";

const images = [
  "https://cdn.sirloin.co.kr/images/product/64eefdd499cb7bebfe3b02eb/represent/%ED%8A%B8%EB%9F%AC%ED%94%8C%EB%93%B1%EC%8B%AC%ED%99%88%ED%8C%8C%ED%8B%B0_%EC%8D%B81.jpg",
  "https://cdn.sirloin.co.kr/images/product/64eefdd499cb7bebfe3b02eb/represent/%ED%8A%B8%EB%9F%AC%ED%94%8C%EB%93%B1%EC%8B%AC%ED%99%88%ED%8C%8C%ED%8B%B0_%EC%8D%B8-2.jpg",
  "https://cdn.sirloin.co.kr/images/product/64eefdd499cb7bebfe3b02eb/represent/%ED%8A%B8%EB%9F%AC%ED%94%8C%EB%93%B1%EC%8B%AC%ED%99%88%ED%8C%8C%ED%8B%B0_%EC%8D%B8-5.jpg"
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(false);
      }, 500);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <SliderWrapper>
      <SlideImage className={fade ? "fade" : ""} src={images[currentIndex]} alt={`Product ${currentIndex + 1}`} />
    </SliderWrapper>
  );
};

export default ImageSlider;
