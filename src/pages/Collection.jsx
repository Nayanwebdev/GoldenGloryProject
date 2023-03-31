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
import NewProduct from "../components/NewProduct";
import SideBar from "../components/SideBar";

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

  return (
    <Wrapper>
      <div className="collection-block-main-clp">
        <PageBanner pageTitle="collection" pageLink="collection" />
        <div className="container">
          <div className="collection-block-in-clp">
            <div className="left-block-clp">
              <div className="filter-block-clp">
                <SideBar />
              </div>
            </div>
            <div className="right-block-clp">
              <NewProduct />
              <div className="collections-clp">
                {products.map((product, index) => (
                  <ProductCard key={index} imgSrc={product.imgSrc} title={product.title} price={product.price} />
                ))}
              </div>
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
      .left-block-clp {
        width: 23%;
        padding-right: 30px;
        .filter-block-clp {
        }
      }
      .right-block-clp {
        width: 77%;
        padding-left: 30px;
        .collections-clp {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }
      }
    }
  }

  @media (min-width: 0px) and (max-width: 575px) {
    .collection-block-main-clp {
      .collection-block-in-clp {
        .left-block-clp {
          width: auto;
          position: absolute;
          background-color: var(--white-color);
          z-index: 999;
          padding-right: 0px;
          .filter-block-main-fltc {
            padding-inline: 20px;
            padding-top: 20px;
            padding-bottom: 30px;
            box-shadow: 5px 5px 5px rgba(193, 143, 97, 0.15);
          }
        }
        .right-block-clp {
          width: 100%;
          padding-left: 0px;
          .collections-clp {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    .collection-block-main-clp {
      .collection-block-in-clp {
        .left-block-clp {
          width: auto;
          position: absolute;
          background-color: var(--white-color);
          z-index: 999;
          padding-right: 0px;
          .filter-block-main-fltc {
            padding-inline: 20px;
            padding-top: 20px;
            padding-bottom: 30px;
            box-shadow: 5px 5px 5px rgba(193, 143, 97, 0.15);
          }
        }
        .right-block-clp {
          width: 100%;
          padding-left: 0px;
          .collections-clp {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .collection-block-main-clp {
      .collection-block-in-clp {
        .left-block-clp {
          width: 22%;
          padding-right: 20px;
          .filter-block-clp {
          }
        }
        .right-block-clp {
          width: 78%;
          padding-left: 20px;
          .collections-clp {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
  }
`;
