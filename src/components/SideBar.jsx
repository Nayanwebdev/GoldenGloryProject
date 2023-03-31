import FilterProduct from "../components/FilterProduct";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const SideBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
      setIsOpen(false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isMobile ? (
        <>
          <button className="sidebar-toggle" onClick={toggleBar}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          {isOpen && <FilterProduct />}
        </>
      ) : (
        <FilterProduct />
      )}
    </>
  );
};

export default SideBar;
