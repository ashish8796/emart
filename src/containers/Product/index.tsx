import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { getProductById } from "../../services/api";
// import { State } from "../../store/actions/tsTypes";
import { Product } from "../../store/reducers/category.reducer";
import ProductAttribute from "./Attribute";
import BuyingOption from "./BuyingOption";
import Ratting from "./Ratting";

function ProductUI() {
  const location = useLocation();
  // const { cartId } = useSelector((state: State) => ({
  //   ...state.cart,
  //   ...state.user,
  // }));

  const [productData, setProductData] = useState<Product>({
    product_id: 0,
    name: "",
    description: "",
    discounted_price: "",
    price: "",
    thumbnail: "",
    image: "",
    image_2: "",
  });

  const [attribute, setAttribute] = useState({ color: "", size: "" });
  const productId = location.pathname.split("/").pop();
  const [mainImage, setMainImage] = useState("");

  const convertPrice = (price: string) => {
    return Math.ceil(Number(price) * 75);
  };

  const productDiscountedPrice = convertPrice(productData.discounted_price);
  const productPrice = convertPrice(productData.price);
  const off = productPrice - productDiscountedPrice;

  useEffect(() => {
    (async (productId) => {
      try {
        const data = await getProductById(productId);

        if (data.thumbnail) {
          setMainImage(data.thumbnail);
          setProductData(data);
        }
      } catch (error) {
        console.log(error);
      }
    })(productId);
  }, []);

  // function handleBuyNowClick() {
  //   console.log(customer);
  //   if (!("emart-token" in localStorage)) {
  //     history.push("/login");
  //   } else {
  //     history.push("/user");
  //   }
  // }

  function makeImages(imageName: string, i: number) {
    return (
      <ProductImage
        key={i}
        src={
          require(`./../../assets/images/product_images/${imageName}`).default
        }
        onMouseOver={() => {
          setMainImage(imageName);
        }}
      />
    );
  }

  return (
    <>
      <ProductContainer>
        {productData.name && (
          <>
            <SectionA>
              <AllImages>
                <MoreImages>
                  {[productData.image, productData.image_2].map(
                    (imageName, i) => {
                      return makeImages(imageName, i);
                    }
                  )}
                </MoreImages>

                <PrimaryImage>
                  <PrimeImage
                    src={
                      require(`./../../assets/images/product_images/${mainImage}`)
                        .default
                    }
                  />
                </PrimaryImage>
              </AllImages>
            </SectionA>

            <SectionB>
              <div>
                <Name>{productData.name}</Name>
                <Ratting productId={productId} />

                <Save>
                  <p>
                    Extra <span>&#8377;</span> <span>{off}</span> off
                  </p>
                </Save>

                <Price>
                  <span>&#8377;{productDiscountedPrice}</span>
                  <span>&#8377;{productPrice}</span>{" "}
                  <span>{Math.ceil((off * 100) / productPrice)}% off</span>
                </Price>

                <ProductAttribute
                  productId={productId}
                  attribute={attribute}
                  setAttribute={setAttribute}
                />

                <BuyingOption productId={productId} attribute={attribute} />

                <ProductDescription>
                  <h1>Product Descirption</h1>
                  <p>{productData.description}</p>
                </ProductDescription>
              </div>
            </SectionB>
          </>
        )}
      </ProductContainer>
    </>
  );
}

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ProductContainer = styled(Flex)`
  justify-content: flex-start;
  align-items: flex-start;
  font-family: Roboto, Arial, sans-serif;
  padding: 0 20px;
`;
const SectionA = styled.section`
  padding: 30px;
  // border: 2px solid;
  width: 60%;
`;

const AllImages = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MoreImages = styled(Flex)`
  flex-direction: column;
  margin-right: 20px;
`;

const Img = styled.img`
  border-radius: 3px;
  border: 2px solid #fff;
  &:hover {
    cursor: pointer;
    border: 2px solid blue;
  }
`;
const ProductImage = styled(Img)`
  width: 100px;
  height: 100px;
  margin: 20px 0;
`;

const PrimeImage = styled(Img)`
  width: 150px;
  height: 200px;

  &: hover {
    border: 2px solid #fff;
    cursor: auto;
  } ;
`;

const PrimaryImage = styled(Flex)`
  width: 80%;
  margin-top: 20px;
  justify-content: flex-start;
`;

const SectionB = styled.section`
  & > div {
    // border: 2px solid green;
    padding-left: 25rem;
  }
`;

const Name = styled.p`
  font-size: 30px;
  margin-bottom: 8px;
`;

const Save = styled.div`
  color: green;
  margin-top: 30px;
`;
const Price = styled.div`
  font-size: 20px;
  margin-top: 8px;
  margin-bottom: 30px;

  span:first-child {
    font-size: 30px;
    font-weight: bold;
  }

  span:nth-child(2) {
    text-decoration: line-through;
    color: grey;
    margin: 0 10px;
  }

  span:nth-child(3) {
    color: green;
  }
`;
const Offers = styled.div``;

const ProductDescription = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
  h1 {
    font-weight: bold;
    color: grey;
    margin: 5px 0;
  }
  p {
    width: 50%;
    line-height: 20px;
  }
`;

export default ProductUI;
