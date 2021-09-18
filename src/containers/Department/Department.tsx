import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { State } from "../../store/actions/tsTypes";
import { RowsObj } from "../../store/reducers/home.reducer";
// import { useHistory } from "react-router-dom";
import { useRouter } from "next/router";

interface Props {
  el: RowsObj;
}

function Department({ el }: Props) {
  const router = useRouter();
  const [isHover, setIsHover] = useState(false);
  const [releventCats, setReleventCats] = useState<Array<RowsObj>>([]);

  const { categories } = useSelector((state: State) => state.home);

  const handleMouseOverOnDepartment = () => {
    setIsHover(true);
  };

  const handleMouseLeveOnDepartment = () => {
    setIsHover(false);
  };

  const handleOnclickOnCategory = (event: any) => {
    const name = event.target.innerText;
    const category: any = categories.rows.find((el) => el.name === name);
    router.push(`/category/${name + "/" + category.category_id}`);
  };

  return (
    <DepartmentWrapper
      onMouseOver={handleMouseOverOnDepartment}
      onMouseLeave={handleMouseLeveOnDepartment}
    >
      <h1>
        {el.name}{" "}
        {<FontAwesomeIcon icon={!isHover ? faChevronDown : faChevronUp} />}
      </h1>

      {categories.categoriesStatus === 200 && isHover && (
        <Categories>
          {(categories.rows as Array<RowsObj>)
            .map((category, i) => {
              return category.department_id === el.department_id ? (
                <CategoryName key={i} onClick={handleOnclickOnCategory}>
                  {category.name}
                </CategoryName>
              ) : undefined;
            })
            .filter((el: any) => el)}
        </Categories>
      )}
    </DepartmentWrapper>
  );
}

const DepartmentWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 130px;
  margin-right: 5px;

  h1 {
    font-weight: bold;
    padding: 10px 0;
    &:hover {
      cursor: pointer;
      color: #0000c6;
      svg {
        color: #0000c6;
      }
    }
  }
  svg {
    margin-left: 4px;
    margin-top: 3px;
    color: grey;
    font-size: 12px;
  }
`;

const Categories = styled.div`
  position: absolute;
  top: 2.4em;
  width: 100px;
  margin-right: 3px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

const CategoryName = styled.p`
  font-weight: normal;
  margin: 10px 8px;
  font-family: Roboto, Arial, sans-serif;
  &:hover {
    cursor: pointer;
    color: #0000c6;
    // background-color: #ff9a76;
  }
`;

export default Department;
