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

  const [load, setLoad] = useState<boolean>(false);

  const getShippingResionById = async () => {
    const data: any = await getShippingOption(customer.shipping_region_id);
    setNetworkError(data.status);
    setShippingOption(data);
  };

  useEffect(() => {
    getShippingResionById();
  }, []);

  const handleConfirmOrder = async () => {
    console.log("button working");
    setLoad(true);
    const orderData = {
      cart_id: cartId.id,
      shipping_id: selectedOption.id,
      tax_id: 2,
    };

    const orderedData: any = await dispatch(createOrder(orderData));

    console.log(orderData);
    setNetworkError(orderedData.createdOrderStatus);
    setLoad(false);
    if (orderedData.createdOrderStatus === 200) {
      history.push("/orders");
    }
  };

  const responseStatusArr = [200, 400, "Failed to fetch"];

  return (
    <>
      {!responseStatusArr.includes("Failed to fetch") ? (
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
                <button onClick={handleConfirmOrder}>
                  <Loader isLoad={load}></Loader> Confirm Order
                </button>
              </ConfirmOrderBox>
            </>
          )}

          {networkError === "Failed to fetch" && (
            <NetworkError setNetworkError={setNetworkError} />
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
    padding: 10px 35px 10px 15px;

    background: #fc8621;
    color: #fff;
    border-radius: 3px;

    &:hover {
      cursor: pointer;
    }
  }
`;

type Loder = {
  isLoad: boolean;
};

const Loader = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  margin: 0 5px -3px -10px;
  border: 2px solid #fc8621;
  border-top: 2px solid ${(state: Loder) => (state.isLoad ? "#fff" : "#fc8621")};
  border-right: 2px solid
    ${(state: Loder) => (state.isLoad ? "#fff" : "#fc8621")};
  border-radius: 50%;
  animation: rotate 0.8s linear infinite;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default ConfirmOrder;
