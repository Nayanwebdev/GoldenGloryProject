import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import TitleMain from "../components/TitleMain";
import ProductCard from "./ProductCard";
import img1 from "../assets/images/Pearls_Breslate_1.webp";
import img2 from "../assets/images/Pearls_Breslate_2.webp";
import img3 from "../assets/images/Pearls_Earring_1.webp";
import img4 from "../assets/images/Pearls_Earring_2.webp";
import img5 from "../assets/images/Pearls_Earring_3.webp";
import img6 from "../assets/images/Pearls_Earring_4.webp";
import img7 from "../assets/images/perarls_ring_2.webp";
import img8 from "../assets/images/Pearls_Earring_5.webp";
import img9 from "../assets/images/Pearls_Earring_6.webp";
import img10 from "../assets/images/Pearls_Earring_7.webp";

export default function FeaturedProduct() {
  const products = [
    { imgSrc: img1, title: "Pearls Breslate", price: "$ 123" },
    { imgSrc: img2, title: "Pearls Breslate", price: "$ 123" },
    { imgSrc: img3, title: "Pearls Earrings", price: "$ 123" },
    { imgSrc: img7, title: "Pearls Earrings", price: "$ 123" },
    { imgSrc: img8, title: "Pearls Earrings", price: "$ 123" },
    { imgSrc: img4, title: "Pearls Earrings", price: "$ 123" },
    { imgSrc: img5, title: "Pearls Earrings", price: "$ 123" },
    { imgSrc: img6, title: "Pearls Earrings", price: "$ 123" },
    { imgSrc: img9, title: "Pearls Earrings", price: "$ 123" },
    { imgSrc: img10, title: "Pearls Earrings", price: "$ 123" },
  ];
  const imagePerRow = products.length;
  const numberOfProductShown = 8;
  return (
    <Wrapper>
      <div className="container">
        <TitleMain mainTitle="Parisian Collection" subTitle="Feature Products" />
        <div className="products-container-hp">
          {products?.slice(0, numberOfProductShown)?.map((product, index) => (
            <ProductCard key={index} imgSrc={product.imgSrc} title={product.title} price={product.price} />
          ))}
        </div>
        <div className="explore-more-btn">
          <NavLink className="btn-main-hp dark-btn-hp" to="/collection" role="button" exact="true">
            collection
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  padding-bottom: 120px;
  .products-container-hp {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    padding-top: 25px;
    padding-bottom: 50px;
  }
  @media (min-width: 0px) and (max-width: 575px) {
    padding-bottom: 40px;
    .products-container-hp {
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
      padding-top: 15px;
      padding-bottom: 20px;
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    padding-bottom: 60px;
    .products-container-hp {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      padding-top: 15px;
      padding-bottom: 30px;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    padding-bottom: 80px;
    .products-container-hp {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      padding-top: 15px;
      padding-bottom: 30px;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    padding-bottom: 80px;
    .products-container-hp {
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      padding-top: 15px;
      padding-bottom: 40px;
    }
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    padding-bottom: 80px;
    .products-container-hp {
      gap: 12px;
      padding-bottom: 40px;
    }
  }
`;
