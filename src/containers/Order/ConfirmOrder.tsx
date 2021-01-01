import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { getShippingOption } from "../../services/api";
import { createOrder, setAllOrders } from "../../store/actions/orders.action";
import { State } from "../../store/actions/tsTypes";
import { CreateOrderLoader } from "../Home/contentLoader";
import NetworkError from "../Home/NetworkError";
import DeliveryOption from "./DeliveryOption";

function ConfirmOrder() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { customer, cartId } = useSelector((state: State) => ({
    ...state.user,
    ...state.cart,
  }));

  const [selectedOption, setSelectedOption] = useState({
    value: "",
    id: undefined,
  });
  const [shippingOption, setShippingOption] = useState<{
    result: any;
    status: number | string;
  }>({ result: null, status: "" });

  const [networkError, setNetworkError] = useState<string | number>("");

  const getShippingResionById = async () => {
    const data: any = await getShippingOption(customer.shipping_region_id);
    setNetworkError(data.status);
    setShippingOption(data);
  };

  useEffect(() => {
    getShippingResionById();
  }, []);

  const handleConfirmOrder = async () => {
    const orderData = {
      cart_id: cartId,
      shipping_id: selectedOption.id,
      tax_id: 2,
    };

    const orderedData: any = await dispatch(createOrder(orderData));
    setNetworkError(orderedData.createdOrderStatus);

    if (orderedData.createdOrderStatus === 200) {
      history.push("/orders");
    }
  };

  const responseStatusArr = [200, 400, "Failed to fetch"];

  return (
    <>
      {!responseStatusArr.includes(shippingOption.status) ? (
        <CreateOrderLoader />
      ) : (
        <>
          {shippingOption.status === 200 && (
            <>
              <DeliveryAddress>
                <section>
                  <AddressHeading>Shipping Address</AddressHeading>
                  <p>{customer.address_1},</p>
                  <p>{customer.address_2 && customer.address_2 + " ,"}</p>
                  <p>
                    {customer.city} (<span>{customer.postal_code}</span>),
                  </p>
                  <p>
                    {customer.country} ({customer.region})
                  </p>

                  <Contact>Contact Number</Contact>
                  <p>{customer.mob_phone}</p>
                </section>
                <DeliveryOption
                  shippingOption={shippingOption}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                />
              </DeliveryAddress>

              <ConfirmOrderBox>
                <button onClick={handleConfirmOrder}>Confirm Order</button>
              </ConfirmOrderBox>
            </>
          )}

          {networkError === "Failed to fetch" && <NetworkError />}
        </>
      )}
    </>
  );
}

const DeliveryAddress = styled.div`
  display: flex;
  flex-direction: row;

  section {
    width: 40%;
  }
  p {
    margin-bottom: 8px;
  }
`;

const AddressHeading = styled.p`
  color: #585656;
  font-weight: bold;
`;

const Contact = styled.p`
  color: #585656;
  font-weight: bold;
  margin-top: 30px;
`;

const ConfirmOrderBox = styled.div`
  position: relative;
  margin-top: 3em;
  height: 60px;

  button {
    position: absolute;
    right: 0;
    margin-right: 2em;
    outline: none;
    border: none;
    font-size: 20px;
    padding: 10px 20px;
    background: #fc8621;
    color: #fff;
    border-radius: 3px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export default ConfirmOrder;
