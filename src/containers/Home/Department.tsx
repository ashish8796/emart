import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { State } from "../../store/actions/tsTypes";
import { RowsObj } from "../../store/reducers/home.reducer";

interface Props {
  el: RowsObj;
}

function Dept({ el }: Props) {
  const [isHover, setIsHover] = useState(false);
  const [releventCats, setReleventCats] = useState<Array<RowsObj>>([]);

  const { categories } = useSelector((state: State) => state.home);

  // console.log();
  let relevCats: RowsObj[] =
    "rows" in categories
      ? categories.rows.filter((v) => v.department_id === el.department_id)
      : [];

  // console.log(categories);

  return (
    <DepWrapper>
      <Dep>
        <h1
          onMouseOver={() => {
            setIsHover(true);
            setReleventCats(relevCats);
          }}
          onMouseLeave={() => {
            setIsHover(false);
            // setReleventCats([]);
          }}
        >
          {el.name}{" "}
          {<FontAwesomeIcon icon={!isHover ? faChevronDown : faChevronUp} />}
        </h1>
        {releventCats.length > 0 && (
          <Categories
            onMouseLeave={() => {
              console.log("Working");
              setReleventCats([]);
            }}
          >
            {releventCats.map((cat, i) => (
              <Cat key={i}>{cat.name}</Cat>
            ))}
          </Categories>
        )}
      </Dep>
    </DepWrapper>
  );
}

const DepWrapper = styled.div`
  position: relative;
`;

const Dep = styled.div`
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

const Cat = styled.p`
  font-weight: normal;
  margin: 10px 8px;
  font-family: Roboto, Arial, sans-serif;
  &:hover {
    cursor: pointer;
    color: #0000c6;
  }
`;

export default Dept;
