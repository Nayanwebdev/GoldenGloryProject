import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BlogCard from "../components/BlogCard";
import PageBanner from "../components/PageBanner";
import SideBar from "../components/SideBar";
import axios from "axios";

import blogImg1 from "../assets/images/blog_img_1.webp";
import blogImg2 from "../assets/images/blog_img_2.webp";
import blogImg3 from "../assets/images/blog_img_3.webp";
import blogImg4 from "../assets/images/blog_img_4.webp";
import blogImg5 from "../assets/images/blog_img_5.webp";
import blogImg6 from "../assets/images/blog_img_6.webp";

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
        // console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const day = new Date().getDate();
  const month = new Date().getMonth();
  const Blogs = [
    { title: "Blog Image Post", imgSrc: blogImg1, postBy: "Admin", comment: 0, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim." },
    { title: "Post With Gallery", imgSrc: blogImg2, postBy: "Admin", comment: 0, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim." },
    { title: "Onide Nidie Inida Model", imgSrc: blogImg3, postBy: "Admin", comment: 0, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim." },
    { title: "Binis Mnisd Inigs", imgSrc: blogImg4, postBy: "Admin", comment: 0, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim." },
    { title: "Thisn Lorem Monhd", imgSrc: blogImg5, postBy: "Admin", comment: 0, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim." },
    { title: "Mithout warkness", imgSrc: blogImg6, postBy: "Admin", comment: 0, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim." },
  ];
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
                {Blogs.map((blog, i) => (
                  <BlogCard key={i} title={blog.title} imgSrc={blog.imgSrc} date={blog.date} month={blog.month} postBy={blog.postBy} comment={blog.comment} desc={blog.desc} />
                ))}
              </div>
              <div className="blog-block-bp mt-5">
                {blog?.data?.map((blog, i) => (
                  <BlogCard key={i} title={blog?.attributes?.title} imgSrc={blog?.attributes?.blogImg?.data?.attributes?.url} newDate={blog?.attributes?.createdAt} postBy={blog?.attributes?.postby} comment={blog?.attributes?.comment} desc={blog?.attributes?.description} />
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
