import React from "react"; // React 라이브러리 불러오기
import { SliderContainer, ProductImage } from "../styles/ProductSliderStyles"; // 스타일 파일에서 필요한 요소 불러오기
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper(슬라이더) 라이브러리 불러오기
import "swiper/css"; // Swiper 기본 스타일 불러오기
import "swiper/css/pagination"; // Swiper 페이지네이션 스타일 불러오기
import { Pagination, Autoplay } from "swiper/modules"; // Swiper 기능(페이지네이션, 자동재생) 불러오기

// 🏷️ 상품 슬라이드 이미지 목록
const productImages = [
  "https://placehold.co/1200x300?text=Product+1", // 첫 번째 상품 슬라이드 이미지
  "https://placehold.co/1200x300?text=Product+2", // 두 번째 상품 슬라이드 이미지
  "https://placehold.co/1200x300?text=Product+3", // 세 번째 상품 슬라이드 이미지
  "https://placehold.co/1200x300?text=Product+4", // 네 번째 상품 슬라이드 이미지
  "https://placehold.co/1200x300?text=Product+5", // 다섯 번째 상품 슬라이드 이미지
];

// 🏷️ 상품 슬라이더 컴포넌트
const ProductSlider = () => {
  return (
    <SliderContainer> {/* 슬라이더 전체를 감싸는 컨테이너 */}
      {/* Swiper 슬라이드 */}
      <Swiper
        modules={[Pagination, Autoplay]} // 페이지네이션 & 자동재생 기능 추가
        pagination={{ clickable: true }} // 페이지네이션 클릭 가능 설정
        autoplay={{ delay: 3000 }} // 3초마다 자동으로 슬라이드 전환
        loop={true} // 마지막 슬라이드에서 처음으로 순환
      >
        {/* 🏷️ 상품 슬라이드 이미지 반복 렌더링 */}
        {productImages.map((img, index) => (
          <SwiperSlide key={index}>
            <ProductImage src={img} alt={`상품 ${index + 1}`} /> {/* 상품 이미지 */}
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default ProductSlider; // 🏷️ 상품 슬라이더 컴포넌트 내보내기
