import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CheckOutButton } from "../component/checkoutButton";

import { Context } from "../store/appContext";

export const Payment = () => {
  const { store, actions } = useContext(Context);
  console.log(store.cart);
  //adds the event listener on initial render and cleans it up when finished.
  useEffect(() => {}, []);

  return (
    <div className="contai bg-ligth">
      <h1>buy</h1>
      <div>
        <div className="d-flex mt-4">
          <div class="card me-3" style={{ width: "18rem" }}>
            <img
              src="https://uicookies.com/wp-content/uploads/2018/12/blog-website-templates.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Small Project</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <h6>price: $5,000</h6>
              <button
                onClick={() =>
                  actions.addToCart({
                    name: "Small Project",
                    price: 5000,
                  })
                }
                class="btn btn-primary"
              >
                add to cart
              </button>
            </div>
          </div>

          <div>
            <div class="card me-3" style={{ width: "18rem" }}>
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.G_2JsOxpad45g5FbwuIWBQHaDy&pid=Api&P=0"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Medium Project</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <h6>price: $10,000</h6>
                <button
                  onClick={() =>
                    actions.addToCart({
                      name: "Medium Project",
                      price: 10000,
                    })
                  }
                  class="btn btn-primary"
                >
                  add to cart
                </button>
              </div>
            </div>
          </div>

          <div>
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.I8oRzPjDLJEBlxtXOwd1DQHaEH&pid=Api&P=0"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Big Project</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <h6>price: $15,000</h6>
                <button
                  onClick={() =>
                    actions.addToCart({
                      name: "Big Project",
                      price: 15000,
                    })
                  }
                  class="btn btn-primary"
                >
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <CheckOutButton />
      </div>
    </div>
  );
};
