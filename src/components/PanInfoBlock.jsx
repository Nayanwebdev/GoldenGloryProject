import React from "react";
import styled from "styled-components";

const PanInfoBlock = () => {
  return (
    <Wrapper>
      <div className="pan-info-block">
        <div className="title">
          <h3>PAN Card Information</h3>
        </div>
        <form action="">
          <div className="form-row">
            <div className="input-block">
              <input type="text" name="pancard" />
              <label htmlFor="pancard">pancard number</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-block">
              <input type="text" name="name" />
              <label htmlFor="name">full name</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-block">
              <input type="file" className="input-file" name="file" />
              <label htmlFor="file">Upload PAN Card</label>
            </div>
          </div>
          <div className="form-row">
            <label className="check-block">
              <input type="checkbox" readOnly="" />
              <div className="checked-box side-check"></div>
              <div className="check-box-text">I do hereby declare that PAN furnished/stated above is correct and belongs to me, registered as an account holder with www.flipkart.com. I further declare that I shall solely be held responsible for the consequences, in case of any false PAN declaration.</div>
            </label>
          </div>
          <div className="form-row">
            <button className="btn-main-hp upload-btn">upload</button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default PanInfoBlock;

const Wrapper = styled.div`
  .pan-info-block {
    h3 {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 12px;
    }
    form {
      .input-block {
        position: relative;
        input {
          font-size: 14px;
          max-width: 300px;
          width: 100%;
          height: 50px;
          margin-bottom: 20px;
          border: 1px solid #dbdbdb;
          outline: none;
          border-radius: 2px;
          padding: 20px 16px 0 13px;
          box-shadow: none;
          &:focus ~ label {
            color: var(--text-color);
          }
        }
        .input-file {
          height: 64px;
          padding-top: 28px;
        }
        label {
          position: absolute;
          left: 13px;
          top: 8px;
          transform-origin: top left;
          font-size: 12px;
          color: #878787;
          transition: transform 0.2s ease;
        }
      }
      .check-block {
        cursor: pointer;
        width: 100%;
        position: relative;
        display: block;
        input {
          visibility: hidden;
          position: absolute;
          top: 0;
          left: 0;
          &:checked ~ .checked-box {
            border: var(--text-color);
            background: var(--text-color);
            &::before {
              display: block;
            }
          }
        }
        .side-check {
          position: absolute;
        }
        .checked-box {
          position: relative;
          width: 14px;
          height: 14px;
          background-color: transparent;
          border: 1.4px solid #c2c2c2;
          border-radius: 1.5px;
          box-sizing: border-box;
          display: inline-block;
          vertical-align: middle;
          cursor: pointer;
          &:before {
            content: "";
            position: absolute;
            left: 4px;
            top: 2px;
            width: 5px;
            height: 8px;
            border-style: solid;
            border-color: rgb(255, 255, 255);
            border-image: initial;
            border-width: 0px 2px 2px 0px;
            transform: rotate(45deg);
            backface-visibility: hidden;
            display: none;
          }
        }
        .check-box-text {
          font-size: 14px;
          line-height: 20px;
          vertical-align: top;
          padding-left: 11px;
          color: rgb(33, 33, 33);
          display: inline-block;
          width: calc(100% - 25px);
          overflow: hidden;
          text-overflow: ellipsis;
          cursor: pointer;
        }
      }
      .upload-btn {
        border-radius: 4px;
        line-height: 40px;
        margin-top: 30px;
        background: var(--text-color);
        &:hover {
          background: var(--golden-color);
        }
      }
    }
  }

  @media (min-width: 0px) and (max-width: 575px) {
    .pan-info-block {
      form {
        .check-block {
          .check-box-text {
            font-size: 12px;
            padding-left: 5px;
          }
          .checked-box {
            width: 10px;
            height: 10px;
            &::before {
              left: 3px;
              top: 1px;
              width: 4px;
              height: 6px;
            }
          }
        }
        .input-block {
          .input-file {
            height: 55px;
            padding-top: 22px;
          }
          input {
            height: 45px;
            font-size: 12px;
            padding: 18px 10px 0px 10px;
            margin-bottom: 15px;
          }
          label {
            font-size: 11px;
            left: 13px;
            top: 4px;
          }
        }
        .upload-btn {
          width: 100px;
          font-size: 12px;
          line-height: 36px;
          margin-top: 20px;
        }
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    .pan-info-block {
      form {
        .check-block {
          .check-box-text {
            font-size: 13px;
            padding-left: 8px;
          }
          .checked-box {
            width: 12px;
            height: 12px;
            &::before {
              left: 4px;
              top: 2px;
              width: 4px;
              height: 6px;
            }
          }
        }
        .input-block {
          .input-file {
            height: 55px;
            padding-top: 22px;
          }
          input {
            padding: 18px 10px 0px 10px;
            margin-bottom: 15px;
          }
          label {
            font-size: 11px;
            left: 13px;
            top: 4px;
          }
        }
        .upload-btn {
          width: 100px;
          font-size: 13px;
          line-height: 36px;
          margin-top: 20px;
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
  }
  @media (min-width: 992px) and (max-width: 1199px) {
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
  }
`;
