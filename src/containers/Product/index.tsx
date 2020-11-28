import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  getAttributesByProductId,
  getProductById,
  getReviewsByProductId,
} from "../../services/api";

import {
  addProductInShoppingCart,
  setShoppingCartId,
} from "../../store/actions/shoppingCart.action";

import { State } from "../../store/actions/tsTypes";
import { Product } from "../../store/reducers/category.reducer";

interface Reviews {
  name: string;
  review: string;
  rating: number;
  created_on: string;
}

interface Attribute {
  attribute_name: string;
  attribute_value_id: number;
  attribute_value: string;
}

function ProductUI() {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  const { cartId, customer, productsList } = useSelector((state: State) => ({
    ...state.cart,
    ...state.user,
  }));

  const [productData, setProductData] = useState<Product>({
    product_id: 0,
    name: "",
    description: "",
    discounted_price: "",
    price: "",
    thumbnail: "",
    image: "",
    image_2: "",
  });

  const [reviews, setReviews] = useState<Array<Reviews>>([]);
  const [allAttributes, setAllArributes] = useState<Array<Attribute>>([]);
  const [attribute, setAttribute] = useState({ color: "", size: "" });
  const productId = location.pathname.split("/").pop();
  const [mainImage, setMainImage] = useState("");

  const convertPrice = (price: string) => {
    return Math.ceil(Number(price) * 75);
  };

  const productDiscountedPrice = convertPrice(productData.discounted_price);
  const productPrice = convertPrice(productData.price);
  const off = productPrice - productDiscountedPrice;

  const averageRating =
    reviews.length > 0 &&
    reviews.reduce((acc, user) => (acc += user.rating), 0) / reviews.length;

  useEffect(() => {
    (async (productId) => {
      try {
        const data = await getProductById(productId);
        const reviews = await getReviewsByProductId(productId);
        const attributes = await getAttributesByProductId(productId);

        if (data.thumbnail) {
          setMainImage(data.thumbnail);
          setProductData(data);
          setReviews(reviews);
          setAllArributes(attributes);
        }
      } catch (error) {
        console.log(error);
      }
    })(productId);
  }, []);

  async function handleAddToCart() {
    let shoppingCartId: any;

    if (attribute.size && attribute.color) {
      if (!cartId) {
        shoppingCartId = await dispatch(setShoppingCartId());
      }

      dispatch(
        addProductInShoppingCart({
          cartId: !cartId ? shoppingCartId : cartId,
          productId,
          attribute: attribute.color + "-" + attribute.size,
        })
      );

      history.push("/shoppingCart");
    } else {
      alert("Select Color and Size.");
    }
  }

  function handleBuyNowClick() {
    console.log(customer);
    if (!("emart-token" in localStorage)) {
      history.push("/login");
    } else {
      history.push("/user");
    }
  }

  return (
    <>
      <ProductContainer>
        {productData.name && (
          <>
            <SectionA>
              <AllImages>
                <MoreImages>
                  <ProductImage
                    src={
                      require(`./../../assets/images/product_images/${productData.image}`)
                        .default
                    }
                    onMouseOver={() => {
                      setMainImage(productData.image);
                    }}
                  />

                  <ProductImage
                    src={
                      require(`./../../assets/images/product_images/${productData.image_2}`)
                        .default
                    }
                    onMouseOver={() => {
                      setMainImage(productData.image_2);
                    }}
                  />
                </MoreImages>

                <PrimaryImage>
                  <PrimeImage
                    src={
                      require(`./../../assets/images/product_images/${mainImage}`)
                        .default
                    }
                  />
                </PrimaryImage>
              </AllImages>
            </SectionA>

            <SectionB>
              <div>
                <Name>{productData.name}</Name>

                <RatingContainer>
                  <Rating>
                    {averageRating && averageRating.toFixed(1)}&#9733;{" "}
                  </Rating>
                  <span>{reviews.length} Ratings</span>
                </RatingContainer>

                <Save>
                  <p>
                    Extra <span>&#8377;</span> <span>{off}</span> off
                  </p>
                </Save>

                <Price>
                  <span>&#8377;{productDiscountedPrice}</span>
                  <span>&#8377;{productPrice}</span>{" "}
                  <span>{Math.ceil((off * 100) / productPrice)}% off</span>
                </Price>

                <AttributeWrapper>
                  <Colors>
                    <h1>Colors</h1>
                    {allAttributes.map(
                      (cv, i) =>
                        cv.attribute_name == "Color" && (
                          <ColorTag
                            selectColor={cv.attribute_value == attribute.color}
                            key={i}
                            onClick={() => {
                              setAttribute((state) => ({
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
                    {allAttributes.map(
                      (cv, i) =>
                        cv.attribute_name == "Size" && (
                          <SizeTag
                            mark={cv.attribute_value === attribute.size}
                            key={i}
                            onClick={() => {
                              setAttribute((state) => ({
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

                <Option>
                  <AddToCart onClick={handleAddToCart}>
                    <span>{<FontAwesomeIcon icon={faShoppingCart} />}</span>
                    ADD TO CART
                  </AddToCart>
                  <BuyNow onClick={handleBuyNowClick}>BUY NOW</BuyNow>
                </Option>

                <ProductDescription>
                  <h1>Product Descirption</h1>
                  <p>{productData.description}</p>
                </ProductDescription>
              </div>
            </SectionB>
          </>
        )}
      </ProductContainer>
    </>
  );
}

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ProductContainer = styled(Flex)`
  justify-content: flex-start;
  align-items: flex-start;
  font-family: Roboto, Arial, sans-serif;
  padding: 0 20px;
`;
const SectionA = styled.section`
  padding: 30px;
  // border: 2px solid;
  width: 60%;
`;

const AllImages = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MoreImages = styled(Flex)`
  flex-direction: column;
  margin-right: 20px;
`;

const Img = styled.img`
  border-radius: 3px;
  border: 2px solid #fff;
  &:hover {
    cursor: pointer;
    border: 2px solid blue;
  }
`;
const ProductImage = styled(Img)`
  width: 100px;
  height: 100px;
  margin: 20px 0;
`;

const PrimeImage = styled(Img)`
  width: 150px;
  height: 200px;

  &: hover {
    border: 2px solid #fff;
    cursor: auto;
  } ;
`;
const PrimaryImage = styled(Flex)`
  width: 80%;
  margin-top: 20px;
  justify-content: flex-start;
`;
const SectionB = styled.section`
  & > div {
    // border: 2px solid green;
    padding-left: 25rem;
  }
`;

const Name = styled.p`
  font-size: 30px;
  margin-bottom: 8px;
`;

const RatingContainer = styled.div`
  span {
    color: grey;
    font-weight: bold;
    margin-left: 10px;
    font-size: 14px;
  }
`;

const Rating = styled.button`
  color: #fff;
  background: green;
  border: none;
  outline: none;
  border-radius: 3px;
  margin: 5px 0;

  &:hover {
    cursor: pointer;
  }
`;

const Save = styled.div`
  color: green;
  margin-top: 30px;
`;
const Price = styled.div`
  font-size: 20px;
  margin-top: 8px;
  margin-bottom: 30px;

  span:first-child {
    font-size: 30px;
    font-weight: bold;
  }

  span:nth-child(2) {
    text-decoration: line-through;
    color: grey;
    margin: 0 10px;
  }

  span:nth-child(3) {
    color: green;
  }
`;
const Offers = styled.div``;

const AttributeWrapper = styled.div`
  padding: 5px;
  h1 {
    margin-top: 13px;
    margin-right: 3em;

    color: grey;
    font-weight: bold;
  }
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

const Colors = styled(AttributeWrapper)`
  display: flex;
  flex-direction: row;
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

const Option = styled.div`
  padding: 20px 0;
  margin-top: 20px;
`;

const Button = styled.button`
  border: none;
  outline: none;
  padding: 20px;
  font-size: 20px;
  color: #fff;
  border-radius: 4px;
  width: 289px;
  span {
    margin-right: 10px;
  }
  &:hover {
    cursor: pointer;
  }
`;
const AddToCart = styled(Button)`
  margin-right: 20px;
  background: #e94560;
`;
const BuyNow = styled(Button)`
  background: #00b7c2;
  // width: 180px;
`;

const ProductDescription = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
  h1 {
    font-weight: bold;
    color: grey;
    margin: 5px 0;
  }
  p {
    width: 50%;
    line-height: 20px;
  }
`;

export default ProductUI;
