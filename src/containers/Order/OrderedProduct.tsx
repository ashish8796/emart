import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getProductDetailById } from "../../services/api";
import { OrdersLoader } from "../Home/contentLoader";
// import { State } from "../../store/actions/tsTypes";

interface OrderedProductProps {
  product: any;
}

function OrderedProduct({ product }: OrderedProductProps) {
  // const dispatch = useDispatch();
  // const { customer } = useSelector((state: State) => state.user);
  const [productData, setProductData] = useState<Array<any>>([]);

  useEffect(() => {
    (async () => {
      const data: any = await getProductDetailById(product.product_id);
      data.result.length > 0 && setProductData(data.result);
    })();
  }, [product.product_id]);

  // console.log({ product, productData });
  return (
    <ProductWrapper>
      {productData.length > 0 ? (
        <OrderedProductDiv>
          <img
            src={
              require(`./../../assets/images/product_images/${productData[0].image}`)
                .default
            }
            alt={`${product.name}`}
          />
          <div>
            <ProductName>{product.product_name}</ProductName>

            <p>
              Color: {product.attributes.split("-")[0]} Size:{" "}
              {product.attributes.split("-")[1]}
            </p>
            <p>
              <span>Quantity:</span> {product.quantity}
            </p>
            <Cost>&#8377; {Math.ceil(product.unit_cost * 75)} </Cost>
          </div>
        </OrderedProductDiv>
      ) : (
        <OrdersLoader />
      )}
    </ProductWrapper>
  );
}

const ProductWrapper = styled.div`
  margin-bottom: 20px;
`;

const OrderedProductDiv = styled.div`
  display: flex;
  flex-direction: row;

  img {
    width: 100px;
    border-radius: 3px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color: gray;

    p {
      margin-left: 20px;
      font-size: 14px;
    }
  }
`;

const ProductName = styled.p`
  font-weight: bold;
  color: black;
  font-size: 18px;
`;

const Cost = styled.p`
  font-weight: bold;
  font-size: 16px;
`;

export default OrderedProduct;
