import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getReviewsByProductId } from "../../services/api";
import NetworkError from "../Home/NetworkError";

interface Reviews {
  result: [
    { name: string; review: string; rating: number; created_on: string }
  ];
  status: number | string;
}

interface RattingProps {
  productId: any;
}

function Ratting({ productId }: RattingProps) {
  const [reviews, setReviews] = useState<Reviews>({
    result: [{ name: "", review: "", rating: 0, created_on: "" }],
    status: "",
  });

  const averageRating =
    reviews.status === 200 &&
    reviews.result.reduce((acc, user) => (acc += user.rating), 0) /
      reviews.result.length;

  useEffect(() => {
    (async (productId) => {
      const reviews: any = await getReviewsByProductId(productId);

      setReviews({ result: reviews.result, status: reviews.status });
    })(productId);
  }, [productId]);

  return (
    <>
      {reviews.status === 200 && (
        <RatingContainer>
          <Rating>{averageRating && averageRating.toFixed(1)}&#9733; </Rating>
          <span>{reviews.result.length} Ratings</span>
        </RatingContainer>
      )}
      {reviews.status === "Failed to fetch" && <NetworkError />}
    </>
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
