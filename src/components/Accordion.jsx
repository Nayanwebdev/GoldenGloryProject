import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

export default function Accordion() {
  const [active, setActive] = useState(false);
  const content = useRef(null);
  const [height, setHeight] = useState("0px");
  useEffect(() => {
    // console.log("Height for ", title, ": ", height);
  }, [height]);

  const toggleAccordion = (e) => {
    // setActive(!active);
    // setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
    const accordion = document.querySelectorAll(".accordion-block-acc");
    accordion.forEach((item) => {
      item.classList.remove("active");
    });

    e.target.parentElement.classList.remove("active");
    const accContents = document.querySelectorAll(".accordion__content");
    accContents.forEach((item) => {
      item.style.height = `0px`;
      item.parentElement.querySelector("span").style.transform = "rotate(0deg)";
    });

    if (!e.target.parentElement.classList.contains("active")) {
      e.target.parentElement.classList.add("active");
      e.target.parentElement.querySelector(".accordion__content").style.height = `${content.current.scrollHeight}px`;
      e.target.parentElement.querySelector("span").style.transform = "rotate(180deg)";
    }
  };

  const accordionData = [
    {
      title: "Who is golden glory?",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem.",
    },
    {
      title: "What do we do?",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem.",
    },
    {
      title: "Product's guarantee",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem.",
    },
  ];

  return (
    <Wrapper>
      {accordionData.map((data, i) => (
        <div key={i} className={`accordion-block-acc ${active ? "active" : ""}`}>
          <div
            className={`accordion-acc `}
            onClick={(e) => {
              toggleAccordion(e);
            }}
          >
            <p className="accordion__title">{data.title}</p>
            <span>{active ? <FaAngleUp /> : <FaAngleDown />}</span>
          </div>
          <div ref={content} style={{ height: `${height}` }} className="accordion__content">
            <div className="accordion__text" dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>
        </div>
      ))}
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

  .accordion__title {
    font-size: 28px;
    line-height: 34px;
    color: var(--golden-color);
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
`;
