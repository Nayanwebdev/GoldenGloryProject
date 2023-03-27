import React from "react";
import Accordion from "react-bootstrap/Accordion";
import styled from "styled-components";

export default function BasicAccordion({ AccordionTitle, AccordionContent }) {
  const accordionData = [
    { id: 1, title: "Who is golden glory?", content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem." },
    { id: 2, title: "What do we do?", content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem." },
    { id: 3, title: "Product's guarantee", content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem." },
  ];

  return (
    <Wrapper>
      <Accordion>
        {accordionData.map((data, id) => (
          <Accordion.Item eventKey={data.id} key={id}>
            <Accordion.Header>{data.title}</Accordion.Header>
            <Accordion.Body>{data.content}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .accordion-block-acc {
    display: flex;
    flex-direction: column;
  }
  .accordion-acc {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    padding-right: 10px;
    border-bottom: 1px solid black;
    cursor: pointer;
    transition: background-color 0.6s ease;
  }

  .accordion-button {
    font-size: 28px;
    color: var(--golden-color);
    height: 80px;
    padding-block: 0px;
    padding-left: 0px;
    :focus {
      outline: 0;
      border: 0;
      box-shadow: none;
      background-color: var(--bg-color);
    }
    :not(.collapsed) {
      background-color: var(--bg-color);
    }
    ::after {
      color: var(--golden-color);
      background-image: url("/angle_down.svg");
    }
    :first-of-type {
      border-radius: 0px;
    }
  }
  .accordion-item {
    border: 0px;
    border-bottom: 1px solid var(--text-color);
    :last-of-type {
      border-radius: 0px;
    }
  }
  .accordion__content {
    overflow: hidden;
    transition: height 0.6s ease;
  }

  .accordion__text {
    padding: 20px;
    font-size: 18px;
    line-height: 24px;
    color: var(--text-color);
  }
  @media (min-width: 0px) and (max-width: 575px) {
    .accordion-button {
      font-size: 18px;
      height: 50px;
      padding-inline: 10px 16px;
      ::after {
        width: 12px;
        height: 8px;
        background-size: contain;
      }
    }
    .accordion-body {
      padding-inline: 10px;
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    .accordion-button {
      font-size: 20px;
      height: 50px;
      padding-inline: 10px 16px;
      ::after {
        width: 12px;
        height: 8px;
        background-size: contain;
      }
    }
    .accordion-body {
      padding-inline: 10px;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .accordion-button {
      font-size: 20px;
      height: 50px;
      padding-inline: 10px 16px;
      ::after {
        width: 12px;
        height: 8px;
        background-size: contain;
      }
    }
    .accordion-body {
      padding-inline: 10px;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    .accordion-button {
      font-size: 24px;
      height: 60px;
      padding-inline: 6px 10px;
      ::after {
        width: 12px;
        height: 8px;
        background-size: contain;
      }
    }
    .accordion-body {
      padding-inline: 10px;
    }
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    .accordion-button {
      font-size: 26px;
      height: 70px;
    }
    .accordion-button::after {
      width: 17px;
      height: 10px;
      background-size: contain;
    }
  }
`;
