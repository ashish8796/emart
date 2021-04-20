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
  const [index, setIndex] = useState<number>(0);

  const handleTabButton = (e: any) => {
    const { name, value } = e.target;

    setIndex((index) =>
      value == "left" ? (index - 5 < 0 ? 0 : index - 5) : index + 5
    );
  };

  useEffect(() => {
    (async (id: number) => {
      await dispatch(setProdByDeptId(id));
      // setProducts(data.rows);
      setProductLoader(false);
    })(id);
  }, [id, dispatch]);

  return (
    <>
      {productLoader ? (
        <Loader>
          <DepartmentProductLoader />
        </Loader>
      ) : (
        <ProductContainer ref={scrollElem} width={width}>
          <LeftButton>
            <FontAwesomeIcon icon={faChevronLeft} />
            <FakeButton
              name="left"
              value="left"
              onClick={handleTabButton}
              disabled={index <= 0}
            />
          </LeftButton>

          <ProductsWrapper>
            {prodByDept[id]?.productsStatus === 201 &&
              prodByDept[id].products
                .slice(index, index + 5)
                .map((product, i) => (
                  <CreateProduct key={i} product={product} first={i === 0} />
                ))}
          </ProductsWrapper>

          <RightButton>
            <FontAwesomeIcon icon={faChevronRight} />
            <FakeButton
              name="right"
              value="right"
              onClick={handleTabButton}
              disabled={index + 5 >= prodByDept[id].products.length}
            />
          </RightButton>
        </ProductContainer>
      )}
    </>
  );
}

interface Props {
  width: number;
  // departmentLength: number;
}

const Loader = styled.div`
  // &:first-of-type {
  //   margin-top: 20px;
  // }
`;

const ProductContainer = styled.article`
  /* border: 1px solid red; */
  margin: 2rem 0;
  align-items: center;
  display: flex;
  flex-direction: row;
  overflow: scroll;
  overflow-y: hidden;
  /* scroll-left: ${(props: Props) => props.width}; */
  transition: overflow 1s;
  padding: 010px;

  &:first-of-type {
    margin-top: 20px;
  }
`;

const Button = styled.button`
  position: relative;
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

const FakeButton = styled(Button)`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid red;
  left: 0;
  top: 0;
  /* background: none; */
  opacity: 0;
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

const ProductsWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  /* border: 1px solid blue; */
`;

export default CreateDepartment;
