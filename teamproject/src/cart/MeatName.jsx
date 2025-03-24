import React from "react";
import { Goginame } from '../DetailStyledComponents/Detail';

const MeatName = ({ gogi }) => {
    if (!gogi) {
        return <p>해당 상품이 없습니다.</p>;
    };

    return (
        <Goginame>
            <p>{gogi.name}</p>
        </Goginame>
    );
};

export default MeatName;