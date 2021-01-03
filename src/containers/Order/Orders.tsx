import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../store/actions/tsTypes";
import ShowOrder from "./ShowOrder";
import { setAllOrders } from "../../store/actions/orders.action";
import { UnAuthError } from "./ErrorHandling";
import NetworkError from "../Home/NetworkError";

function AllOrders() {
  const dispatch = useDispatch();
  const { customer, allOrders, ordersStatus } = useSelector((state: State) => ({
    ...state.user,
    ...state.cart,
    ...state.order,
  }));
  const [networkError, setNetworkError] = useState<string | number>("");

  // console.log(allOrders.length);

  useEffect(() => {
    (async () => {
      const orderData: any = await dispatch(setAllOrders());
      console.log(orderData);

      setNetworkError(orderData.status);
    })();
  }, [dispatch]);

  useEffect(() => {
    if (customer.customer_status === 500) {
      console.log(customer.customer_status);

      setNetworkError(customer.customer_status);
    }
  }, [customer.customer_status]);

  console.log(customer.customer_status);

  return (
    <>
      {customer.customer_status === 200 && (
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
          {ordersStatus === 200 && (
            <AllOrdersBox>
              {allOrders.map((order, i) => (
                <ShowOrder order={order} key={i} />
              ))}
            </AllOrdersBox>
          )}
          {networkError === 401 && (
            <UnAuthError
              setNetworkError={setNetworkError}
              networkError={networkError}
            />
          )}
          {networkError === "Failed to fetch" && <NetworkError />}
        </OrdersContainer>
      )}

      {networkError === 500 && (
        <UnAuthError
          setNetworkError={setNetworkError}
          networkError={networkError}
        />
      )}
    </>
  );
}

const OrdersContainer = styled.div`
  font-family: Roboto, Arial, sans-serif;
  // border: 2px solid red;
  padding: 20px 30px;
  margin: 30px;
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
