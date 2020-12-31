import React from "react";
import styled from "styled-components";

interface DeliveryOptionProps {
  shippingOption: { result: []; status: number | string };
  selectedOption: { value: string; id: number | undefined };
  setSelectedOption: React.Dispatch<
    React.SetStateAction<{
      value: string;
      id: any;
    }>
  >;
}

function DeliveryOption({
  shippingOption,
  selectedOption,
  setSelectedOption,
}: DeliveryOptionProps) {
  const handleOnChange = (event: any) => {
    setSelectedOption({ value: event.target.value, id: event.target.id });
  };

  return (
    <>
      <DeliveryOptionBox>
        <p>Select Delivery Option</p>

        {shippingOption.result.map((obj: any, i: number) => (
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
              <span> {obj.shipping_type.replace(/\([^\)\(]*\)/, "")}</span>
              <span>Shipping Cost: &#8377;{Number(obj.shipping_cost) * 5}</span>
            </p>
          </div>
        ))}
      </DeliveryOptionBox>
    </>
  );
}

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

export default DeliveryOption;
