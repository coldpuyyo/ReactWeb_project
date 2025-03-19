import styled from "styled-components";
import { Swiper } from 'swiper/react';

export const BannerContainer = styled.section`
  width: 100%;
  height: 400px;
  max-width: 1050px;
  position: relative;
  display: flex;
  justify-content: center;
  `;

export const PageIndicator = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: black;
  color: white;
  padding: 4px 8px;
  border-radius: 16px;
  font-size: 14px;
`;
