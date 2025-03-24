import styled from 'styled-components';

export const CartWrapper = styled.div`
  display: grid;
  width: 1000px;
  height: 500px; /* 고정 높이 설정 */
  border: solid 0.5px lightgray;
  border-radius: 10px;
  grid-column: 1/7;
  grid-row: 3/6;
  padding: 20px;
  background-color: rgb(255, 252, 238);
  justify-content: center;
  overflow-y: auto; /* 세로 스크롤 허용 */
`;
export const Card = styled.div`
height: 100px; /* 나중에 삭제*/
padding: 20px;
border-radius: 5px;
  border: 1px solid ; /* 나중에 삭제*/
  display: flex;
  flex-direction: row; /* 세로 정렬 */
  align-items: center; /* 가운데 정렬 */
  width: auto;
  margin: 10px; /* 카드 간 간격 추가 */
`;

export const Text = styled.p`
text-align: center;
  width: 150px;
  font-size: 16px; /* 글씨 크기 */
  font-weight: bold; /* 글씨 두껍게 */
`;

export const Img = styled.img`
  height: 100px;
  border-radius: 30px;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;

  &.fade {
    opacity: 0;
  }
`;
export const Button = styled.button`
`;
