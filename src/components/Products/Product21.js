import React, { useState } from "react";
import "./Product21.css";
import playstoreBadge from "../../assets/images/google-play-badge.svg";
import appstoreBadge from "../../assets/images/appstore-badge.svg";

function Product21(props) {
  const [product] = useState(props.propsProduct);
  return (
    <div className="product21">
      <div className="large-left-box">
        <img
          src={`${product.productImageURL}`}
          className="product-image"
          alt=""
        />
      </div>
      <div className="small-right-box">
        <div>
          <h1 className="product-name">{product.productName}</h1>
          <p className="product-desc">{product.productDesc}</p>
          <span className="highlight-blue"> Learn more</span>
          <div>
            <img src={playstoreBadge} className="store-icon" alt="playstore" />
            <img src={appstoreBadge} className="store-icon" alt="playstore" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product21;