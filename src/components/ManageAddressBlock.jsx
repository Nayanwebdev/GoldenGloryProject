import React from "react";
import styled from "styled-components";
import editImg from "../assets/images/edit_btn.svg";

const ManageAddressBlock = () => {
  const addresses = [
    { id: 1, name: "nayan unjiya", mobile: 8200572608, badge: "Home", address: "410, Nilkhanth Plaza, kiranCkowk, Punagam, Surat, Gujarat", pin: 394101 },
    { id: 2, name: "chadresh ponkiya", mobile: 8200572608, badge: "office", address: "410, Nilkhanth Plaza, kiranCkowk, Punagam, Surat, Gujarat", pin: 394101 },
  ];

  return (
    <Wrapper>
      <div className="address-block-main">
        {addresses.map((address) => (
          <div className="address-box-adb" key={address.id}>
            <div className="action-main">
              <div className="action-in">
                <img src={editImg} alt="edit" loading="lazy" />
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
              <span>{address.badge}</span>
            </div>
            <h4 className="add-info">
              <span>{address.name}</span>
              <span>{address.mobile}</span>
            </h4>
            <h5 className="add-info add-info-one">
              {address.address} -<span>{address.pin}</span>
            </h5>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default ManageAddressBlock;

const Wrapper = styled.div`
  .address-block-main {
    .address-box-adb {
      max-width: 800px;
      overflow: hidden;
      padding: 20px;
      border: 1px solid #e0e0e0;
      border-bottom: 0px;
      position: relative;
      &:last-child {
        border-bottom: 1px solid #e0e0e0;
      }
      .action-main {
        max-width: 35px;
        float: right;
        .action-in {
          cursor: pointer;
          padding: 0 8px;
          .action-btn {
            position: absolute;
            display: none;
            z-index: 9;
            font-size: 14px;
            box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.18);
            right: 23px;
            padding: 5px;
            border-radius: 3px;
            top: 10px;
            background: white;
            .action-btn-in {
              padding: 7px 12px;
              color: #212121;
              &:hover {
                color: var(--text-color);
              }
            }
          }
          &:hover {
            .action-btn {
              display: block;
            }
          }
        }
      }
    }
    .add-badge {
      margin-bottom: 10px;
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
    }
  }

  @media (min-width: 0px) and (max-width: 575px) {
    .address-block-main {
      .address-box-adb {
        padding: 12px 10px;
        .action-in {
          img {
            height: 14px;
          }
        }
      }
      .add-info {
        flex-direction: column;
        gap: 5px;
        span {
          font-size: 13px;
          line-height: 15px;
        }
      }
      .add-info-one {
        font-size: 12px;
      }
      .add-badge {
        span {
          font-size: 10px;
          padding: 4px 5px;
        }
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    .address-block-main {
      .address-box-adb {
        padding: 16px 14px;
        .action-in {
          img {
            height: 14px;
          }
        }
      }
      .add-info {
        span {
          font-size: 14px;
          line-height: 16px;
        }
      }
      .add-info-one {
        font-size: 13px;
      }
      .add-badge {
        span {
          padding: 4px 5px;
        }
      }
    }
  }
`;
