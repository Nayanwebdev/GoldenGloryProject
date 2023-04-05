import React from "react";
import styled from "styled-components";
import FaqBlock from "./FaqBlock";

const ProfileInfoBlock = () => {
  return (
    <Wrapper>
      <div className="personal-info-block">
        <div className="personal-info-in">
          <div className="name-block">
            <div className="title">
              <h3>Personal Information</h3>
            </div>
            <form action="">
              <div className="form-row">
                <input type="text" name="fname" defaultValue="nayan" />
                <input type="text" name="lname" defaultValue="unjiya" />
              </div>
              <div>
                <h3>Gender</h3>
                <div className="form-row">
                  <div className="form-radio">
                    <input type="radio" id="male" name="gender" defaultValue="male" />
                    <label htmlFor="male">male</label>
                  </div>
                  <div className="form-radio">
                    <input type="radio" id="female" name="gender" defaultValue="female" />
                    <label htmlFor="female">female</label>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="name-block">
            <div className="title">
              <h3>Email Address</h3>
            </div>
            <form action="">
              <div className="form-row">
                <input type="text" name="email" defaultValue="nayan@gmail.com" />
              </div>
            </form>
          </div>
          <div className="name-block">
            <div className="title">
              <h3>Mobile Number</h3>
            </div>
            <form action="">
              <div className="form-row">
                <input type="number" name="mobile" defaultValue="1234567891" />
              </div>
            </form>
          </div>
        </div>
        <div className="faq">
          <FaqBlock />
        </div>
        
      </div>
    </Wrapper>
  );
};

export default ProfileInfoBlock;

const Wrapper = styled.div`
  h3 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 12px;
  }
  .form-row {
    display: flex;
    gap: 20px;
    align-items: center;
    margin-bottom: 30px;
    input {
      height: 50px;
      font-size: 16px;
      background: #fafafa;
      padding-inline: 16px;
      color: #878787;
      border: 1px solid #e0e0e0;
      outline: none;
      border-radius: 2px;
      box-shadow: none;
    }
    .form-radio {
      display: flex;
      align-items: center;
      gap: 5px;
      label {
        font-size: 18px;
      }
      input {
        width: 16px;
        height: 16px;
      }
    }
  }
`;
