import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import { setPorductBycategoryId } from "../../store/actions/category.actions";
import { State } from "../../store/actions/tsTypes";
import { CategoryProductLoader } from "../Home/contentLoader";
import CreateProduct from "../Product/CreateProduct";

type TParams = { category_id: string; category_name: string };

const CategoryProducts = ({ match }: RouteComponentProps<TParams>) => {
  const {
    params: { category_name: categoryName, category_id: categoryId },
  } = match;

  const dispatch = useDispatch();
  const { categoriesProducts, categories } = useSelector((state: State) => ({
    ...state.category,
    ...state.home,
  }));
  const [loader, setLoader] = useState<boolean>(true);

  // console.log(categoriesProducts, categoryName);

  useEffect(() => {
    (async () => {
      setLoader(true);
      await dispatch(setPorductBycategoryId({ categoryId, categoryName }));
      categories.rows.length && setLoader(false);
    })();
  }, [categoryId, categoryName, dispatch, categories.rows]);

  let slug = categoryName;

  return (
    <>
      {loader ? (
        <CategoryProductLoader />
      ) : (
        <CategoryWrapper>
          {slug in categoriesProducts &&
            categoriesProducts[slug].rows?.map((product, i) => (
              <CreateProduct product={product} key={i} />
            ))}
        </CategoryWrapper>
      )}
    </>
  );
};
const CategoryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  grid-gap: 1em;
  margin: 35px auto;
  justify-content: center;

  & > div {
    margin: 0 auto;
    // border: 2px solid blue;
  }
`;
export default CategoryProducts;
