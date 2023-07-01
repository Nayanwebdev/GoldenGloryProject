import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdClose, MdMenu } from "react-icons/md";
import { useState } from "react";
import Logo from "../assets/images/logo_icon.png";
import Avtar from "../assets/images/avatar_icon.svg";
import Cart from "../assets/images/cart_icon.svg";
import Liked from "../assets/images/heart_icon.svg";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/", title: "Home" },
    { href: "/about-us", title: "About Us" },
    { href: "/collection", title: "Collection" },
    { href: "/blog", title: "Blog" },
    { href: "/contact", title: "Contact us" },
  ];
  const navRightLinks = [
    { href: "/liked", title: Liked },
    { href: "/cart", title: Cart },
    { href: "/profile", title: Avtar },
  ];

  return (
    <Wrapper>
      <header>
        <div className="container">
          <nav className="navbar">
            <div className="header-left-ggp">
              <NavLink to="/" role="button" exact="true">
                <div className="nav-brand-ggp">
                  <img src={Logo} alt="logo" loading="lazy" />
                  <h2>golden glory</h2>
                </div>
              </NavLink>
            </div>
            <div className={!showNav ? "mobile-menu-icon" : "mobile-menu-icon hide-menu-icon"} onClick={() => setShowNav(!showNav)} role="button">
              <MdMenu />
            </div>
            <div className="header-center-ggp">
              <div className={!showNav ? "closeNavIcon hide-close" : "closeNavIcon"} onClick={() => setShowNav(!showNav)} role="button">
                <MdClose />
              </div>
              <ul className={!showNav ? "navbar-nav nav-menu-ggp hide-nav " : "navbar-nav nav-menu-ggp"}>
                {navLinks.map((link, i) => (
                  <li className="nav-item" key={i}>
                    <NavLink className="nav-link" to={link.href} role="button" exact="true" onClick={() => setShowNav(false)}>
                      {link.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="header-right-ggp">
              <ul>
                {navRightLinks.map((link, i) => (
                  <li key={i}>
                    <NavLink className="nav-link" to={link.href} role="button" exact="true" onClick={() => setShowNav(false)}>
                      <img src={link.title} alt="header-icon" />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Wrapper>
  );
}

const Wrapper = styled.div`
position: sticky;
top: 0;
left: 0;
z-index: 999;
background: var(--bs-white);
  header {
    position: relative;
    z-index: 999;
    .navbar {
      height: 100px;
      padding-block: 0px;
      position: static;
      .header-left-ggp {
        .nav-brand-ggp {
          max-width: 238px;
          display: flex;
          align-items: center;
          img {
            width: 58px;
            height: 58px;
          }
          h2 {
            font-size: 32px;
            font-family: "Sorts Mill Goudy", sans-serif;
            margin-left: 10px;
            color: var(--golden-color);
          }
        }
      }
      .mobile-menu-icon {
        order: 2;
        font-size: 24px;
        line-height: 24px;
        border: none;
        display: none;
        text-align: end;
        svg {
          fill: var(--text-color);
        }
        @media (min-width: 0px) and (max-width: 767px) {
          display: block;
        }
      }
      .hide-menu-icon {
        display: none;
      }
      .header-center-ggp {
        margin: 0px;
        padding: 0px;
        .closeNavIcon {
          font-size: 25px;
          line-height: 25px;
          border: none;
          display: none;
          svg {
            fill: var(--text-color);
          }
        }

        .nav-menu-ggp {
          flex-direction: row;
          gap: 5px;
          li {
            .nav-link {
              font-size: 18px;
              font-weight: 500;
              color: var(--text-color);
              padding: 0px 12px;
              :hover {
                color: var(--golden-color);
              }
            }
          }
        }
        .hide-nav {
          display: none;
          top: 0;
          @media (min-width: 768px) {
            display: flex;
          }
        }
      }
      .header-right-ggp {
        margin: 0px;
        padding: 0px;
        ul {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          li {
            a {
              display: flex;
              img {
                /* width: 20px; */
                height: 21px;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 0px) and (max-width: 767px) {
    header {
      .navbar {
        height: 60px;
        .header-left-ggp {
          .nav-brand-ggp {
            max-width: 132px;
            img {
              height: 25px;
              width: 25px;
            }
            h2 {
              font-size: 18px;
              line-height: 20px;
              margin-left: 8px;
            }
          }
        }
        .mobile-menu-icon {
        }
        .header-center-ggp {
          order: 2;
          text-align: end;
          .closeNavIcon {
            display: block;
          }
          .hide-close {
            display: none;
          }
          .nav-menu-ggp {
            background-color: white;
            flex-direction: column;
            position: absolute;
            left: 0;
            width: 100%;
            top: 100%;
            padding-block: 10px;
            z-index: 999;
            li {
              padding-block: 2px;
              .nav-link {
                text-align: left;
              }
            }
          }
        }
        .header-right-ggp {
          width: calc(100% - 129px - 26px);
          ul {
            gap: 10px;
            justify-content: end;
            padding-right: 20px;
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    header {
      .navbar {
        height: 70px;
        .header-left-ggp {
          .nav-brand-ggp {
            max-width: 132px;
            img {
              height: 25px;
              width: 25px;
            }
            h2 {
              font-size: 18px;
              line-height: 20px;
              margin-left: 8px;
            }
          }
        }
        .header-center-ggp {
          .hide-close {
            display: none;
          }
          .nav-menu-ggp {
            background-color: white;
            display: flex;
            li {
              .nav-link {
                text-align: left;
                font-size: 17px;
                padding-inline: 5px;
              }
            }
          }
        }
        .header-right-ggp {
          ul {
            gap: 12px;
          }
        }
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1440px) {
    header {
      .navbar {
        height: 80px;
        .header-left-ggp {
          .nav-brand-ggp {
            max-width: 170px;
            img {
              height: 40px;
              width: 40px;
            }
            h2 {
              font-size: 22px;
              line-height: 22px;
              margin-left: 8px;
            }
          }
        }
        .header-center-ggp {
          .hide-close {
            display: none;
          }
          .nav-menu-ggp {
            background-color: white;
            display: flex;
            li {
              .nav-link {
                text-align: left;
                font-size: 18px;
                padding-inline: 10px;
              }
            }
          }
        }
        .header-right-ggp {
          ul {
            gap: 15px;
          }
        }
      }
    }
  }
`;
