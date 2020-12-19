import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { State } from "../../store/actions/tsTypes";
import CreateProduct from "../Product/CreateProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Product } from "../../store/reducers/category.reducer";
import { setProdByDeptId } from "../../store/actions/home.action";
import { DepartmentProductLoader } from "../Home/contentLoader";

interface DepartmentProps {
  id: number;
}

function CreateDepartment({ id }: DepartmentProps) {
  const dispatch = useDispatch();
  // const { prodByDept } = useSelector((state: State) => state.home);
  const [products, setProducts] = useState<Array<Product>>([]);
  const [width, setWidth] = useState(0);
  const scrollElem = useRef<HTMLElement>(null!);
  const [productLoader, setProductLoader] = useState(true);

  useEffect(() => {
    (async (id) => {
      const data: any = await dispatch(setProdByDeptId(id));
      setProducts(data.rows);
      setProductLoader(false);
    })(id);
  }, [id, dispatch]);

  return (
    <>
      {productLoader ? (
        <DepartmentProductLoader></DepartmentProductLoader>
      ) : (
        <ProductContainer ref={scrollElem} width={width}>
          <LeftButton
            onClick={(event) => {
              // console.log("Left button is working");
              // console.log(width);
              setWidth((width) => width + 100);
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </LeftButton>
          {products.length > 0 &&
            products.map((product, i) => (
              <CreateProduct key={i} product={product} first={i === 0} />
            ))}
          <RightButton
            onClick={() => {
              // console.log("Right button is working");
              setWidth((width) => width - 100);
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </RightButton>
        </ProductContainer>
      )}
    </>
  );
}

interface props {
  width: number;
}

const ProductContainer = styled.article`
  display: flex;
  flex-direaction: row;
  overflow: scroll;
  overflow-y: hidden;
  scroll-left : ${(props: props) => props.width}
  transition : overflow 1s;
  &:nth-child (1) {
    margin-left: 5em;
  }
`;

const Button = styled.button`
  position: absolute;
  font-size: 30px;
  width: 60px;
  padding: 25px 0;
  // transform: translate(0, -50%);
  // top: 50%;
  border: none;
  box-shadow: 2px 2px 5px grey;
  outline: none;
  background: #fff;

  &:hover {
    cursor: pointer;
  }
`;
const LeftButton = styled(Button)`
  left: 0;
  box-shadow: 2px 2px 5px grey;
  margin-left: 10px;
`;
const RightButton = styled(Button)`
  right: 0;
  box-shadow: -2px 2px 5px grey;
  margin-right: 10px;
`;

export default CreateDepartment;
