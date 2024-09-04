import React from "react";
import Comments from "./Comments";

function DishDetail({ dish }) {
  return (
    
    <div className="card mb-3 my-5">
      <img src={dish.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{dish.name}</h5>
        <p className="card-text">{dish.description}</p>
        <p className="card-text">
          <small className="text-muted"> Price: {dish.price}</small>
        </p>
        <hr />
        <p class="font-weight-bold">Customers reviews</p>

        <Comments comments={dish.comments}></Comments>
      </div>
    </div>
  );
}

export default DishDetail;
