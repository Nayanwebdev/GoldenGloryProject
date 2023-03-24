import React from "react";
import styled from "styled-components";
import PageBanner from "../components/PageBanner";

const Wrapper = styled.div``;

export default function AboutUs() {
  return (
    <Wrapper>
      <PageBanner pageTitle="who we are" pageLink="aboutus" />
    </Wrapper>
  );
}
