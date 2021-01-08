import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getAttributesByProductId } from "../../services/api";
import NetworkError from "../Home/NetworkError";

interface Attribute {
  result: [
    {
      attribute_name: string;
      attribute_value_id: number;
      attribute_value: string;
    }
  ];
  status: number | string;
}

interface ProductAttributeProps {
  productId: any;
  attribute: any;
  setAttribute: any;
}

function ProductAttribute({
  productId,
  attribute,
  setAttribute,
}: ProductAttributeProps) {
  const [allAttributes, setAllArributes] = useState<Attribute>({
    result: [
      { attribute_name: "", attribute_value_id: 0, attribute_value: "" },
    ],
    status: "",
  });

  useEffect(() => {
    (async (productId) => {
      const attributes: any = await getAttributesByProductId(productId);

      setAllArributes(attributes);
    })(productId);
  }, [productId]);

  return (
    <>
      {allAttributes.status === 200 && (
        <AttributeWrapper>
          <Colors>
            <h1>Colors</h1>
            {allAttributes.result.map(
              (cv, i) =>
                cv.attribute_name === "Color" && (
                  <ColorTag
                    selectColor={cv.attribute_value === attribute.color}
                    key={i}
                    onClick={() => {
                      setAttribute((state: any) => ({
                        ...state,
                        color: cv.attribute_value,
                      }));
                    }}
                  >
                    {cv.attribute_value}
                  </ColorTag>
                )
            )}
          </Colors>
          <Size>
            <h1>Size</h1>
            {allAttributes.result.map(
              (cv, i) =>
                cv.attribute_name === "Size" && (
                  <SizeTag
                    mark={cv.attribute_value === attribute.size}
                    key={i}
                    onClick={() => {
                      setAttribute((state: any) => ({
                        ...state,
                        size: cv.attribute_value,
                      }));
                    }}
                  >
                    {cv.attribute_value}
                  </SizeTag>
                )
            )}
          </Size>
        </AttributeWrapper>
      )}

      {allAttributes.status === "Failed to fetch" && <NetworkError />}
    </>
  );
}

const AttributeWrapper = styled.div`
  padding: 5px;
  h1 {
    margin-top: 13px;
    margin-right: 3em;

    color: grey;
    font-weight: bold;
  }
`;

const Colors = styled(AttributeWrapper)`
  display: flex;
  flex-direction: row;
`;

const PTag = styled.p`
  margin: 0 5px;
  padding: 10px 5px;
  border: 2px solid #fff;
  border-radius: 3px;
  &:hover {
    border: 2px solid grey;
    cursor: pointer;
    color: #db6400;
  }
`;

interface ColorProps {
  selectColor: boolean;
}

const ColorTag = styled(PTag)`
  border: 2px solid
    ${(state: ColorProps) => (state.selectColor ? "blue" : "#fff")};
  &:hover {
    border: 2px solid
      ${(state: ColorProps) => (state.selectColor ? "blue" : "grey")};
    cursor: pointer;
    color: #db6400;
  }
`;

const Size = styled(AttributeWrapper)`
  display: flex;
  flex-direction: row;

  h1 {
    margin-right: 4.1em;
    margin-top: 8px;
  }

  p {
    padding: 5px 20px;
  }
`;

interface SizeProps {
  mark: boolean;
}

const SizeTag = styled(PTag)`
  border: 2px solid ${(state: SizeProps) => (state.mark ? "blue" : "#fff")};
  &:hover {
    border: 2px solid ${(state: SizeProps) => (state.mark ? "blue" : "grey")};
    cursor: pointer;
    color: #db6400;
  }
`;

export default ProductAttribute;
