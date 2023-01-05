import React from "react";
import "./Description.scss";

const Description = () => {
  return (
    <div className="page__section">
      <div className="container">
        <h1 className="project-name">
            <span className="title__word title__word1">Eco-cosmetics</span>
            <span className="title__word title__word2">vs</span>
            <span className="title__word title__word3">Candles</span>
            <span className="title__word title__word4">shop</span>
        </h1>
        <p className="project-description">Project Description:</p>
        <ul>
          <li>Mobile-Friendliness</li>
          <li>Authentication (login, register pages)</li>
          <li>Add a few pages, router some of them make public some only after authorization</li>
          <li>Shopping basket with all functionality and productCard page with the possibility of adding a few same products to basket (quantity+-)</li>
          <li>Filtering / Sorting products</li>
          <li>Use Axios for http request</li>
          <li>Using 3rd party services</li>
          <li>Performance optimization (Lazy Loading and optimization of images, fonts)</li>
        </ul>
      </div>
    </div>
  );
};

export default Description;
