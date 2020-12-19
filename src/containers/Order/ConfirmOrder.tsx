import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { getShippingOption } from "../../services/api";
import { createOrder, setAllOrders } from "../../store/actions/orders.action";
import { State } from "../../store/actions/tsTypes";
import { CreateOrderLoader } from "../Home/contentLoader";

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
  const [shippingOption, setShippingOption] = useState<Array<any>>([]);

  const getShippingResionById = async () => {
    const data = await getShippingOption(customer.shipping_region_id);
    setShippingOption(data);
  };

  useEffect(() => {
    getShippingResionById();
  }, []);

  const handleOnChange = (event: any) => {
    setSelectedOption({ value: event.target.value, id: event.target.id });
  };

  const handleConfirmOrder = async () => {
    const orderData = {
      cart_id: cartId,
      shipping_id: selectedOption.id,
      tax_id: 2,
    };

    const orderId = await dispatch(createOrder(orderData));
    const allOrdersData = await dispatch(setAllOrders());
    orderId && allOrdersData.length > 0 && history.push("/orders");
  };

  return (
    <>
      {!(shippingOption.length > 0) ? (
        <CreateOrderLoader />
      ) : (
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
            <DeliveryOptionBox>
              <p>Select Delivery Option</p>
              {shippingOption.length > 0 &&
                shippingOption.map((obj, i) => (
                  <div key={i}>
                    <input
                      type="radio"
                      value={obj.shipping_type.replace(/\([^\)\(]*\)/, "")}
                      checked={
                        selectedOption.value ===
                        `${obj.shipping_type.replace(/\([^\)\(]*\)/, "")}`
                      }
                      onChange={handleOnChange}
                      id={obj.shipping_id.toString()}
                    />
                    <p>
                      <span>
                        {" "}
                        {obj.shipping_type.replace(/\([^\)\(]*\)/, "")}
                      </span>
                      <span>
                        Shipping Cost: &#8377;{Number(obj.shipping_cost) * 5}
                      </span>
                    </p>
                  </div>
                ))}
            </DeliveryOptionBox>
          </DeliveryAddress>
          <DeliveryOption></DeliveryOption>

          <ConfirmOrderBox>
            <button onClick={handleConfirmOrder}>Confirm Order</button>
          </ConfirmOrderBox>
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

const DeliveryOptionBox = styled.section`
  margin-left: 5em;

  p:first-child {
    color: #585656;
    font-weight: bold;
  }

  div {
    display: flex;
    flex-direction: row;
    margin: 20px 0;
  }

  input {
    margin-right: 10px;

    &:hover {
      cursor: pointer;
    }
  }

  p {
    display: flex;
    flex-direction: column;
  }

  span {
    margin: 3px 0 5px 0;
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

const DeliveryOption = styled.div``;

const ConfirmOrderBox = styled.div`
  // border: 2px solid red;
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
