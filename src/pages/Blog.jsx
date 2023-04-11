import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BlogCard from "../components/BlogCard";
import PageBanner from "../components/PageBanner";
import SideBar from "../components/SideBar";
import axios from "axios";

export default function Blog() {
  const [blog, setBlog] = useState();
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const key = import.meta.env.VITE_STRAPI_KEY;
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${baseUrl}/api/blogs?populate=*`,
    headers: {
      Authorization: `Bearer ${key}`,
    },
  };
  useEffect(() => {
    axios
      .request(config)
      .then((response) => {
        setBlog(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const date = blog?.data?.[0]?.attributes?.createdAt;
  const dateArr = new Date(date).toDateString().split(" ");
  const day = dateArr[2];
  const month = dateArr[1];

  return (
    <Wrapper>
      <PageBanner pageTitle="blog" pageLink="blog" />
      <div className="blog-page-block-bp">
        <div className="container">
          <div className="blog-page-in-bp">
            <div className="left-blck-bp">
              <SideBar />
            </div>
            <div className="right-blck-bp">
              <div className="blog-block-bp">
                {blog?.data?.map((blog, i) => (
                  <BlogCard key={i} title={blog?.attributes?.title} imgSrc={baseUrl + blog?.attributes?.blogImg?.data?.attributes?.url} date={day} month={month} postBy={blog?.attributes?.postby} comment={blog?.attributes?.comment} desc={blog?.attributes?.description} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .blog-page-block-bp {
    padding-bottom: 40px;
    .blog-page-in-bp {
      display: flex;
      padding-block: 40px;
      .left-blck-bp {
        width: 23%;
      }
      .right-blck-bp {
        width: 77%;
        padding-left: 70px;
        .blog-block-bp {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 50px 80px;
        }
      }
    }
  }
  @media (min-width: 0px) and (max-width: 575px) {
    .blog-page-block-bp {
      .blog-page-in-bp {
        padding-block: 0px 40px;
        .left-blck-bp {
          width: auto;
          position: absolute;
          background-color: var(--white-color);
          z-index: 999;
          .filter-block-main-fltc {
            padding-inline: 20px;
            padding-top: 20px;
            padding-bottom: 30px;
            box-shadow: rgba(193, 143, 97, 0.15) 5px 5px 5px;
          }
        }
        .right-blck-bp {
          width: 100%;
          padding-left: 0px;
          .blog-block-bp {
            grid-template-columns: repeat(1, 1fr);
            gap: 20px;
          }
        }
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    .blog-page-block-bp {
      .blog-page-in-bp {
        padding-block: 0px 40px;
        .left-blck-bp {
          width: auto;
          position: absolute;
          background-color: var(--white-color);
          z-index: 999;
          .filter-block-main-fltc {
            padding-inline: 20px;
            padding-top: 20px;
            padding-bottom: 30px;
            box-shadow: rgba(193, 143, 97, 0.15) 5px 5px 5px;
          }
        }
        .right-blck-bp {
          width: 100%;
          padding-left: 0px;
          .blog-block-bp {
            grid-template-columns: repeat(1, 1fr);
            gap: 20px;
          }
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .blog-page-block-bp {
      .blog-page-in-bp {
      padding-block: 20px 40px;
        .right-blck-bp {
          padding-left: 20px;
          .blog-block-bp {
            grid-template-columns: repeat(1, 1fr);
            gap: 20px;
          }
        }
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    .blog-page-block-bp {
      .blog-page-in-bp {
        .right-blck-bp {
          padding-left: 20px;
          .blog-block-bp {
            gap: 30px 20px;
          }
        }
      }
    }
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    .blog-page-block-bp {
      .blog-page-in-bp {
        .right-blck-bp {
          padding-left: 20px;
          .blog-block-bp {
            gap: 30px;
          }
        }
      }
    }
  }
`;
