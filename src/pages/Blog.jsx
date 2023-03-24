import React from "react";
import styled from "styled-components";
import PageBanner from "../components/PageBanner";


export default function Blog() {
  return (
    <Wrapper>
      <PageBanner pageTitle="blog" pageLink="blog" />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
