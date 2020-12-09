import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getReviewsByProductId } from "../../services/api";

interface Reviews {
  name: string;
  review: string;
  rating: number;
  created_on: string;
}

interface RattingProps {
  productId: any;
}

function Ratting({ productId }: RattingProps) {
  const [reviews, setReviews] = useState<Array<Reviews>>([]);

  const averageRating =
    reviews.length > 0 &&
    reviews.reduce((acc, user) => (acc += user.rating), 0) / reviews.length;

  useEffect(() => {
    (async (productId) => {
      try {
        const reviews = await getReviewsByProductId(productId);

        setReviews(reviews);
      } catch (error) {
        console.log(error);
      }
    })(productId);
  }, []);

  return (
    <RatingContainer>
      <Rating>{averageRating && averageRating.toFixed(1)}&#9733; </Rating>
      <span>{reviews.length} Ratings</span>
    </RatingContainer>
  );
}

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

export default Ratting;
