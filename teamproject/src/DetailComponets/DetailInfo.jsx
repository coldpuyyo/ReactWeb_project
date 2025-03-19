import React from "react";
import { InfoWrapper } from "../DetailStyledComponents/Detail";
import { Goginame } from './../DetailStyledComponents/Detail';

const DetailInfo = ({ gogi }) => {
    if (!gogi) {
        return <p>해당 상품이 없습니다.</p>;
    }


    return (
        <InfoWrapper>
            <Goginame>
                <p>{gogi.name}</p>
            </Goginame>
            <p>무게</p> <p>{gogi.weight}</p>
            <p>가격</p><p>{gogi.price}원</p>
            <p>배송비</p><p>{gogi.shippingFee}</p>
        </InfoWrapper>
    );
};

export default DetailInfo;
