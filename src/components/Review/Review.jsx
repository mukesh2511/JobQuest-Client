import React from "react";
import "./Review.scss";
import { useQuery } from "@tanstack/react-query";
import NewRequest from "../../utils/NewRequest";

const Review = ({ review }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [review.userId],
    queryFn: () =>
      NewRequest.get(`/users/${review.userId}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <>
      <div className="review">
        <div className="item">
          {isLoading ? (
            "loading.."
          ) : error ? (
            "Something went wrong"
          ) : (
            <div className="user">
              <img
                className="pp"
                src={data.img || "/img/noavatar.jpg"}
                alt=""
              />
              <div className="info">
                <span>{data.username}</span>
                <div className="country">
                  <span>{data.country}</span>
                </div>
              </div>
            </div>
          )}
          <div className="stars">
            {Array(review.star)
              .fill()
              .map((item, i) => (
                <img src="/img/star.png" alt="" key={i} />
              ))}
            <span>{review.star}</span>
          </div>
          <p>{review.desc}</p>
          <div className="helpfull">
            <span>Helpfull?</span>
            <img src="/img/like.png" alt="" className="pp" />
            <span>Yes</span>
            <img src="/img/dislike.png" alt="" className="pp" />
            <span>No</span>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Review;
