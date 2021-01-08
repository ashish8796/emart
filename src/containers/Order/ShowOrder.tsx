import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getOrderInfoById } from "../../services/api";
import NetworkError from "../Home/NetworkError";
// import { setOrderDetails } from "../../store/actions/orders.action";
// import { State } from "../../store/actions/tsTypes";
// import { OrderDetailsByIdTypes } from "../../store/reducers/orders.reducer";
import OrderedProduct from "./OrderedProduct";

interface ShowOrderProps {
  order: any;
}

function ShowOrder({ order }: ShowOrderProps) {
  // const dispatch = useDispatch();
  // const { orderDetailsById } = useSelector((state: State) => state.order);

  // const orderDetailsById = someData.orderDetailsById;
  const [orderData, setOrderData] = useState<{
    result: [];
    status: string | number;
  }>({ result: [], status: "" });

  useEffect(() => {
    (async () => {
      const data: any = await getOrderInfoById(order.order_id);
      // console.log(data);
      setOrderData({ result: data.result, status: data.status });
    })();
  }, [order.order_id]);

  return (
    <>
      {orderData.status === 200 && (
        <ShowOrderContainer>
          {orderData.result.map((product, i) => (
            <OrderedProduct product={product} key={i} />
          ))}
        </ShowOrderContainer>
      )}
      {orderData.status === "Failed to fetch" && <NetworkError />}
    </>
  );
}

const ShowOrderContainer = styled.div``;

export default ShowOrder;
