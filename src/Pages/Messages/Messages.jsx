import React from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import NewRequest from "../../utils/NewRequest.js";
const Messages = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ["conversation"],
    queryFn: () =>
      NewRequest.get(`/conversations`).then((res) => {
        return res.data;
      }),
  });
  console.log(data);

  const mutation = useMutation({
    mutationFn: (id) => {
      return NewRequest.put(`/conversations/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["conversation"]);
    },
  });

  const handleRead = (id) => {
    mutation.mutate(id);
  };

  return (
    <>
      <div className="messages">
        {isLoading ? (
          "loading..."
        ) : error ? (
          "Something went wrong"
        ) : (
          <div className="container">
            <div className="title">
              <h1>Orders</h1>
            </div>
            <table border={1}>
              <thead>
                <tr>
                  <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
                  <th>Last Message</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>

              {data.map((c) => (
                <tbody key={c.id}>
                  <tr
                    className={
                      (currentUser.isSeller && !c.readBySeller) ||
                      (!currentUser.isSeller && !c.readByBuyer)
                        ? "active"
                        : ""
                    }
                  >
                    <td>{currentUser.isSeller ? c.buyerId : c.sellerId}</td>
                    <td>
                      {" "}
                      <Link to={`/message/${c.id}`} className="link">
                        {" "}
                        {c?.lastMessage?.substring(0, 100)}...
                      </Link>
                    </td>
                    <td>{moment(c.updatedAt).fromNow()}</td>
                    <td>
                      {((currentUser.isSeller && !c.readBySeller) ||
                        (!currentUser.isSeller && !c.readByBuyer)) && (
                        <button onClick={() => handleRead(c.id)}>
                          Mark as Read
                        </button>
                      )}
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Messages;
