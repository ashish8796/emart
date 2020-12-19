import React, { useEffect } from "react";
import styled from "styled-components";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../store/actions/tsTypes";
import ShowOrder from "./ShowOrder";
import { setAllOrders } from "../../store/actions/orders.action";

function AllOrders() {
  const dispatch = useDispatch();
  const { customer, allOrders } = useSelector((state: State) => ({
    ...state.user,
    ...state.cart,
    ...state.order,
  }));

  console.log(allOrders.length);

  useEffect(() => {
    (async () => {
      await dispatch(setAllOrders());
    })();
  }, [dispatch]);

  return (
    <>
      <OrdersContainer>
        <UserName>
          <p>
            LOGIN{" "}
            <span>
              <FontAwesomeIcon icon={faCheck} />
            </span>
          </p>

          <p>
            <span>{customer.name}</span> (<span>{customer.email}</span>)
          </p>
        </UserName>

        <AllOrdersBox>
          {allOrders.length > 0 &&
            allOrders.map((order, i) => <ShowOrder order={order} key={i} />)}
        </AllOrdersBox>
      </OrdersContainer>
    </>
  );
}

const OrdersContainer = styled.div`
  font-family: Roboto, Arial, sans-serif;
  // border: 2px solid red;
  padding: 20px 30px;
  margin: 5em 30px 0 30px;
  background-color: #fff;
`;

const FlexStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled(FlexStyle)`
  flex-direction: row;
  // margin: 10px 0;

  p:first-child {
    margin: 0 20px 20px 0;
    font-weight: bold;

    span {
      color: green;
    }
  }

  p:last-child {
    span: first-child {
      font-weight: bold;
    }
  }
`;

const LoaderDiv = styled.div`
  svg {
    margin: 10px 0;
  }
`;

const AllOrdersBox = styled(FlexStyle)``;

export default AllOrders;
