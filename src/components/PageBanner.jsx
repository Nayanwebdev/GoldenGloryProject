import React from "react";
import styled from "styled-components";

export default function PageBanner({ pageTitle }) {
  return (
    <Wrapper>
      <div className="page-banner-allp">
        <div className="page-banner-title-allp"></div>
        <TitleMain mainTitle={pageTitle}/>

      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
.page-banner-allp{
    
}
`;

