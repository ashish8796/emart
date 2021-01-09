import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getOrderInfoById } from "../../services/api";
import NetworkError from "../Home/NetworkError";
import OrderedProduct from "./OrderedProduct";

interface ShowOrderProps {
  order: any;
}

function ShowOrder({ order }: ShowOrderProps) {
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
