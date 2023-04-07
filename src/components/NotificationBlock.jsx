import React from "react";
import styled from "styled-components";

const NotificationBlock = () => {
  
  return (
    <Wrapper>
      <div className="notification-block-main">
        <div className="notification-block-in">
          <h3>All Notifications</h3>
        </div>
      </div>
    </Wrapper>
  );
};

export default NotificationBlock;

const Wrapper = styled.div`
  h3 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 30px;
  }
`;
