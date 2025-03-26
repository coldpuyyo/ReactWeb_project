import styled from "styled-components";

/* ✅ 전체 페이지를 감싸는 컨테이너 */
export const AllpageWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px 0;
`;

/* ✅ 전체 버튼 스타일 (검은색 적용) */
export const AllButton = styled.button`
  background: #000; /* ✅ 검은색 */
  color: white;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #333; /* ✅ 호버 시 더 밝은 검은색 */
  }
`;

/* ✅ 전체 버튼 + 체크박스를 감싸는 컨테이너 */
export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

/* ✅ 체크박스 그룹 (부위 & 용도) */
export const CheckboxGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

/* ✅ 체크박스 스타일 */
export const CustomCheckbox = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  color: white;
  padding: 8px 12px;
  border-radius: 15px;
  transition: background 0.3s ease-in-out;
  
  /* ✅ "전체"는 항상 빨강, 나머지는 색상 유지 */
  background: ${({ checked, color }) => (checked || color === "#FF0000" ? color : "#ddd")};

  input {
    display: none;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const H2 = styled.h2`
  justify-self: center;
`;
