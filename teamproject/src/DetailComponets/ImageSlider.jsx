import React, { useState, useEffect } from "react";
import { ImageWrapper, SlideImage } from "../DetailStyledComponents/Detail";

const ImageSlider = ({ images }) => {
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

        return () => clearInterval(interval); //
    }, [images]);

    if (!images || images.length === 0) {
        return <p>이미지가 없습니다.</p>;
    }


    return (
        <>

            <SlideImage className={fade ? "fade" : ""} src={images[currentIndex].url} alt={`Product ${currentIndex + 1}`} />

        </>

    );
};

export default ImageSlider;
