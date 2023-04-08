import React from "react";
import styled from "styled-components";
import RatingBlock from "./Rating";

export default function SpecialProductCard({ imgSrc, rating, title, price, discPrice }) {
  return (
    <Wrapper>
      <div className="special-product-card-spc">
        <div className="special-product-card-in-spc">
          <div className="product-img-spc">
            <img src={imgSrc} alt="productImg" loading="lazy"/>
          </div>
          <div className="product-content-spc">
            <h3>{title}</h3>
            <div className="rating-spc">
              <RatingBlock />
            </div>
            <h4 className="price-spc">
              {price}
              <span className="disc-price-spc"> {discPrice} </span>
            </h4>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .special-product-card-spc {
    .special-product-card-in-spc {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 30px;
      .product-img-spc {
        width: 96px;
        height: 96px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgb(248, 248, 248);
        img {
          object-fit: cover;
        }
      }
      .product-content-spc {
        h3 {
          font-size: 16px;
          line-height: 22px;
          font-weight: 500;
          padding-bottom: 5px;
          color: var(--text-color);
        }
        .rating-spc {
          padding-bottom: 5px;
        }
        h4 {
          font-size: 16px;
          line-height: 22px;
          font-weight: 500;
          color: var(--text-color);
          .disc-price-spc {
            display: inline-block;
            padding-left: 8px;
            color: var(--golden-color);
            text-decoration: line-through;
          }
        }
      }
    }
  }
`;
