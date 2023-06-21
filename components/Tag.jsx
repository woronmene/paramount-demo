/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import addCommasToNumber from "../utils/addCommas";
import { BsBookmark } from "react-icons/bs";
import { sliceText } from "../utils/sliceText";

function Tag({ link, topPos, leftPos, title, price, image, id }) {
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

  const checkTagClosenessToContainer = () => {
    const container = document.getElementById("previewVideo");
    const movable = document.getElementById(id);

    const containerRect = container.getBoundingClientRect();
    const movableRect = movable.getBoundingClientRect();
    // console.log(containerRect, movableRect);
    const threshold = 250; // Adjust this value to define the desired closeness threshold

    const isCloseToTop = movableRect.top - containerRect.top <= threshold;
    const isCloseToLeft = movableRect.left - containerRect.left <= threshold;
    const isCloseToRight = containerRect.right - movableRect.right <= threshold;
    const isCloseToBottom =
      containerRect.bottom - movableRect.bottom <= threshold;
    // console.log(isCloseToTop, isCloseToLeft, isCloseToRight, isCloseToBottom);
    if (isCloseToTop) {
      // console.log("close to top");
      movable.style.top = movableRect.top + threshold + "px";
    } else if (isCloseToBottom) {
      // console.log("close to bottom");

      movable.style.top = movableRect.top - threshold + "px";
    }

    if (isCloseToLeft) {
      // console.log("close to left");

      movable.style.left = movableRect.left + threshold + "px";
    } else if (isCloseToRight) {
      // console.log("close to right");

      movable.style.left = movableRect.left - threshold + "px";
    }
  };

  const closeTag = () => {
    const movable = document.getElementById(id);
    movable.style.left = `${leftPos}%`;
    movable.style.top = `${topPos}%`;
  };

  return (
    <div
      onClick={() => {
        checkTagClosenessToContainer();
        setIsOpen(true);
      }}
      style={{
        top: `${topPos}%`,
        left: `${leftPos}%`,
      }}
      className={`tag ${isOpen ? "open" : "circleTags"}`}
      id={id}
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
              closeTag();
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
          <a
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="buyButton solid"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <img src="./linkIcon.svg" alt="" />
            <p>Buy now</p>
          </a>
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
