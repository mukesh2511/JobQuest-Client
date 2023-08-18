import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NewRequest from "../../utils/NewRequest";
import "./success.scss";

const Success = () => {
  const navigate = useNavigate();
  const payment_intent = JSON.parse(localStorage.getItem("clientSecret")).slice(
    0,
    27
  );

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await NewRequest.put("/orders", { payment_intent });

        setTimeout(() => {
          navigate("/orders");
        }, 5000);
      } catch (error) {
        console.log(error);
      }
    };
    makeRequest();
  }, []);
  console.log(payment_intent);

  return (
    <>
      <div className="success">
        Payment successfull. You are been redirected to the orders page. Please
        do not close the page ...
      </div>
    </>
  );
};

export default Success;
