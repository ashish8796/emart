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

  const [networkError, setNetworkError] = useState<string | number>(401);

  const getShippingResionById = async () => {
    const data: any = await getShippingOption(customer.shipping_region_id);
    // setNetworkError(data.status);
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

    // const orderedData: any = await dispatch(createOrder(orderData));
    // const allOrdersData: any = await dispatch(setAllOrders());
    // if (
    //   orderedData.createdOrderStatus === 200 &&
    //   allOrdersData.status === 200
    // ) {
    //   history.push("/orders");
    // } else if (allOrdersData.status === 401) {
    //   setNetworkError(allOrdersData.status);
    // } else if (
    //   orderedData.createdOrderStatus === "Failed to fetch" ||
    //   allOrdersData.status === "Failed to fetch"
    // ) {
    //   setNetworkError("Failed to fetch");
    // }
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
          {networkError === 401 && (
            <>
              <UnAuthOverlay></UnAuthOverlay>
              <UnAuthErrorBox>
                <div>
                  <p>Unauthorized Access. Please login again.</p>
                  <button>OK</button>
                </div>
              </UnAuthErrorBox>
            </>
          )}
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

const UnAuthOverlay = styled.article`
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const UnAuthErrorBox = styled.article`
  top: 60px;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(4px);

  div {
    padding: 10px;
    text-align: center;
    margin: 10em auto;
    width: 300px;
    height: 150px;
    border: 2px solid red;
    border-radius: 5px;
    background-color: #fff;
  }

  p {
    margin-top: 2em;
    font-size: 18px;
  }

  button {
    margin-top: 20px;
    width: 100px;
    padding: 8px 10px;
    font-size: 18px;
    outline: none;
    border: none;
    background: #f37121;
    color: #fff;
    border-radius: 3px;
    font-weight: bold;

    &: hover {
      cursor: pointer;
    }
  }
`;

export default ConfirmOrder;
