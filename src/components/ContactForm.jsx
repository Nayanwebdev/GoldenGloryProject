import React from "react";
import styled from "styled-components";

export default function ContactForm() {
  return (
    <Wrapper>
      <form action="">
        <h2>Contact Form</h2>
        <div className="form-row-cfc">
          <div className="lable">
            <span>name :</span>
          </div>
          <div className="input-field">
            <input type="text" className="input-cf" placeholder="enter your name" name="name" />
          </div>
        </div>
        <div className="form-row-cfc">
          <div className="lable">
            <span>email :</span>
          </div>
          <div className="input-field">
            <input type="email" className="input-cf" placeholder="enter your email" name="email" />
          </div>
        </div>
        <div className="form-row-cfc">
          <div className="lable">
            <span>message :</span>
          </div>
          <div className="input-field">
            <textarea className="input-cf input-textarea-cf" placeholder="enter your message" name="message" />
          </div>
        </div>
        <button type="submit" className="btn-main-hp dark-btn-hp">
          send
        </button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 60px 90px;
  box-shadow: 0 0 15px rgb(139, 139, 139, 0.3);
  border-radius: 20px;
  form {
    text-align: center;
    h2 {
      font-size: 40px;
      line-height: 50px;
      text-align: center;
      padding-bottom: 30px;
    }
    .form-row-cfc {
      padding-bottom: 44px;
      .lable {
        text-align: left;
        padding-bottom: 12px;
        span {
          font-size: 20px;
          line-height: 30px;
          color: var(--text-color);
          text-transform: uppercase;
        }
      }
      .input-field {
        .input-cf {
          height: 76px;
          border-radius: 15px;
          background: var(--bg-color);
          padding-inline: 32px;
          font-size: 20px;
          line-height: 30px;
          width: 100%;
          color: var(--text-color);
          border: none;
          outline: none;
          ::placeholder {
            text-transform: capitalize;
            color: var(--golden-color);
          }
        }
        .input-textarea-cf {
          height: 224px;
          padding-top: 25px;
          resize: none;
        }
      }
    }
  }
  @media (min-width: 0px) and (max-width: 575px) {
    padding: 30px 15px;
    border-radius: 8px;
    form {
      h2 {
        font-size: 30px;
        line-height: 32px;
        padding-bottom: 20px;
      }
      .form-row-cfc {
        padding-bottom: 16px;
        .lable {
          padding-bottom: 6px;
          span {
            font-size: 15px;
            line-height: 20px;
          }
        }
        .input-field {
          .input-cf {
            height: 45px;
            border-radius: 6px;
            padding-inline: 20px;
            font-size: 14px;
            line-height: 18px;
          }
          .input-textarea-cf {
            height: 100px;
            padding-top: 15px;
          }
        }
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    padding: 40px 30px;
    border-radius: 8px;
    form {
      h2 {
        font-size: 30px;
        line-height: 32px;
        padding-bottom: 20px;
      }
      .form-row-cfc {
        padding-bottom: 16px;
        .lable {
          padding-bottom: 6px;
          span {
            font-size: 15px;
            line-height: 20px;
          }
        }
        .input-field {
          .input-cf {
            height: 45px;
            border-radius: 6px;
            padding-inline: 20px;
            font-size: 14px;
            line-height: 18px;
          }
          .input-textarea-cf {
            height: 100px;
            padding-top: 15px;
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    padding: 40px 30px;
    border-radius: 8px;
    form {
      h2 {
        font-size: 35px;
        line-height: 38px;
        padding-bottom: 20px;
      }
      .form-row-cfc {
        padding-bottom: 16px;
        .lable {
          padding-bottom: 6px;
          span {
            font-size: 15px;
            line-height: 20px;
          }
        }
        .input-field {
          .input-cf {
            height: 45px;
            border-radius: 6px;
            padding-inline: 20px;
            font-size: 14px;
            line-height: 18px;
          }
          .input-textarea-cf {
            height: 100px;
            padding-top: 15px;
          }
        }
      }
      .btn-main-hp {
        width: 140px;
        line-height: 50px;
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    padding: 40px 30px;
    border-radius: 12px;
    form {
      h2 {
        font-size: 35px;
        line-height: 38px;
        padding-bottom: 20px;
      }
      .form-row-cfc {
        .lable {
          padding-bottom: 8px;
        }
      }
      .form-row-cfc {
        padding-bottom: 20px;
        .input-field {
          .input-cf {
            height: 50px;
            border-radius: 10px;
            padding-inline: 20px;
            font-size: 16px;
            line-height: 22px;
          }
          .input-textarea-cf {
            height: 160px;
            padding-top: 15px;
          }
        }
      }
      .btn-main-hp {
        width: 140px;
        line-height: 50px;
      }
    }
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    padding: 50px;
  }
`;
