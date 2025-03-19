import React from "react";
import { BannerContainer } from "../styles/BannerStyles"; // 배너 스타일 가져오기
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper(슬라이더) 라이브러리 가져오기
import "swiper/css"; // Swiper 기본 스타일 가져오기
import "swiper/css/pagination"; // Swiper 페이지네이션 스타일 가져오기
import { Pagination, Autoplay } from "swiper/modules"; // Swiper 기능(페이지네이션, 자동재생) 가져오기

// 🏷️ 배너 이미지 목록
const bannerImages = [
  "https://i.imgur.com/KymMe2y.png", // 첫 번째 배너 이미지
  "https://i.imgur.com/uGpTGzp.jpeg", // 두 번째 배너 이미지
  "https://i.imgur.com/L6siJsZ.png", // 세 번째 배너 이미지
  "https://i.imgur.com/N1xyZ8I.png", // 네 번째 배너 이미지
  "", // 다섯 번째 배너 이미지
];

// 🏷️ 배너 컴포넌트
const Banner = () => {
  return (
    <BannerContainer>
      {/* Swiper 슬라이더 */}
      <div><p>협업기획전</p></div> {/* 배너 제목 */}
      <Swiper
        modules={[Pagination, Autoplay]} // 페이지네이션 & 자동재생 기능 추가
        pagination={{ clickable: true }} // 페이지네이션 클릭 가능 설정
        autoplay={{ delay: 3000 }} // 3초마다 자동 슬라이드 전환
        loop={true} // 마지막 이미지에서 첫 번째 이미지로 순환
      >
        {/* 🏷️ 배너 이미지 슬라이드 */}
        {bannerImages.map((img, index) => (
          <SwiperSlide key={index}>
            <img 
              src={img} 
              alt={`배너 ${index + 1}`} 
              style={{ width: "100%", height: "400px" }} // 이미지 크기 설정
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </BannerContainer>
  );
};

export default Banner; // 🏷️ 배너 컴포넌트 내보내기
