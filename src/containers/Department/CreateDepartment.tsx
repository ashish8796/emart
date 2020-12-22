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
  const { prodByDept, departments } = useSelector((state: State) => state.home);
  const [products, setProducts] = useState<Array<Product>>([]);
  const [width, setWidth] = useState(0);
  const scrollElem = useRef<HTMLElement>(null!);
  const [productLoader, setProductLoader] = useState(true);

  useEffect(() => {
    (async (id) => {
      if (!(prodByDept[id]?.products.length > 0)) {
        const data: any = await dispatch(setProdByDeptId(id));
        setProducts(data.rows);
        setProductLoader(false);
      } else {
        setProducts(prodByDept[id].products);
        setProductLoader(false);
      }
    })(id);
  }, [id, dispatch]);

  return (
    <>
      {productLoader ? (
        <Loader>
          <DepartmentProductLoader />
        </Loader>
      ) : (
        <ProductContainer
          ref={scrollElem}
          width={width}
          departmentLength={departments.length}
        >
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

interface Props {
  width: number;
  departmentLength: number;
}

const Loader = styled.div`
  // &:first-of-type {
  //   margin-top: 20px;
  // }
`;

const ProductContainer = styled.article`
  display: flex;
  flex-direaction: row;
  overflow: scroll;
  overflow-y: hidden;
  scroll-left : ${(props: Props) => props.width}
  transition : overflow 1s;
  &:first-of-type{
    margin-top: 20px;
  }
`;

const Button = styled.button`
  position: absolute;
  font-size: 30px;
  width: 60px;
  padding: 25px 0;
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
