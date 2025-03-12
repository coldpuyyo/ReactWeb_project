import React from 'react';
import DetailImg from './DetailImg';
import DetailInfo from './MovieInfo';
import { MainWrapper, ContentWrapper, InfoWrapper } from './DetailStyle';

const DetailMain = ({ movie }) => {
  return (
    <MainWrapper>
      <ContentWrapper>
        <DetailImg imageUrl="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAxMjNfMjcw%2FMDAxNzM3NjE5MjEwMzk1.PtAEXMxyCJXYovtpAHq4opoW9C_RWMOg0v5SEzVh7-Qg.HpPek0_yMFazyBYoE_QJqPrpUTWrWfY_PgDr6r9mFUog.PNG%2Fimage.png&type=sc960_832" />
        <InfoWrapper>
        <DetailInfo movie={movie} />
        </InfoWrapper>
      </ContentWrapper>
    </MainWrapper>
  );
};


export default DetailMain;
