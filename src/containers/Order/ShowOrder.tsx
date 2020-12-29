import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getOrderInfoById } from "../../services/api";
import OrderedProduct from "./OrderedProduct";

interface ShowOrderProps {
  order: any;
}

function ShowOrder({ order }: ShowOrderProps) {
  const [orderData, setOrderData] = useState<Array<any>>([]);

  useEffect(() => {
    (async () => {
      const data: any = await getOrderInfoById(order.order_id);
      data.result.length > 0 && setOrderData(data.result);
    })();
  }, [order.order_id]);

  return (
    <>
      {orderData.length > 0 && (
        <ShowOrderContainer>
          {orderData.map((product, i) => (
            <OrderedProduct product={product} key={i} />
          ))}
        </ShowOrderContainer>
      )}
    </>
  );
}

const ShowOrderContainer = styled.div``;

export default ShowOrder;
