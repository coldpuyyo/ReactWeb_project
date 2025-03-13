import { DetailMainWrapper, DetailContentWrapper } from "../DetailStyledComponents/Detail";
import DetailConContainer from "./DetailContainer";
import ImageSlider from "./ImageSlider";
import DetailInfo from "./DetailInfo";

const DetailMain = () => {
    return (
        <DetailMainWrapper>
            <DetailContentWrapper>
            <ImageSlider />
                <DetailInfo />
                <DetailConContainer />
            </DetailContentWrapper>
        </DetailMainWrapper>
    );
};

export default DetailMain;
