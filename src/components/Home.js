import React from "react";
import heroImg from "../images/heroImg.jpg";
import work1 from "../images/work1.jpg";
import work2 from "../images/work2.png";
import work3 from "../images/work3.jpg";
import work4 from "../images/work4.jpg";
import work5 from "../images/work5.jpg";
import work6 from "../images/work6.jpg";
import work8 from "../images/work8.jpg";
import work9 from "../images/work9.jpg";
import work10 from "../images/work10.jpg";
import work11 from "../images/work11.jpg";
import work12 from "../images/work12.jpg";
import work13 from "../images/work13.jpg";
import work14 from "../images/work14.jpg";

const imagePaths = [
  work1,
  work2,
  work3,
  work5,
  work4,
  work8,
  work6,
  work9,
  work10,
  work11,
  work12,
  work13,
  work14,
];

function Home() {
  const imagePreviewStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease",
  };

  const largeImageStyle = {
    ...imagePreviewStyle,
    gridColumn: "span 3",
  };

  const twoColumnImageStyle = {
    ...imagePreviewStyle,
    gridColumn: "span 2",
  };

  const handleHover = (event, isHover) => {
    if (isHover) {
      event.target.style.transform = "scale(1.05)";
      event.target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.4)";
      event.target.style.filter = "brightness(0.8) hue-rotate(15deg)";
    } else {
      event.target.style.transform = "scale(1)"; // Normal size
      event.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)"; // Light shadow
      event.target.style.filter = "none";
    }
  };

  return (
    <div className="pageStyle">
      <section className="homesectionStyle">
        <img src={heroImg} alt="Hero" />
      </section>

      <section className="galleryStyle">
        {imagePaths.map((image, index) => {
          let imageStyle = imagePreviewStyle;
          let gridColumnStyle = "auto";

          if (index === 0 || index === 4) {
            imageStyle = largeImageStyle;
            gridColumnStyle = "span 3";
          } else if (index === 8) {
            imageStyle = twoColumnImageStyle;
            gridColumnStyle = "span 2";
          } else if (index === 9) {
            gridColumnStyle = "auto";
          }

          return (
            <div key={index} style={{ gridColumn: gridColumnStyle }}>
              <img
                src={image}
                alt={`Work ${index + 1}`}
                style={imageStyle}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Home;
