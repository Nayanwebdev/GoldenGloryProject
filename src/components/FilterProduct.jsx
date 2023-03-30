import React from "react";
import styled from "styled-components";
import Button from "./Button";
import SpecialProductCard from "./SpecialProductCard";
import spImg1 from "../assets/images/bangels_sp.png";
import spImg2 from "../assets/images/Pearls_Breslate_sp.png";
import spImg3 from "../assets/images/Peacock_Earrings_sp.png";
import collectionImg from "../assets/images/collection_img.png";

export default function FilterProduct() {
  const categories = ["diamonds", "gold", "earrings", "chains", "nacklace"];
  const colors = ["black", "blue", "red"];
  const priseRanges = ["$150 - $350", "$50 - $149"];
  const sizes = ["large", "medium", "small"];
  const specials = [
    { imgSrc: spImg1, rating: 4, title: "Blue Pearls Bangles", price: "$499", discPrice: "$549" },
    { imgSrc: spImg2, rating: 4, title: "Pearls Breslate", price: "$499", discPrice: "$549" },
    { imgSrc: spImg3, rating: 3, title: "Peacock Earrings", price: "$499", discPrice: "$549" },
  ];

  return (
    <Wrapper>
      <div className="filter-block-main-fltc">
        <div className="filter-block-in-fltc">
          <div className="categories-fltc">
            <div className="title-fltc">
              <h3>categories</h3>
            </div>
            <div className="category-list-fltc">
              <ul>
                {categories.map((category, i) => (
                  <li key={i}>
                    {category} <span>+</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="filter-search-fltc">
            <div className="title-fltc">
              <h3>Filter Search</h3>
            </div>
            <div className="special-product-fltc">
              <h2>color</h2>
              <ul>
                {colors.map((color, i) => (
                  <li key={i}>
                    <label className="checkbox">
                      <input type="checkbox" name={color} />
                      <span className="checkmark"></span>
                      {color}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className="special-product-fltc">
              <h2>price</h2>
              <ul>
                {priseRanges.map((price, i) => (
                  <li key={i}>
                    <label className="checkbox">
                      <input type="checkbox" name={price} />
                      <span className="checkmark"></span>
                      {price}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className="special-product-fltc">
              <h2>size</h2>
              <ul>
                {sizes.map((size, i) => (
                  <li key={i}>
                    <label className="checkbox">
                      <input type="checkbox" name={size} />
                      <span className="checkmark"></span>
                      {size}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <Button btn_text="Filter Search" class_name="btn-main-hp dark-btn-hp" />
          </div>
          <div className="categories-fltc">
            <div className="title-fltc">
              <h3>Special</h3>
            </div>
            <div className="category-list-fltc">
              <div className="special-product-fltc">
                {specials.map((item, i) => (
                  <SpecialProductCard key={i} imgSrc={item.imgSrc} rating={item.rating} title={item.title} price={item.price} discPrice={item.discPrice} />
                ))}
              </div>
            </div>
          </div>
          <div className="display-collection-fltc">
            <div className="collection-img-fltc">
              <img src={collectionImg} alt="special-collection" />
            </div>
            <div className="collection-content-fltc">
              <h3>Women's Collection</h3>
              <Button btn_text="buy now" class_name="btn-main-hp dark-btn-hp" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .filter-block-main-fltc {
    .filter-block-in-fltc {
      .categories-fltc {
        padding-bottom: 30px;
        .category-list-fltc {
          ul {
            li {
              font-size: 14px;
              padding-bottom: 20px;
              color: var(--text-color);
              display: flex;
              align-items: center;
              justify-content: space-between;
              &:last-child {
                padding-bottom: 0px;
              }
              span {
                height: 15px;
                width: 15px;
                line-height: 100%;
                font-size: 20px;
                color: var(--text-color);
              }
            }
          }
        }
      }
      .filter-search-fltc {
        padding-bottom: 30px;
      }
      .display-collection-fltc {
        position: relative;
        .collection-img-fltc {
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }
        .collection-content-fltc {
          position: absolute;
          width: 100%;
          bottom: 15px;
          z-index: 1;
          text-align: center;
          h3 {
            font-size: 20px;
            line-height: 50px;
            background-color: rgb(110, 68, 30, 0.6);
            color: var(--white-color);
            margin-bottom: 10px;
          }
          .btn-main-hp {
            font-size: 12px;
            width: 100px;
            line-height: 35px;
            margin: 0px;
            :hover {
              color: var(--text-color);
            }
          }
        }
      }
    }
  }
  .title-fltc {
    padding-bottom: 20px;
    h3 {
      font-size: 16px;
      line-height: 50px;
      color: var(--text-color);
      border: 1px solid var(--text-color);
      border-radius: 60px;
      padding-left: 30px;
    }
  }
  .special-product-fltc {
    margin-bottom: 40px;
    h2 {
      font-size: 18px;
      line-height: 26px;
      padding-bottom: 16px;
      color: var(--text-color);
    }
    ul {
      li {
        margin-bottom: 12px;
        &:last-child {
          margin-bottom: 0px;
        }
        label {
          font-size: 14px;
          line-height: 17px;
          text-transform: capitalize;
          display: block;
          position: relative;
          padding-left: 25px;
          color: var(--text-color);
          cursor: pointer;
          input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            &:checked ~ .checkmark {
              background-color: var(--text-color);
              border-color: var(--text-color);
              &:after {
                display: block;
              }
            }
          }
          .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 17px;
            width: 17px;
            border: 1px solid var(--text-color);
            border-radius: 3px;
            &:after {
              content: "";
              position: absolute;
              display: none;
              left: 5px;
              top: 2px;
              width: 5px;
              height: 8px;
              border-style: solid;
              border-color: white;
              border-image: initial;
              border-width: 0px 2px 2px 0px;
              transform: rotate(45deg);
            }
          }
        }
      }
    }
  }
  .btn-main-hp {
    font-size: 16px;
    width: 150px;
    line-height: 50px;
    margin-bottom: 10px;
  }
  @media (min-width: 0px) and (max-width: 575px) {
    .filter-block-main-fltc {
      .filter-block-in-fltc {
        .categories-fltc {
          padding-bottom: 20px;
          .category-list-fltc {
            ul {
              li {
                font-size: 12px;
                padding-bottom: 10px;
                span {
                  height: 12px;
                  width: 12px;
                  font-size: 14px;
                }
              }
            }
          }
        }
        .filter-search-fltc {
          padding-bottom: 20px;
        }
        .display-collection-fltc {
          .collection-content-fltc {
            bottom: 5px;
            h3 {
              font-size: 10px;
              line-height: 20px;
              margin-bottom: 0px;
            }
            .btn-main-hp {
              font-size: 9px;
              width: 65px;
              line-height: 25px;
            }
          }
        }
      }
    }
    .title-fltc {
      h3 {
        font-size: 8px;
        line-height: 28px;
        border-radius: 8px;
        text-align: center;
        padding-left: 0px;
      }
    }
    .btn-main-hp {
      font-size: 10px;
      width: 100px;
      line-height: 40px;
      margin-bottom: 0px;
    }
    .special-product-fltc {
      margin-bottom: 10px;
      h2 {
        padding-bottom: 10px;
      }
      ul {
        li {
          label {
            font-size: 8px;
            line-height: 14px;
            padding-left: 15px;
            .checkmark {
              height: 12px;
              width: 12px;
              border-radius: 2px;
              &::after {
                left: 4px;
                top: 2px;
                width: 4px;
                height: 6px;
              }
            }
          }
        }
      }
      .special-product-card-in-spc {
        flex-direction: column;
        gap: 10px;
        margin-bottom: 16px;
        text-align: center;
        .product-content-spc {
          h3 {
            font-size: 12px;
            line-height: 14px;
          }
          .rating-spc {
            display: flex;
            justify-content: center;
            i {
              font-size: 14px;
            }
          }
          h4 {
            font-size: 12px;
            line-height: 14px;
            .disc-price-spc {
              padding-left: 4px;
            }
          }
        }
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    .filter-block-main-fltc {
      .filter-block-in-fltc {
        .categories-fltc {
          padding-bottom: 20px;
          .category-list-fltc {
            ul {
              li {
                font-size: 12px;
                padding-bottom: 10px;
                span {
                  height: 12px;
                  width: 12px;
                  font-size: 14px;
                }
              }
            }
          }
        }
        .filter-search-fltc {
          padding-bottom: 20px;
        }
        .display-collection-fltc {
          .collection-content-fltc {
            bottom: 5px;
            h3 {
              font-size: 10px;
              line-height: 20px;
              margin-bottom: 0px;
            }
            .btn-main-hp {
              font-size: 9px;
              width: 65px;
              line-height: 25px;
            }
          }
        }
      }
    }
    .title-fltc {
      h3 {
        font-size: 12px;
        line-height: 30px;
        border-radius: 8px;
        text-align: center;
        padding-left: 0px;
      }
    }
    .btn-main-hp {
      font-size: 10px;
      width: 100px;
      line-height: 40px;
      margin-bottom: 0px;
    }
    .special-product-fltc {
      margin-bottom: 10px;
      h2 {
        padding-bottom: 10px;
      }
      ul {
        li {
          label {
            font-size: 12px;
            line-height: 16px;
            padding-left: 20px;
            .checkmark {
              height: 14px;
              width: 14px;
              border-radius: 2px;
              &::after {
                left: 4px;
                top: 2px;
                width: 4px;
                height: 6px;
              }
            }
          }
        }
      }
      .special-product-card-in-spc {
        flex-direction: column;
        gap: 10px;
        margin-bottom: 16px;
        text-align: center;
        .product-content-spc {
          h3 {
            font-size: 12px;
            line-height: 14px;
          }
          .rating-spc {
            display: flex;
            justify-content: center;
            i {
              font-size: 14px;
            }
          }
          h4 {
            font-size: 12px;
            line-height: 14px;
            .disc-price-spc {
              padding-left: 4px;
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .filter-block-main-fltc {
      .filter-block-in-fltc {
        .categories-fltc {
          padding-bottom: 20px;
          .category-list-fltc {
            ul {
              li {
                font-size: 12px;
                padding-bottom: 10px;
                span {
                  height: 12px;
                  width: 12px;
                  font-size: 14px;
                }
              }
            }
          }
        }
        .filter-search-fltc {
          padding-bottom: 20px;
        }
        .display-collection-fltc {
          .collection-content-fltc {
            bottom: 5px;
            h3 {
              font-size: 10px;
              line-height: 20px;
              margin-bottom: 0px;
            }
            .btn-main-hp {
              font-size: 9px;
              width: 65px;
              line-height: 25px;
            }
          }
        }
      }
    }
    .title-fltc {
      h3 {
        font-size: 12px;
        line-height: 30px;
        border-radius: 8px;
        text-align: center;
        padding-left: 0px;
      }
    }
    .btn-main-hp {
      font-size: 10px;
      width: 100px;
      line-height: 40px;
      margin-bottom: 0px;
    }
    .special-product-fltc {
      margin-bottom: 10px;
      h2 {
        padding-bottom: 10px;
      }
      ul {
        li {
          label {
            font-size: 12px;
            line-height: 16px;
            padding-left: 20px;
            .checkmark {
              height: 14px;
              width: 14px;
              border-radius: 2px;
              &::after {
                left: 4px;
                top: 2px;
                width: 4px;
                height: 6px;
              }
            }
          }
        }
      }
      .special-product-card-in-spc {
        flex-direction: column;
        gap: 10px;
        margin-bottom: 16px;
        text-align: center;
        .product-content-spc {
          h3 {
            font-size: 12px;
            line-height: 14px;
          }
          .rating-spc {
            display: flex;
            justify-content: center;
            i {
              font-size: 14px;
            }
          }
          h4 {
            font-size: 12px;
            line-height: 14px;
            .disc-price-spc {
              padding-left: 4px;
            }
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
