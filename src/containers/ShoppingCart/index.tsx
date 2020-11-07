import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { State } from "../../store/actions/tsTypes";

function ShoppingCart() {
  const { cartId, productsList } = useSelector((state: State) => state.cart);

  const convertPrice = (price: string) => {
    return Math.ceil(Number(price) * 75);
  };

  const percentOff = (totalCost: string, discountedCost: string) => {
    return (
      Math.ceil(
        (convertPrice(totalCost) - convertPrice(discountedCost)) /
          convertPrice(totalCost)
      ) * 100
    );
  };

  console.log(productsList[0]);
  const product = {
    attributes: "Black-XL",
    image: "easter-rebellion.gif",
    item_id: 63762,
    name: "Easter Rebellion",
    price: "16.95",
    product_id: 30,
    quantity: 1,
    subtotal: "16.95",
  };

  return (
    <>
      <CartWrapper>
        <ProductSection>
          {productsList.map((product, i) => (
            <ProductCart key={i}>
              <div>
                <ProductImg
                  src={
                    require(`./../../assets/images/product_images/${product.image}`)
                      .default
                  }
                />
              </div>
              <ProductDetails>
                <div>
                  <p>{product.name}</p>
                  <p>
                    <span>&#8377;{convertPrice(product.price)}</span>
                  </p>
                </div>

                <p>
                  <span>Size: {product.attributes.split("-")[1]}</span>
                  <span>Color: {product.attributes.split("-")[0]}</span>
                </p>

                <p>
                  <span>Quantity: {product.quantity}</span>
                </p>

                <Remove>Remove</Remove>
              </ProductDetails>
            </ProductCart>
          ))}

          <PlaceOrder>
            <button>Place Order</button>
          </PlaceOrder>
        </ProductSection>

        <BalanceSection>
          <p>PRICE DETAILS</p>
          <hr />

          <p>
            <span>
              Price ({productsList.length}{" "}
              {productsList.length > 1 ? "items" : "item"})
            </span>
            <span>
              &#8377;
              {productsList.reduce(
                (acc, cv) => (acc += convertPrice(cv.price)),
                0
              )}
            </span>
          </p>

          <p>
            <span>Delivery charges</span>
            <span>&#8377;00</span>
          </p>
          <hr />
          <p>
            <Amount>Total Amount</Amount>
            <span>
              &#8377;
              {productsList.reduce(
                (acc, cv) => (acc += convertPrice(cv.price)),
                0
              )}
            </span>
          </p>
          <hr />
        </BalanceSection>
      </CartWrapper>
    </>
  );
}

const Div = styled.div``;
const Section = styled.section``;
const CartWrapper = styled.div`
  padding: 20px 30px;
  display: flex;
  flex-direction: row;
  font-family: Roboto, Arial, sans-serif;
  margin-top: 3em;
`;

const ProductSection = styled.section`
  position: relative;
  padding-left: 20px;
  width: 60%;
  background-color: #fff;
  border-radius: 2px;
  border: 1px solid #e5e2e2;
`;

const ProductCart = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3em 0;

  &:first-of-type {
    margin: 20px 0;
  }

  &:nth-last-child(2) {
    margin-bottom: 5em;
  }
`;

const ProductImg = styled.img`
  border-radius: 3px;
`;

const ProductDetails = styled.div`
  width: 100%;
  margin: 0 20px;
  padding-left: 30px;

  p:first-child {
    margin: 3px 0 10px 0;
  }

  p:nth-child(2) {
    font-size: 16px;
    color: gray;
    span:first-child {
      margin-right: 2em;
    }
  }

  p:nth-child(3) {
    margin: 10px 0;
  }

  & > div {
    // border: 2px solid red;
    display: flex;
    font-size: 23px;
    justify-content: space-between;
    align-items: center;

    p:nth-child(2) {
      color: black;
      font-size: 23px;
    }
  }
`;
const Remove = styled.button`
  font-size: 20px;
  border: none;
  outline: none;
  padding: 5px 20px 5px 0;
  margin-top: 3em;
  background: none;

  &:hover {
    cursor: pointer;
    color: red;
    // text-decoration: underline;
  }
`;
const PlaceOrder = styled.div`
  width: 58.9%;
  background-color: #fff;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  left: 30px;
  text-align: right;
  box-shadow: 1px -1px 6px #c3c3c3;
  button {
    margin-right: 20px;
    border: none;
    outline: none;
    background: #db6400;
    padding: 15px 40px;
    font-size: 25px;
    border-radius: 3px;
    color: #fff;

    &:hover {
      cursor: pointer;
    }
  }
`;

const BalanceSection = styled.section`
  position: fixed;
  right: 9%;
  margin-left: 1em;
  width: 350px;
  background-color: #fff;
  padding: 20px;
  height: fit-content;
  border: 1px solid #e5e2e2;
  border-radius: 2px;

  p:first-of-type {
    color: grey;
    font-weight: bold;
    margin: 0;
  }

  p {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    margin: 30px 0;
  }
`;

const Amount = styled.span`
  font-weight: bold;
`;

export default ShoppingCart;
