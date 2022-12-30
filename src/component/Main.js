import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART } from "../redux/constant";
import { addToCart, emptyCart, removeFromCart } from "../redux/action";

import React from "react";
import { getProducts } from "../redux/productAction";

function Main() {
  const dispatch = useDispatch();
  const res = useSelector((state) => state.productData);
  console.warn(res);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  // const prod = {
  //   id: "1",
  //   name: "I phone",
  //   type: "mobile",
  //   price: 100000,
  //   color: "red",
  // };

  return (
    <div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>

      <div className="product-section">
        {res.map((item) => {
          return (
            <div key={item.id} className="card">
              <img src={item.image} />
              <div> {item.name} </div>
              <div> {item.category} </div>
              <div> {item.price} </div>

              <div>
                <button onClick={() => dispatch(addToCart(item))}>
                  Add To Cart
                </button>
              </div>

              <div>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove from Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
