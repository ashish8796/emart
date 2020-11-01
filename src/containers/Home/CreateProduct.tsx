import React from "react";
import styled from "styled-components";

interface Props {
  product: {
    description?: string;
    discounted_price?: string;
    name?: string;
    price?: string;
    product_id?: number;
    thumbnail?: string;
  };
}

function CreateProduct({ product }: Props) {
  console.log(product);
  return (
    <>
      <Product>
        <img
          src={require(`./../../assets/images/product_images/${product.thumbnail}`)}
          alt={`${product.thumbnail}`}
        />
      </Product>
    </>
  );
}

const Product = styled.div``;

export default CreateProduct;
