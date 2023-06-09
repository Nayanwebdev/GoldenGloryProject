import { createGlobalStyle } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}
body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    margin: 0px;
    padding: 0px;
}
:root {
  --text-color: #6E441E;
  --golden-color: #C18F61;
  --white-color: #ffffff;
  --black-color: #000;
  --bg-color: #FFEFE1;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0px;
    padding: 0px;
    font-weight: normal;
}
h1,
h2{
    font-family: "Sorts Mill Goudy", sans-serif;
    color: var(--text-color);
}

p {
    margin: 0px;
    padding: 0px;
    font-size: 18px;
    line-height: 27px;
    color: var(--black-color);
}

a {
    text-decoration: none;
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    -ms-transition: all 0.2s linear;
    transition: all 0.2s linear;
}
a:is(:hover,:active,:focus){
    outline: none;
    text-decoration: none;
}

input:is(:hover,:focus,:active) {
    outline: none;
}

ul {
    margin: 0px;
    padding: 0px;
}

ul li {
    list-style-type: none;
    margin: 0px;
    padding: 0px;
}

img {
    border: 0px;
    -webkit-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    -ms-transition: all 0.3s linear;
    transition: all 0.3s linear;
}

:before,
 :after {
    -webkit-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    -ms-transition: all 0.3s linear;
    transition: all 0.3s linear;
}

.container {
  max-width: 1380px;
  padding: 0px 15px;
  margin: 0px auto;
}
.btn-main-hp{
    width: 168px;
    font-size: 18px;
    line-height: 60px;
    border-radius: 50px;
    display: inline-block;
    text-align: center;
    padding: 0px;
    border: none;
    outline: none;
    color: var(--white-color);
    text-transform: capitalize;
}
.dark-btn-hp{
    background-color: var(--text-color);
}
.dark-btn-hp:is(:hover,:active){
    color: var(--white-color);
    background-color: var(--golden-color);
}
.light-btn-hp{
    background-color: var(--golden-color);
}
.light-btn-hp:is(:hover,:active){
    color: var(--white-color);
    background-color: var(--text-color);
}
.rate{
    color: #FFC107;
}
.blank-rate {
    color: #eee;
}
.read-more-btn{
    font-size: 18px;
    line-height: 26px;
    color: var(--text-color);
    display: inline-block;
    text-decoration: underline;
    text-transform: capitalize;
}
.read-more-btn:hover{
    color: var(--golden-color);
}
.sidebar-toggle{
    border: 0px;
    height: 30px;
    background-color: var(--bg-color);
    width: 30px;
    svg{
        fill:var(--text-color);
    }
}
.form-control:focus{
    box-shadow: none;
    border-color: var(--text-color);
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
@media (min-width: 0px) and (max-width: 575px) {
    .container {
        width: 100%;
    }
    p {
    font-size: 15px;
    line-height: 20px;
}
    .btn-main-hp {
        width: 140px;
        font-size: 14px;
        line-height: 50px;
    }
}
@media (min-width: 576px) and (max-width: 767px) {
    .container {
        max-width: 540px;
    }
    .btn-main-hp {
        width: 150px;
        font-size: 15px;
        line-height: 52px;
    }
    p {
        font-size: 16px;
        line-height: 20px;
    }
}
@media (min-width: 768px) and (max-width: 991px) {
    .container {
        max-width: 720px;
    }
    p {
        font-size: 16px;
        line-height: 22px;
    }
    .btn-main-hp {
        width: 156px;
        font-size: 16px;
        line-height: 58px;
    }
}
@media (min-width: 992px) and (max-width: 1199px) {
    .container {
        max-width: 960px;
    }
}
@media (min-width: 1200px) and (max-width: 1440px) {
    .container {
        max-width: 1140px;
    }
}

/* @media (min-width: 0px) and (max-width: 575px) {
  }
  @media (min-width: 576px) and (max-width: 767px) {
  }
  @media (min-width: 768px) and (max-width: 991px) {
  }
  @media (min-width: 992px) and (max-width: 1199px) {
  } 
  @media (min-width: 1200px) and (max-width: 1440px) {
  } */
`;
export default GlobalStyle;
