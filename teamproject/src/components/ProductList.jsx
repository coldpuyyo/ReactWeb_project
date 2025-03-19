import React from "react";
import { ProductContainer, ProductItem } from "../styles/ProductListStyles";
import { ContentWrapper } from "../styles/commonStyles";

// 🏷️ 상품 데이터 (예제 이미지)
const products = [
  "https://cdn.sirloin.co.kr/images/product/62bbd64790ce53452e5f6a2a/represent/%EC%83%A4%ED%86%A0%EB%B8%8C%EB%A6%AC%EC%95%99_%EC%84%A4_%EC%8D%B8_1_%EC%88%98%EC%A0%95.jpg",
  "https://placehold.co/150x150",
  "https://placehold.co/150x150",
  "https://placehold.co/150x150",
  "https://placehold.co/150x150",
  "https://placehold.co/150x150",
  "https://placehold.co/150x150", // 7번째 상품 (숨겨짐)
  "https://placehold.co/150x150", // 8번째 상품 (숨겨짐)
];

// 🏷️ 상품 리스트 컴포넌트
const ProductList = () => {
  // const { id } = useParams();
  // const [gogiData, setGogiData] = useState(null);

  // useEffect(() => {
  //   axios.get("http://localhost:3000/gogiInfo")
  //     .then((response) => {
  //       const product = response.data.find((item) => Number(item.id) === Number(id));
  //       setGogiData(product || null);
  //     })
  //     .catch((error) => {
  //       console.error("데이터 안불러짐 콘솔 확인:", error);
  //     });
  // }, [id]);

  // if (!gogiData) {
  //   return <p>이미 삭제되었거나 없는 상품입니다.</p>;


  return (
    <ContentWrapper>
      <ProductContainer>
        {products.slice(0, 6).map((img, index) => ( // 상위 6개만 표시
          <ProductItem key={index}>
            <img src={img} alt={`상품 ${index + 1}`} />
          </ProductItem>
        ))}
      </ProductContainer>
    </ContentWrapper>
  );
};

export default ProductList;
