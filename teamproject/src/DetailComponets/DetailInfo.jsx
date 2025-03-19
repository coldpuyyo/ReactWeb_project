import React from "react";
import { InfoWrapper } from "../DetailStyledComponents/Detail";
import { Goginame } from './../DetailStyledComponents/Detail';

const DetailInfo = ({ product }) => {
    if (!product) {
        return <p>해당 상품이 없습니다.</p>;
    }



    return (
        <InfoWrapper>
            <Goginame>
                <p>{product.name}</p>
            </Goginame>
            <p>원산지: {product.origin}</p>
            <p>무게: {product.weight}g</p>
            <p>가격: {product.price}원</p>
            <p>부위: {product.part}</p>
            <p>사용법: {product.usage}</p>
        </InfoWrapper>
    );
};

export default DetailInfo;
