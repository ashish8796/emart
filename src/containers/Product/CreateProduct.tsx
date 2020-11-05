import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { Product } from "../../store/reducers/category.reducer";

interface ProductProps {
  product: Product;
  first?: boolean;
}

function CreateProduct({ product, first }: ProductProps) {
  const history = useHistory();

  const imgSrc = require(`./../../assets/images/product_images/${product.thumbnail}`)
    .default;

  const productDiscountedPrice = Math.ceil(
    Number(product.discounted_price) * 75
  );

  const productPrice = Math.ceil(Number(product.price) * 75);
  // console.log(Number(product.price));

  return (
    <>
      {"price" in product && (
        <ProductWrapper
          first={first}
          onClick={() => {
            window.open(`/product/${product.name}/${product.product_id}`);
          }}
        >
          <ProductImage src={imgSrc} alt={product.thumbnail} />
          <ProductName>{product.name} </ProductName>
          {/* <ProductDescription>{product.description}</ProductDescription> */}
          <ProductDiscountedPrice>
            <RupeeIcon
              src={require("./../../assets/images/rupee-indian.svg").default}
            />
            <p>{productDiscountedPrice}</p>
          </ProductDiscountedPrice>
          <ProductPrice>
            <span>
              <FontAwesomeIcon icon={faRupeeSign} />
            </span>
            {productPrice}
          </ProductPrice>

          <SaveMoney>
            Save{" "}
            <span>
              <FontAwesomeIcon icon={faRupeeSign} />
            </span>
            {productPrice - productDiscountedPrice}
          </SaveMoney>
        </ProductWrapper>
      )}
    </>
  );
}
interface WrapperProps {
  first: boolean | undefined;
}

const ProductWrapper = styled.div`
  border: 2px solid #d4d4d4;
  border-radius: 3px;
  font-family: Roboto, Arial, sans-serif;
  margin-left: ${(state: WrapperProps) => (state.first ? "6em" : "20px")};
  span {
    margin-left: 5px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const FirstProductWrapper = styled(ProductWrapper)`
  margin-left: 6em;
`;

const ProductImage = styled.img`
  margin: 20px 20px 10px 25px;
  border-radius: 3px;
`;
const ProductName = styled.p`
  width: 130px;
  font-weight: 600;
  margin: 10px 20px;
`;
const ProductDescription = styled.p``;
const ProductPrice = styled.p`
  text-decoration: line-through;
  margin-bottom: 5px;
  svg {
    margin-right: 2px;
    margin-left: 20px;
  }
`;

const RupeeIcon = styled.img`
  width: 16px;
  height: 20px;
`;

const ProductDiscountedPrice = styled.div`
  font-size: 20px;
  margin: 6px 20px;
  display: flex;
  align-items: center;
`;
const SaveMoney = styled.p`
  color: green;
  font-weight: 600;
  margin: 10px 20px;

  span {
    margin: 0;
  }
  svg {
    font-size: 13px;
    margin-right: 1px;
  }
`;

export default CreateProduct;
