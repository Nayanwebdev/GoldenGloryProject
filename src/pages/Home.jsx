import React from "react";
import styled from "styled-components";
import Ads from "../components/Ads";
import FeaturedProduct from "../components/FeaturedProduct";
import HeroBanner from "../components/HeroBanner";
import NewsLetter from "../components/NewsLetter";
import OurStory from "../components/OurStory";

const Wrapper = styled.div``;

export default function Home() {
  return (
    <Wrapper>
      <HeroBanner />
      <OurStory/>
      <Ads/>
      <FeaturedProduct/>
      <NewsLetter/>
    </Wrapper>
  );
}
