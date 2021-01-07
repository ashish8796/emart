import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getOrderInfoById } from "../../services/api";
import { setOrderDetails } from "../../store/actions/orders.action";
import { State } from "../../store/actions/tsTypes";
import { OrderDetailsByIdTypes } from "../../store/reducers/orders.reducer";
import OrderedProduct from "./OrderedProduct";

interface ShowOrderProps {
  order: any;
}

function ShowOrder({ order }: ShowOrderProps) {
  const dispatch = useDispatch();
  const { orderDetailsById } = useSelector((state: State) => state.order);

  // const orderDetailsById = someData.orderDetailsById;
  const [orderData, setOrderData] = useState<Array<any>>([]);

  useEffect(() => {
    (async () => {
      const data: any = await dispatch(getOrderInfoById(order.order_id));
      if (data.status === 200) {
        // setOrderData({pdata});
      }
    })();
  }, [order.order_id]);

  const orderId: number | string = order.order_id;
  console.log({ orderDetailsById, id: order.order_id });

  return (
    <>
      {/* {orderData.orderId.status === 200 && ( */}
        <ShowOrderContainer>
          {orderDetailsById.orderId.products.map((product, i) => (
            <OrderedProduct product={product} key={i} />
          ))}
        </ShowOrderContainer>
      )}
    </>
  );
}

const ShowOrderContainer = styled.div``;

export default ShowOrder;
