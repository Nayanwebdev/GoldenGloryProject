import React from "react";
import styled from "styled-components";

export default function Map() {
  return (
    <Wrapper>
      <div className="map-block-mpc">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29753.104279183615!2d72.84819004999999!3d21.22637425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04efb4c4f9973%3A0xacc694e49046211a!2sUmiyadham!5e0!3m2!1sen!2sin!4v1680085959985!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .map-block-mpc {
    width: 100%;
    height: 480px;
    iframe {
      height: 100%;
      width: 100%;
    }
  }
  @media (min-width: 0px) and (max-width: 575px) {
    .map-block-mpc {
      height: 280px;
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    .map-block-mpc {
      height: 280px;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .map-block-mpc {
      height: 340px;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
  }
`;
