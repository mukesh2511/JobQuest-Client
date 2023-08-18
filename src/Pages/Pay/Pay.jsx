import React, { useEffect, useState } from "react";
import "./Pay.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from "../../utils/NewRequest.js";
import { useParams } from "react-router-dom";
import CheckOutForm from "../../components/checkOutForm/CheckOutForm.jsx";

const stripePromise = loadStripe(
  "pk_test_51NaqUASHzR1OmRlccYhcK0Bwe8J3TAbQV2hUBtaJ3QiANWLL4DpkDHciIBVizldx6NQgijf5Lg2TpggpuiPLcni100ytyB2BKH"
);

const Pay = () => {
  const [clientSecret, setClientSecret] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await newRequest.post(
          `/orders/create-payment-intent/${id}`
        );
        setClientSecret(res.data.clientSecret);
        localStorage.setItem(
          "clientSecret",
          JSON.stringify(res.data.clientSecret)
        );
      } catch (error) {
        console.log(error);
      }
    };
    makeRequest();
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="pay">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      )}
    </div>
  );
};

export default Pay;
