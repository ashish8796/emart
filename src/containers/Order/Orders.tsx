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
  const { customer, cartId, allOrders } = useSelector((state: State) => ({
    ...state.user,
    ...state.cart,
    ...state.order,
  }));

  console.log("Working");
  console.log(allOrders);
  // const orders = [
  //   {
  //     order_id: 44995,
  //     total_amount: "16.95",
  //     created_on: "2020-12-04T09:46:12.000Z",
  //     shipped_on: null,
  //     status: 0,
  //     name: "Ashish Kumar Saini",
  //   },
  //   {
  //     order_id: 44994,
  //     total_amount: "0.00",
  //     created_on: "2020-12-04T09:44:26.000Z",
  //     shipped_on: null,
  //     status: 0,
  //     name: "Ashish Kumar Saini",
  //   },
  //   {
  //     order_id: 44993,
  //     total_amount: "0.00",
  //     created_on: "2020-12-04T09:36:04.000Z",
  //     shipped_on: null,
  //     status: 0,
  //     name: "Ashish Kumar Saini",
  //   },
  //   {
  //     order_id: 44992,
  //     total_amount: "15.99",
  //     created_on: "2020-12-04T09:34:01.000Z",
  //     shipped_on: null,
  //     status: 0,
  //     name: "Ashish Kumar Saini",
  //   },
  // ];

  useEffect(() => {
    (async () => {
      console.log("Working 1");
      const orderData = await setAllOrders();
      console.log("Working 2");
    })();
  });

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
  padding: 30px;
  margin: 30px;
  background-color: #fff;
`;

const FlexStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled(FlexStyle)`
  flex-direction: row;
  margin: 10px 0;

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

const AllOrdersBox = styled(FlexStyle)``;

export default AllOrders;
