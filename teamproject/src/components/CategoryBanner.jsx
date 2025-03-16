import React from "react";
// 스타일 컴포넌트 임포트
import { CategoryBannerContainer, CategoryBannerImage } from "../styles/CategoryBannerStyles";
// Swiper 관련 컴포넌트 임포트
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper CSS 임포트
import "swiper/css";
import "swiper/css/pagination";
// Swiper 모듈 임포트
import { Pagination, Autoplay } from "swiper/modules";

// 카테고리 배너 이미지 배열
const categoryBannerImages = [
  "https://placehold.co/600x200?text=Category+Banner+1",
  "https://placehold.co/600x200?text=Category+Banner+2",
  "https://placehold.co/600x200?text=Category+Banner+3",
];

// CategoryBanner 컴포넌트 정의
const CategoryBanner = () => {
  return (
    <CategoryBannerContainer>
      <p>기획전</p> {/* 배너 제목 */}
      <Swiper
        modules={[Pagination, Autoplay]} // 사용할 Swiper 모듈
        pagination={{ clickable: true }} // 페이지네이션 설정
        autoplay={{ delay: 3000 }} // 자동 재생 설정 (3초 간격)
        loop={true} // 슬라이드 루프 설정
      >
        {/* 이미지 배열을 맵핑하여 SwiperSlide 생성 */}
        {categoryBannerImages.map((img, index) => (
          <SwiperSlide key={index}> {/* 각 슬라이드에 고유 키 부여 */}
            <CategoryBannerImage src={img} alt={`카테고리 배너 ${index + 1}`} /> {/* 이미지 렌더링 */}
          </SwiperSlide>
        ))}
      </Swiper>
    </CategoryBannerContainer>
  );
};

// CategoryBanner 컴포넌트 내보내기
export default CategoryBanner;
