import React from "react";
import styled from "styled-components";
import img1 from "../assets/images/Pearls_Breslate_1.png";
import img2 from "../assets/images/Pearls_Breslate_2.png";
import img3 from "../assets/images/Pearls_Earring_1.png";
import img4 from "../assets/images/Pearls_Earring_2.png";
import img5 from "../assets/images/Pearls_Earring_3.png";
import img6 from "../assets/images/Pearls_Earring_4.png";
import img7 from "../assets/images/perarls_ring_2.png";
import img8 from "../assets/images/Pearls_Earring_5.png";
import img9 from "../assets/images/Pearls_Earring_6.png";
import img10 from "../assets/images/Pearls_Earring_7.png";
import ProductCard from "../components/ProductCard";
import PageBanner from "../components/PageBanner";

export default function Collection() {
  const products = [
    { imgSrc: img1, title: "Pearls Breslate", price: "$123" },
    { imgSrc: img2, title: "Pearls Breslate", price: "$123" },
    { imgSrc: img3, title: "Pearls Earrings", price: "$123" },
    { imgSrc: img7, title: "Pearls Earrings", price: "$123" },
    { imgSrc: img8, title: "Pearls Earrings", price: "$123" },
    { imgSrc: img4, title: "Pearls Earrings", price: "$123" },
    { imgSrc: img5, title: "Pearls Earrings", price: "$123" },
    { imgSrc: img6, title: "Pearls Earrings", price: "$123" },
    { imgSrc: img9, title: "Pearls Earrings", price: "$123" },
    { imgSrc: img10, title: "Pearls Earrings", price: "$123" },
  ];

  const bradcrumb = [
    { title: "home", href: "/" },
    { title: "collection", href: "/collection" },
  ];

  return (
    <Wrapper>
      <div className="collection-block-main-clp">
        <PageBanner pageTitle="Collection" />
        <div className="container">
          <div className="collection-block-in-clp">
            <div className="filter-block-clp"></div>
            <div className="collections-clp">
              {products.map((product, index) => (
                <ProductCard key={index} imgSrc={product.imgSrc} title={product.title} price={product.price} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .collection-block-main-clp {
    .collection-block-in-clp {
      display: flex;
      .filter-block-clp {
        width: 23%;
        background-color: antiquewhite;
        padding: 30px;
      }
      .collections-clp {
        width: 77%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
        padding: 0px 0px 0px 30px;
      }
    }
  }

  @media (min-width: 0px) and (max-width: 575px) {
    .collection-block-main-clp {
      .collection-block-in-clp {
        .filter-block-clp {
          width: 22%;
        }
        .collections-clp {
          width: 78%;
          grid-template-columns: repeat(1, 1fr);
          padding: 0px 0px 0px 15px;
        }
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    .collection-block-main-clp {
      .collection-block-in-clp {
        .filter-block-clp {
          width: 24%;
        }
        .collections-clp {
          width: 76%;
          grid-template-columns: repeat(1, 1fr);
          padding: 0px 0px 0px 15px;
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .collection-block-main-clp {
      .collection-block-in-clp {
        .filter-block-clp {
          width: 22%;
        }
        .collections-clp {
          width: 78%;
          grid-template-columns: repeat(2, 1fr);
          padding: 0px 0px 0px 20px;
        }
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
  }
`;
