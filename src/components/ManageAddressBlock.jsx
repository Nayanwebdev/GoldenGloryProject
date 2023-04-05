import React from "react";
import styled from "styled-components";
import editImg from "../assets/images/edit_btn.svg";

const ManageAddressBlock = () => {
  return (
    <Wrapper>
      <div className="address-block-main">
        <div className="action-main">
          <div className="action-in">
            <img src={editImg} />
            <div className="action-btn">
              <div className="action-btn-in">
                <span>Edit</span>
              </div>
              <div className="action-btn-in">
                <span>Delete</span>
              </div>
            </div>
          </div>
        </div>
        <div className="add-badge">
          <span>HOME</span>
        </div>
        <h4 className="add-info">
          <span className="_3CfVDh">Nayan Unjiya</span>
          <span className="_1Z7fmh _3CfVDh">8200572608</span>
        </h4>
        <h5 className="add-info add-info-one">
          122, saritadarshan society-2, chikuwadi,, Nana Varachha, Surat, Gujarat -<span className="">395006</span>
        </h5>
      </div>
    </Wrapper>
  );
};

export default ManageAddressBlock;

const Wrapper = styled.div`
  .address-block-main {
    max-width: 848px;
    overflow: hidden;
    padding: 20px;
    border: 1px solid #e0e0e0;
    position: relative;
    .action-main {
      max-width: 35px;
      float: right;
      .action-in {
        cursor: pointer;
        padding: 0 8px;
        .action-btn {
          z-index: 9;
          white-space: nowrap;
          display: none;
          position: absolute;
          font-size: 14px;
          color: #878787;
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.18);
          right: 23px;
          padding: 5px;
          border-radius: 3px;
          top: 10px;
          .action-btn-in {
            padding: 7px 12px;
            color: #212121;
          }
        }
        &:hover {
          .action-btn {
            display: block;
          }
        }
      }
    }
    .add-badge {
      span {
        text-transform: uppercase;
        font-size: 11px;
        color: #878787;
        vertical-align: middle;
        padding: 4px 7px;
        border-radius: 2px;
        background-color: #f0f0f0;
        font-weight: 500;
        margin-right: 15px;
      }
    }
    .add-info {
      display: flex;
      gap: 10px;
      span {
        font-size: 15px;
        line-height: 20px;
        font-weight: 500;
      }
    }
    .add-info-one {
      font-size: 14px;
      margin-top: 10px;
      display: block;
      max-width: 600px;
      span{

      }
    }
  }
`;
