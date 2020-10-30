import React, { useEffect, useState } from "react";
import styled from "styled-components";
import api from "./../services/api";

function Home() {
  const [departments, setDepartments] = useState([]);
  const getDepartments = async (url: string) => {
    try {
      const data = await api.get(url);
      setDepartments(data);
    } catch (e) {
      return e;
    }
  };

  useEffect(() => {
    getDepartments("departments");
  }, []);

  return (
    <>
      <header>
        <SearchHead>
          <Logo></Logo>
          <Search type="text" />
          <Login>Login</Login>
          <More>More</More>
          <Cart>Cart</Cart>
        </SearchHead>
        <Department>
          {departments.map((el, i) => (
            // @ts-ignore
            <button key={i}>{el.name}</button>
          ))}
        </Department>
      </header>
    </>
  );
}

const SearchHead = styled.div``;
const Logo = styled.div``;
const Search = styled.input``;
const Login = styled.button``;
const More = styled.button``;
const Cart = styled.button``;
const Department = styled.div``;

export default Home;
