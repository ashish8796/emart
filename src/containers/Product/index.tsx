import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { getProductById, getReviewsByProductId } from "../../services/api";
import { Product } from "../../store/reducers/category.reducer";

interface Reviews {
  name: string;
  review: string;
  rating: number;
  created_on: string;
}

function ProductUI() {
  const location = useLocation();
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
  const productId = location.pathname.split("/").pop();
  const [mainImage, setMainImage] = useState("");
  useEffect(() => {
    (async (productId) => {
      try {
        const data = await getProductById(productId);
        const reviews = await getReviewsByProductId(productId);

        console.log(reviews);
        if (data.thumbnail) {
          setMainImage(data.thumbnail);
          setProductData(data);
          setReviews(reviews);
        }
      } catch (error) {}
    })(productId);
  }, []);

  const productDiscountedPrice = Math.ceil(
    Number(productData.discounted_price) * 75
  );
  const productPrice = Math.ceil(Number(productData.price) * 75);
  const off = productPrice - productDiscountedPrice;
  const averageRating =
    reviews.length > 0 &&
    reviews.reduce((acc, user) => (acc += user.rating), 0) / reviews.length;
  // console.log(reviews);
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
              <Name>{productData.name}</Name>
              <RatingContainer>
                <Rating>
                  {averageRating && averageRating.toFixed(1)}&#9733;
                </Rating>
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
              <ProductDescription>
                <p>{productData.description}</p>
              </ProductDescription>
            </SectionB>
          </>
        )}
      </ProductContainer>
    </>
  );
}

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const ProductContainer = styled(Flex)`
  justify-content: flex-start;
  align-items: flex-start;
  font-family: Roboto, Arial, sans-serif;
`;
const SectionA = styled.section`
  padding: 30px;
  border: 2px solid;
`;

const AllImages = styled.article`
  display: flex;
  flex-direction: row;
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
    border: none;
    cursor: auto;
  } ;
`;
const PrimaryImage = styled(Flex)`
  width: 200px;
  padding: 20px 0;
  // border: 2px solid red;
`;
const SectionB = styled.section`
  padding: 30px;
  border: 2px solid red;
`;

const Name = styled.p`
  font-size: 25px;
`;

const RatingContainer = styled.div``;
const Rating = styled.button``;

const Save = styled.div`
  color: green;
  margin: 10px 0;
`;
const Price = styled.div`
  font-size: 20px;

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
const ProductDescription = styled.div``;

export default ProductUI;
