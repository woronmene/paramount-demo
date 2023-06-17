/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import addCommasToNumber from "../utils/addCommas";
import { BsBookmark } from "react-icons/bs";
import { sliceText } from "../utils/sliceText";

function Tag({ link, topPos, leftPos, title, price, image }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
    }
  }, [isOpen]);

  return (
    <div
      onClick={() => {
        setIsOpen(true);
      }}
      style={{
        top: `${topPos}%`,
        left: `${leftPos}%`,
      }}
      className={`tag ${isOpen ? "open" : "circleTags"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`tagContent ${showContent ? "open" : ""}`}
      >
        <div className="tagHeader">
          <div></div>
          <p className="headingText">Product Details</p>

          <img
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="cancelBtn"
            src="./cancelIcon.svg"
            alt="cancel"
          />
        </div>
        <div
          className="imageBox"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="productTitleSection">
          <p className="productTitle">{sliceText(title)}</p>

          <p className="priceText">$ {addCommasToNumber(Math.round(price))}</p>
        </div>
        <div className="buySection">
          {/* <p className="wishlistButton">
            $ {addCommasToNumber(Math.round(price / 450))}
          </p> */}

          {/* <div
            className="wishlistButton"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          >
            <BsBookmark color="#53389E" fontSize="20px" />
            <span className="wishlistText">Add to wishlist</span>
          </div> */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="buyButton solid"
          >
            <img src="./linkIcon.svg" alt="" />
            <a href={link} target="_blank" rel="noreferrer">
              Buy now
            </a>
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="buyButton outline"
          >
            <img src="./blueHeart.svg" alt="" />
            <p>Add to wishlist</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tag;
