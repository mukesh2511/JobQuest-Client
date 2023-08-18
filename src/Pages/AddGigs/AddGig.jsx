import React, { useReducer, useState } from "react";
import "./AddGig.scss";
import { INITIAL_STATE, gigReducer } from "../../reducers/GigReducers.js";
import upload from "../../utils/Upload";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import NewRequest from "../../utils/NewRequest";

const AddGig = () => {
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [upLoading, setUpLoading] = useState(false);
  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };

  const handleUpload = async () => {
    setUpLoading(true);
    try {
      const cover = await upload(singleFile);
      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      setUpLoading(false);
      dispatch({ type: "ADD_IMAGES", payload: { cover, images } });
    } catch (error) {
      console.log(error);
    }
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (state) => {
      return NewRequest.post("/gigs", state);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate(state);
  };

  return (
    <div className="addgig">
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Title</label>
            <input
              name="title"
              type="text"
              placeholder="e.g. I will do something I'm really good at"
              onChange={handleChange}
            />
            <label htmlFor="">Category</label>
            <select name="cat" id="cat" onChange={handleChange}>
              <option value="design">Design</option>
              <option value="web">Web Developement</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
              <option value="design">Design</option>
            </select>
            <div className="images">
              <div className="imagesInputs">
                <label htmlFor="">Cover Images</label>
                <input
                  type="file"
                  onChange={(e) => setSingleFile(e.target.files[0])}
                />
                <label htmlFor="">Upload Images</label>
                <input
                  type="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />
              </div>
              <button onClick={handleUpload}>
                {upLoading ? "uploading" : "Upload"}
              </button>
            </div>
            <label htmlFor="">Description</label>
            <textarea
              name="desc"
              id=""
              cols="30"
              rows="16"
              placeholder="Brief description to introduce your service to customers"
              onChange={handleChange}
            ></textarea>
            <button onClick={(e) => handleSubmit(e)}>Create</button>
          </div>
          <div className="right">
            <label htmlFor="">Service Title</label>
            <input
              type="text"
              name="shortTitle"
              placeholder="e.g. One page web design"
              onChange={handleChange}
            />
            <label htmlFor="">Short Description</label>
            <textarea
              name="shortDesc"
              id=""
              cols="30"
              rows="10"
              placeholder="short description of your service"
              onChange={handleChange}
            ></textarea>
            <label htmlFor="">Delivery Time(e.g. 3 days)</label>
            <input
              name="deliveryTime"
              type="number"
              min={1}
              onChange={handleChange}
            />
            <label htmlFor="">Revision Number</label>
            <input
              name="revisionNumber"
              type="number"
              min={1}
              onChange={handleChange}
            />
            <label htmlFor="">Add Features</label>
            <form className="add" onSubmit={handleFeature}>
              <input type="text" placeholder="e.g. setting up a domain" />
              <button type="submit">Add</button>
            </form>
            <div className="addedFeatures">
              {state?.features?.map((f) => (
                <div className="item" key={f}>
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_FEATURE", payload: f })
                    }
                  >
                    {f} <span>X</span>
                  </button>
                </div>
              ))}
            </div>
            <label htmlFor="">Price</label>
            <input type="number" name="price" min={1} onChange={handleChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGig;
