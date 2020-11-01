import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { State } from "../../store/actions/tsTypes";
import CreateProduct from "./CreateProduct";

interface DepartmentProps {
  id: number;
}

function CreateDepartment({ id }: DepartmentProps) {
  const { prodByDept } = useSelector((state: State) => state.home);
  const [products, setProducts] = useState<Array<object>>([]);

  useEffect(() => {
    if (prodByDept && prodByDept[id]) {
      setProducts(prodByDept[id].products);
    }
  }, [prodByDept]);

  // const createProdTsx = ()=> {

  // }

  // console.log(prodByDept[1].products[0]);
  return (
    <>
      <ProductWrapper>
        {products.length > 0 &&
          products.map((product, i) => (
            <CreateProduct key={i} product={product} />
          ))}
      </ProductWrapper>
    </>
  );
}

const ProductWrapper = styled.article``;
const Dept2 = styled.article``;
const Dept3 = styled.article``;

export default CreateDepartment;
