import Head from "next/head";
// import styles from "../styles/Home.module.css";
import React, { useState, useEffect, use } from "react";
import Tag from "../components/Tag";
import showTag from "../utils/showTag";
// import labels from "../preg.json";
import { labels } from "../test";
// import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  // const videoRef = useRef(null);
  const [tagArray, setTagArray] = useState([]);

  const [isPortrait, setIsPortrait] = useState(true);
  const [aspectRatioValue, setAspectRatioValue] = useState("");
  const [currentVideoHeight, setCurrentVideoHeight] = useState("");
  const [currentVideoWidth, setCurrentVideoWidth] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Adjust the width threshold as needed
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // console.log(currentVideoHeight, currentVideoWidth);

  useEffect(() => {
    const videoReference = document.getElementById("previewVideo");
    setIsPortrait(true);
    setAspectRatioValue("");
    // console.log(videoReference.videoHeight, videoReference.videoWidth);
    const { videoHeight } = videoReference;
    setCurrentVideoHeight(videoHeight);
    const { videoWidth } = videoReference;
    setCurrentVideoWidth(videoWidth);
  }, []);

  const videoContainerPortraitStyles = {
    height: "100%",
    aspectRatio: aspectRatioValue,
  };
  const videoContainerLandscapeStyles = {
    width: "100%",
    aspectRatio: aspectRatioValue,
  };
  const handlePlay = () => {
    setTagArray([]);
  };

  const handleShowTag = (e) => {
    const tags = showTag(e.target.currentTime, labels);
    // console.log(e.target.currentTime);
    setTagArray(tags);
  };

  const getCoordinates = (bbh, bbw, bbl, bbt, vw, vh) => {
    const bbhInt = parseFloat(bbh);
    const bbwInt = parseFloat(bbw);
    const bblInt = parseFloat(bbl);
    const bbtInt = parseFloat(bbt);

    // const xCoordinate = (bbwInt * vw + bblInt * vw) / 2;
    // const yCoordinate = (bbhInt * vh + bbtInt * vh) / 2;

    // const xCoordinate = bblInt * vw + (bbwInt * vw - bblInt * vw) / 2;
    // const yCoordinate = bbtInt * vh + (bbhInt * vh - bbtInt * vh) / 2;
    // const yCoordinate = bbtInt * vh + (bbhInt * vh) / 2;

    const xCoordinate = bblInt * vw + (bbwInt * vw) / 2;
    const yCoordinate = bbtInt * vh + (bbhInt * vh) / 2;

    // right - left/2 + left
    // bottom -top/2 + top
    // let adjustedWidth = (20 / vw) * 100;
    // let adjustedHeight = (20 / vh) * 100;

    // const x = bbl * 100;
    // const y = bbt * 100;
    const x = (xCoordinate / vw) * 100;
    const y = (yCoordinate / vh) * 100;
    // console.log(x, y);

    // let x = bbl * 100;
    // let y = bbt * 100;

    // console.log(x, y);

    return { x, y };
    // return { x: x.toString(), y: y.toString() };
    // return <Tag leftPos="50" topPos="70" title="shirt" price="500" />;
  }; // };

  if (!isDesktop) {
    return (
      <div className="warningMessage">
        <p>Please use a desktop device to access this application.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <Head>
        <title>Edekee</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="previewVideo">
        <div
          className="videoContainer"
          id="videoContainer"
          style={
            isPortrait
              ? videoContainerPortraitStyles
              : videoContainerLandscapeStyles
          }
        >
          {showOverlay && (
            <div
              onClick={() => {
                document.getElementById("previewVideo").play();
              }}
              className="overlay"
            >
              Yellow Jackets | Paramount+
            </div>
          )}
          <video
            // src="/em.mp4"
            // src="https://firebasestorage.googleapis.com/v0/b/netflix-clone-ca468.appspot.com/o/video_1.mp4?alt=media&token=f038ad30-3f1c-4054-96f9-abfe8c803f30"
            autoPlay
            // muted
            controls
            // loop
            // playsInline
            id="previewVideo"
            style={{
              aspectRatio: aspectRatioValue,
            }}
            // ref={videoRef}
            // onCanPlay={(e) => {
            //   getDimensions(e);
            // }}
            onPlay={() => {
              handlePlay();
              setShowOverlay(false);
            }}
            onPause={(e) => {
              handleShowTag(e);
              setShowOverlay(true);
            }}
          >
            <source
              src="https://firebasestorage.googleapis.com/v0/b/reddit-clone-49ba5.appspot.com/o/YellowJacketCut1%20.mp4?alt=media&token=e754f09e-038f-45cb-8c5b-566ce2c03301"
              // src="https://firebasestorage.googleapis.com/v0/b/reddit-clone-49ba5.appspot.com/o/reel.mp4?alt=media&token=a37c77ea-18fd-4484-87f7-3bd8c45abf84"
              type="video/mp4"
            ></source>
          </video>
          {/* <Tag topPos={50} leftPos={10} /> */}

          {tagArray &&
            tagArray.map((tag, i) => {
              // console.log(tag);

              // const coordinates = getCoordinates(
              //   tag.boundingBoxHeight, // bottom
              //   tag.boundingBoxWidth, // right
              //   tag.boundingBoxLeft,
              //   tag.boundingBoxTop,
              //   currentVideoWidth,
              //   currentVideoHeight
              // );
              // console.log(coordinates);
              // console.log(`this is called ${x} times`);

              return (
                <Tag
                  key={tag.boundingBoxLeft * i}
                  delay={i}
                  leftPos={tag.x * 100}
                  topPos={tag.y * 100}
                  link={tag.productLink}
                  // leftPos={coordinates.x}
                  // topPos={coordinates.y}
                  // id={tag.product_id}
                  // title={tag.label}
                  // price={tag.price}
                  id={i}
                  title={tag.label}
                  price={tag.price}
                  image={tag.image}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
