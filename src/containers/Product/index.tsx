import React from "react";
import { RouteComponentProps, useLocation } from "react-router-dom";

interface ProductProps {
  id: number;
}

type TParams = {
  product_id: string;
};

function ProductUI() {
  const location = useLocation();
  const productId = location.pathname.match("\\d+");

  console.log(productId);
  return <></>;
}

export default ProductUI;
