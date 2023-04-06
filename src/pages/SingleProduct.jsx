import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import PageBanner from "../components/PageBanner";
import TitleMain from "../components/TitleMain";
import RatingBlock from "../components/Rating";
import MyNavTab from "../components/MyNavTab";
import ProductCard from "../components/ProductCard";
import { Carousel } from "react-responsive-carousel";
import pImg from "../assets/images/peackock_product_img.png";
import pImg2 from "../assets/images/peackock_product_img.png";
import pImg3 from "../assets/images/peackock_product_img.png";
import pImg4 from "../assets/images/peackock_product_img.png";
import img from "../assets/images/Peacock_Earrings.png";
import img1 from "../assets/images/Pearls_Breslate_1.png";
import img2 from "../assets/images/Pearls_Breslate_2.png";
import img3 from "../assets/images/Pearls_Earring_1.png";
import img4 from "../assets/images/Pearls_Earring_2.png";
import img5 from "../assets/images/Pearls_Earring_3.png";
import img6 from "../assets/images/Pearls_Earring_4.png";

export default function SingleProduct() {
  const [num, setNum] = useState(0);

  const incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  const decNum = () => {
    if (num > 0) {
      setNum(Number(num - 1));
    }
  };
  const handleChange = (e) => {
    setNum(e.target.value);
  };
  const productImgs = [pImg, pImg2, pImg3, pImg4];
  const product = [
    {
      name: "peackock earings",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.",
      availibility: "In Stock",
      sku: "012",
      color: ["#C18F61", "#DCDCDC", "#6E441E"],
      tags: ["gold", "diamonds"],
      categories: ["earings", "chains", "neckless"],
      materials: ["Gold", "Stone", "Steel"],
      price: "$499",
      qty: 5,
      discPrice: "$599",
      totalPrice: "",
    },
  ];

  const products = [
    { imgSrc: img, title: "Pearls Breslate", discPrice: "$549", price: "$499" },
    { imgSrc: img1, title: "Pearls Breslate", discPrice: "$549", price: "$499" },
    { imgSrc: img2, title: "Golden Bracelet", discPrice: "$549", price: "$499" },
    { imgSrc: img3, title: "Pearls Earrings", discPrice: "$549", price: "$499" },
    { imgSrc: img4, title: "Pearls Earrings", discPrice: "$549", price: "$499" },
    { imgSrc: img5, title: "Pearls Earrings", discPrice: "$549", price: "$499" },
    { imgSrc: img6, title: "Pearls Earrings", discPrice: "$649", price: "$555" },
  ];

  const settings = {
    showArrows: false,
    infiniteLoop: true,
    showStatus: false,
    transitionTime: 500,
    showIndicators: false,
    swipeable: true,
    emulateTouch: true,
}


  return (
    <Wrapper>
      <div className="single-product-block-spp">
        <PageBanner pageTitle="Peacock Earrings" pageLink="singleProduct" />
        <div className="container">
          <div className="single-product-in-spp">
            <div className="left-img-block-spp">
              <Carousel {...settings} >
                {productImgs.map((imgSrc, i) => (
                  <div className="slider-img-spp" key={i}>
                    <img src={imgSrc} alt="product" />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="right-info-block-spp">
              <div className="product-info-in-spp">
                <div className="title">
                  <h3>{product[0].name}</h3>
                </div>
                <div className="rating">
                  <RatingBlock />
                </div>
                <div className="price">
                  <h4 className="card-price">
                    {product[0].price}
                    <span className="card-disc-price">{product[0].discPrice} </span>
                  </h4>
                </div>
                <div className="stocks">
                  <div className="avilability">
                    <h2>Availibility :</h2> <span>{product[0].availibility}</span>
                  </div>
                  <div className="sku">
                    <h2>SKU :</h2> <span> {product[0].sku}</span>
                  </div>
                </div>
                <div className="discription">
                  <p>{product[0].description}</p>
                </div>
                <div className="color">
                  <h3 className="mini-title">color</h3>
                  <ul>
                    {product[0].color.map((clr, i) => (
                      <li key={i}>
                        <button className="btn-main-hp" style={{ backgroundColor: `${clr}` }} value={clr}></button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="material">
                  <h3 className="mini-title">materials</h3>
                  <ul>
                    {product[0].materials.map((mat, i) => (
                      <li key={i}>
                        <button className="btn-main-hp dark-btn-hp">{mat}</button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="total-price">
                  <h3 className="mini-title">price :</h3>
                  <span>{product[0].price}</span>
                </div>
                <div className="add-to-cart">
                  <div className="count">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <button className="btn btn-outline-primary" type="button" onClick={decNum}>
                          -
                        </button>
                      </div>
                      <input type="number" className="form-control count-value" value={num} onChange={handleChange} />
                      <div className="input-group-prepend">
                        <button className="btn btn-outline-primary" type="button" onClick={incNum}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="add-to-cart-btn">
                    <button className="btn-main-hp dark-btn-hp cart-btn">add to cart</button>
                  </div>
                </div>
                <div className="categories">
                  <h3 className="mini-title">Categories :</h3>
                  <ul>
                    {product[0].categories.map((cat, i) => (
                      <li key={i}>{cat},</li>
                    ))}
                  </ul>
                </div>
                <div className="tags">
                  <h3 className="mini-title">tags :</h3>
                  <ul>
                    {product[0].tags.map((tag, i) => (
                      <li key={i}>{tag},</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="product-desc-block-spp">
            <MyNavTab />
          </div>
          <div className="related-product-block-spp">
            <TitleMain mainTitle="related product" />
            <div className="related-slider-spp">
              <Slider {...settings}>
                {products.map((slide, index) => {
                  return (
                    <div key={index}>
                      <ProductCard imgSrc={slide.imgSrc} title={slide.title} discPrice={slide.discPrice} price={slide.price} />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .single-product-block-spp {
    .single-product-in-spp {
      display: flex;
      gap: 70px;

      .left-img-block-spp {
        width: 45%;
        .carousel {
          .slider-wrapper {
            .slider {
              .slide {
                padding: 15px;
                .slider-img-spp {
                  height: 645px;
                  img {
                    height: 100%;
                  }
                }
              }
              .selected {
                .slider-img-spp {
                  box-shadow: 0 0 15px rgb(193, 143, 97, 0.15);
                  padding: 20px;
                }
              }
            }
          }
          .thumbs-wrapper {
            margin: 10px;
            .thumbs {
              text-align: center;
              .thumb {
                margin: 10px;
                box-shadow: 0 0 15px rgb(193, 143, 97, 0.15);
                width: 80px;
                height: 90px;
                img {
                  height: 80px;
                  object-fit: cover;
                }
                &:hover {
                  border: none;
                }
                &:focus {
                  border: none;
                  box-shadow: 0 0 15px rgb(193, 143, 97, 0.5);
                }
              }
              .selected {
                box-shadow: 0 0 15px rgb(193, 143, 97, 0.5);
                border: none;
              }
            }
          }
        }
      }
      .right-info-block-spp {
        width: 55%;
        padding-top: 15px;
        .product-info-in-spp {
          .title {
            padding-bottom: 5px;
            h3 {
              font-size: 30px;
              line-height: 46px;
              font-weight: 500;
              text-transform: capitalize;
              color: var(--text-color);
            }
          }
          .rating {
            padding-bottom: 5px;
          }
          .price {
            padding-bottom: 5px;
            border-bottom: 1px solid var(--golden-color);
            h4 {
              font-size: 25px;
              line-height: 34px;
              font-weight: 600;
              color: var(--text-color);
              span {
                font-weight: 400;
                color: var(--golden-color);
                padding-left: 10px;
                text-decoration: line-through;
              }
            }
          }
          .stocks {
            display: flex;
            align-items: center;
            gap: 40px;
            padding-block: 16px 6px;
            .avilability {
              display: flex;
              align-items: center;
              gap: 5px;
              h2 {
                font-size: 28px;
                line-height: 40px;
                color: var(--golden-color);
              }
              span {
                font-size: 28px;
                line-height: 40px;
                font-family: "Sorts Mill Goudy", sans-serif;
                color: var(--text-color);
              }
            }
            .sku {
              display: flex;
              align-items: center;
              gap: 5px;
              h2 {
                font-size: 28px;
                color: var(--golden-color);
              }
              span {
                font-size: 28px;
                font-family: "Sorts Mill Goudy", sans-serif;
                color: var(--text-color);
              }
            }
          }
          .discription {
            padding-bottom: 16px;
          }
          .color {
            padding-bottom: 16px;
            ul {
              display: flex;
              gap: 7px;
              padding-top: 10px;
              li {
                button {
                  width: 20px;
                  height: 20px;
                  font-size: 10px;
                }
              }
            }
          }
          .material {
            padding-bottom: 16px;
            ul {
              display: flex;
              gap: 20px;
              padding-top: 10px;
              li {
                button {
                  width: 102px;
                  font-size: 15px;
                  line-height: 36px;
                }
              }
            }
          }
          .total-price {
            display: flex;
            align-items: center;
            gap: 8px;
            span {
              font-size: 25px;
              font-weight: 600;
              color: var(--text-color);
              display: inline-block;
            }
          }
          .add-to-cart {
            display: flex;
            align-items: center;
            gap: 18px;
            padding-top: 16px;
            .count {
              .input-group {
                width: 124px;
                height: 44px;
                display: flex;
                align-items: center;
                border: 1px solid var(--text-color);
                border-radius: 50px;
                .input-group-prepend {
                  display: inline-block;
                  .btn {
                    font-size: 20px;
                    padding-block: 0px;
                    border: none;
                    color: var(--text-color);
                    :hover {
                      background-color: transparent;
                      border: none;
                    }
                  }
                }
                .count-value {
                  width: 50px;
                  display: inline-block;
                  flex: inherit;
                  border: none;
                  color: var(--text-color);
                  text-align: center;
                  font-size: 15px;
                  font-weight: 500;
                  padding: 0px;
                }
              }
            }
          }
          .add-to-cart-btn {
            .btn-main-hp {
              font-size: 14px;
              line-height: 44px;
              width: 124px;
            }
          }
          .categories {
            display: flex;
            align-items: center;
            gap: 5px;
            padding-top: 30px;
            ul {
              display: flex;
              gap: 5px;
              li {
                font-size: 18px;
                line-height: 26px;
                color: var(--text-color);
              }
            }
          }
          .tags {
            display: flex;
            align-items: center;
            gap: 5px;
            padding-top: 14px;
            ul {
              display: flex;
              gap: 5px;
              li {
                font-size: 18px;
                line-height: 26px;
                color: var(--text-color);
              }
            }
          }
        }
      }
    }
    .product-desc-block-spp {
      padding-block: 90px;
    }
    .related-product-block-spp {
      padding-bottom: 100px;
      h4 {
        padding: 0px;
      }
      h2 {
        text-align: center;
      }
      .related-slider-spp {
        .slick-list {
          padding-block: 20px;
        }
        .slick-slide {
          padding-inline: 10px;
        }
        .slick-arrow {
          display: none !important;
        }
        .slick-dots {
          display: none !important;
        }
      }
    }
  }
  .mini-title {
    font-size: 20px;
    line-height: 26px;
    color: var(--golden-color);
    font-weight: 600;
  }

  @media (min-width: 0px) and (max-width: 575px) {
    .single-product-block-spp {
      .related-product-block-spp {
        padding-bottom: 20px;
      }
      .single-product-in-spp {
        flex-wrap: wrap;
        gap: 10px;
        .left-img-block-spp {
          width: 100%;
          .carousel {
            .slider-wrapper {
              .slider {
                .slide {
                  .slider-img-spp {
                    height: 300px;
                    img {
                      object-fit: contain;
                    }
                  }
                }
              }
            }
            .thumbs-wrapper {
              margin-block: 0px;
              .thumbs {
                .thumb {
                  width: 60px !important;
                  margin-inline: 5px;
                  height: 70px;
                  img {
                    height: 60px;
                  }
                }
              }
            }
          }
        }
        .right-info-block-spp {
          width: 100%;
          .product-info-in-spp {
            .title {
              h3 {
                font-size: 24px;
                line-height: 32px;
              }
            }
            .price {
              h4 {
                font-size: 20px;
                line-height: 26px;
              }
            }
            .stocks {
              display: block;
              .avilability {
                h2 {
                  font-size: 22px;
                }
                span {
                  font-size: 22px;
                }
              }
              .sku {
                h2 {
                  font-size: 22px;
                }
                span {
                  font-size: 22px;
                }
              }
            }
            .color {
              padding-bottom: 10px;
            }
            .material {
              ul {
                gap: 8px;
                li {
                  button {
                    width: 80px;
                    font-size: 12px;
                    line-height: 32px;
                  }
                }
              }
            }
            .total-price {
              span {
                font-size: 22px;
              }
            }
            .add-to-cart {
              gap: 10px;
              .count {
                .input-group {
                  width: 110px;
                  height: 40px;
                  .count-value {
                    width: 45px;
                  }
                  .input-group-prepend {
                    .btn {
                      padding-inline: 10px;
                    }
                  }
                }
              }
              .btn-main-hp {
                font-size: 12px;
                line-height: 40px;
                width: 100px;
              }
            }
            .categories {
              padding-top: 20px;
              ul {
                flex-wrap: wrap;
                li {
                  font-size: 15px;
                  line-height: 22px;
                }
              }
            }
            .tags {
              padding-top: 5px;
              ul {
                flex-wrap: wrap;
                li {
                  font-size: 15px;
                  line-height: 22px;
                }
              }
            }
          }
        }
      }
      .product-desc-block-spp {
        padding-block: 40px;
      }
    }
    .mini-title {
      font-size: 15px;
      line-height: 22px;
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    .single-product-block-spp {
      .related-product-block-spp {
        padding-bottom: 20px;
      }
      .single-product-in-spp {
        flex-wrap: wrap;
        gap: 10px;
        .left-img-block-spp {
          width: 100%;
          .carousel {
            .slider-wrapper {
              .slider {
                .slide {
                  .slider-img-spp {
                    height: 300px;
                    width: 80%;
                    margin: 0 auto;
                    padding: 10px;
                    img {
                      object-fit: contain;
                    }
                  }
                }
              }
            }
            .thumbs-wrapper {
              margin-block: 0px;
              .thumbs {
                .thumb {
                  width: 60px !important;
                  margin-inline: 5px;
                  height: 70px;
                  img {
                    height: 60px;
                  }
                }
              }
            }
          }
        }
        .right-info-block-spp {
          width: 100%;
          .product-info-in-spp {
            .title {
              h3 {
                font-size: 24px;
                line-height: 32px;
              }
            }
            .price {
              h4 {
                font-size: 20px;
                line-height: 26px;
              }
            }
            .stocks {
              display: block;
              .avilability {
                h2 {
                  font-size: 22px;
                }
                span {
                  font-size: 22px;
                }
              }
              .sku {
                h2 {
                  font-size: 22px;
                }
                span {
                  font-size: 22px;
                }
              }
            }
            .color {
              padding-bottom: 10px;
            }
            .material {
              ul {
                gap: 8px;
                li {
                  button {
                    width: 80px;
                    font-size: 12px;
                    line-height: 32px;
                  }
                }
              }
            }
            .total-price {
              span {
                font-size: 22px;
              }
            }
            .add-to-cart {
              gap: 10px;
              .count {
                .input-group {
                  width: 110px;
                  height: 40px;
                  .count-value {
                    width: 45px;
                  }
                  .input-group-prepend {
                    .btn {
                      padding-inline: 10px;
                    }
                  }
                }
              }
              .btn-main-hp {
                font-size: 12px;
                line-height: 40px;
                width: 100px;
              }
            }
            .categories {
              padding-top: 20px;
              ul {
                flex-wrap: wrap;
                li {
                  font-size: 15px;
                  line-height: 22px;
                }
              }
            }
            .tags {
              padding-top: 5px;
              ul {
                flex-wrap: wrap;
                li {
                  font-size: 15px;
                  line-height: 22px;
                }
              }
            }
          }
        }
      }
      .product-desc-block-spp {
        padding-block: 40px;
      }
    }
    .mini-title {
      font-size: 15px;
      line-height: 22px;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .single-product-block-spp {
      .related-product-block-spp {
        padding-bottom: 20px;
      }
      .single-product-in-spp {
        flex-wrap: wrap;
        gap: 10px;
        .left-img-block-spp {
          width: 100%;
          .carousel {
            .slider-wrapper {
              .slider {
                .slide {
                  .slider-img-spp {
                    height: 360px;
                    width: 70%;
                    margin: 0 auto;
                    padding: 10px;
                    img {
                      object-fit: contain;
                    }
                  }
                }
              }
            }
            .thumbs-wrapper {
              .thumbs {
                .thumb {
                  margin-inline: 5px;
                  height: 75px;
                  width: 65px !important;
                  img {
                    height: 65px;
                  }
                }
              }
            }
          }
        }
        .right-info-block-spp {
          width: 100%;
          .product-info-in-spp {
          }
        }
      }
      .product-desc-block-spp {
        padding-block: 70px;
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    .single-product-block-spp {
      .single-product-in-spp {
        gap: 30px;
        .left-img-block-spp {
          .carousel {
            .slider-wrapper {
              .slider {
                .slide {
                  .slider-img-spp {
                    height: 540px;
                    img {
                      object-fit: contain;
                    }
                  }
                }
              }
            }
            .thumbs-wrapper {
              .thumbs {
                .thumb {
                  margin-inline: 5px;
                }
              }
            }
          }
        }
        .right-info-block-spp {
          .product-info-in-spp {
            .discription {
              padding-bottom: 10px;
              p {
                font-size: 16px;
                line-height: 24px;
              }
            }
            .color {
              padding-bottom: 10px;
            }
            .material {
              ul {
                gap: 10px;
              }
            }
            .categories {
              padding-top: 30px;
            }
          }
        }
      }
    }
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    .single-product-block-spp {
      .single-product-in-spp {
        gap: 30px;
        .carousel .thumbs-wrapper .thumbs .thumb {
          margin-inline: 6px !important;
        }
      }
      .product-desc-block-spp {
        padding-block: 50px 70px;
      }
      .related-product-block-spp {
        padding-bottom: 40px;
      }
    }
  }
`;
