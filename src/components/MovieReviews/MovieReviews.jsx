import clsx from "clsx";

import { movieReviews } from "../../api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import css from "./MovieReviews.module.css";

const Reviews = () => {
  const [review, setReview] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const result = async () => {
      try {
        const reviewArr = await movieReviews(movieId);
        setReview(reviewArr);
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, [movieId]);

  return (
    <ul className={clsx(css.movie_reviews_list)}>
      {review.length ? (
        review.map((review) => (
          <li className={clsx(css.movie_reviews_item)} key={review.id}>
            <h3 className={clsx(css.movie_reviews_title)}>
              Author: {review.author}
            </h3>{" "}
            <p className={clsx(css.movie_reviews_p)}>{review.content}</p>
          </li>
        ))
      ) : (
        <p>Unfortunately, no one has written a review for this movie. </p>
      )}
    </ul>
  );
};

export default Reviews;
