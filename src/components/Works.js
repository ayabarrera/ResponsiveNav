import React from "react";
import southbank2 from "../images/southbank2.png";
import southbank1 from "../images/southbank1.png";
import southbank3 from "../images/southbank3.png";
import southbank4 from "../images/southbank4.png";
import floralfinds1 from "../images/floralfinds1.png";
import floralfinds2 from "../images/floralfinds2.png";
import floralfinds3 from "../images/floralfinds3.png";
import floralfinds4 from "../images/floralfinds4.png";
import floralfinds5 from "../images/floralfinds5.png";
import travelogue1 from "../images/travelogue1.png";
import travel2 from "../images/travel2.png";
import travel3 from "../images/travel3.png";
import travel4 from "../images/travel4.png";

function Work() {
  return (
    /*for southbank*/
    <div className="pagestyle">
      <section className="sectionstyle" id="southbankSection">
        <div className="textStyle">
          <h1>1. Southbank Cafe + Lounge</h1>
          <p>
            For our website communications class, during my 1st year, we were
            tasked with redesigning a website using no-code website builders. I
            chose Wix due to its user-friendly interface and ease of learning at
            the time.
            <br />
            <br />
            The website I focused on was for <b>Southbank Cafe + Lounge</b>, a
            restaurant located in the Philippines. Since the restaurant is owned
            by my cousin, I was motivated to make their online presence more
            intuitive and visually aligned with the brand’s identity. <br />
            <br />
            To enhance the user experience, I incorporated more high-quality
            images to showcase what Southbank has to offer, giving visitors a
            better sense of the ambiance and menu items. I also redesigned the
            footer to make it easier for users to find the locations of the
            different branches.
            <br />
            <br />
            One major improvement was the redesign of the menu. Originally,
            visitors had to download the menu, which disrupted the browsing
            experience. I streamlined this by making the menu directly
            accessible on the website, improving convenience and usability. In
            addition to these design changes, I highlighted the restaurant’s
            achievements and included more relevant information to provide a
            richer, more cohesive brand experience. <br />
            <br />
            The overall redesign reflects Southbank's unique vibe and makes the
            website more user-friendly and visually appealing. This project was
            particularly enjoyable for me, as I’m passionate about the
            restaurant and believe that a well-designed website can
            significantly contribute to its business success.
          </p>
          <p>
            You can check out the live site from Wix here:{" "}
            <a
              href="https://alyannabarrera.wixsite.com/southbank"
              target="_blank"
              rel="noopener noreferrer"
            >
              Southbank Cafe + Lounge
            </a>
          </p>
        </div>
        <img src={southbank2} alt="Project" />
      </section>

      <section className="galleryStyle">
        <div>
          <h3>Original hero image</h3>
          <img src={southbank1} alt="Before Redesign" />
        </div>
        <div>
          <h3>Redesigned hero image</h3>
          <img src={southbank2} alt="After Redesign" />
        </div>
        <div>
          <h3>Original menu section</h3>
          <img src={southbank3} alt="Before Redesign" />
        </div>
        <div>
          <h3>Redesigned menu section</h3>
          <img src={southbank4} alt="After Redesign" />
        </div>
      </section>

      <hr />

      <section className="reverseSectionStyle" id="floralfindsSection">
        <div className="textStyle">
          <h1>2. Floral Finds</h1>
          <p>
            For our website communications class, during my 2nd year, we had to
            create an e-commerce website from scratch - just with HTML / CSS /
            Javascript. <br></br>
            <br></br>
            My group and I created Floral Finds and our goal was to create a
            visually appealing website that showcases Floral Finds' products and
            make it easy for their customers to explore all the services being
            offered. We focused on a clean, modern design with images of the
            flowers or bouquets being offered. We've included reviews from
            customers, FAQ's and a "plant care guide" within the website.
            <br></br>
            <br></br>
            This project was a little bit more challenging as we had to create a
            website without using any no-code website builder. Although I can
            say, it was a great feeling when we were able to debug and make the
            website work as how we envisioned it to be.
          </p>
          <p>
            You can check out the live site here:{" "}
            <a
              href="https://ayabarrera.github.io/FloralFinds_cprg218/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Floral Finds
            </a>
          </p>
        </div>
        <img src={floralfinds1} alt="Floral Finds" />
      </section>

      <section className="galleryStyle">
        <div>
          <img src={floralfinds2} alt="cards for bouquet" />
        </div>
        <div>
          <img src={floralfinds3} alt="customer reviews" />
        </div>
        <div>
          <img src={floralfinds4} alt="frequently asked questions" />
        </div>
        <div>
          <img src={floralfinds5} alt="care guide" />
        </div>
      </section>

      <hr />

      <section className="sectionstyle" id="travelogueSection">
        <div className="textStyle">
          <h1>3. My Travelogue</h1>
          <p>
            For our website communications class, during my 2nd year, we had to
            create an e-commerce website from scratch - just with HTML / CSS /
            Javascript. <br></br>
            <br></br>
            My group and I created Floral Finds and our goal was to create a
            visually appealing website that showcases Floral Finds' products and
            make it easy for their customers to explore all the services being
            offered. We focused on a clean, modern design with images of the
            flowers or bouquets being offered. We've included reviews from
            customers, FAQ's and a "plant care guide" within the website.
            <br></br>
            <br></br>
            This project was a little bit more challenging as we had to create a
            website without using any no-code website builder. Although I can
            say, it was a great feeling when we were able to debug and make the
            website work as how we envisioned it to be.
          </p>
          <p>
            You can check out the live site here:{" "}
            <a
              href="https://ayabarrera.github.io/TravelogueBarrera/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alyanna's Travelogue
            </a>
          </p>
        </div>
        <img src={travelogue1} alt="Travelogue Header" />
      </section>

      <section className="galleryStyle">
        <div>
          <img src={travel2} alt="Before Redesign" />
        </div>
        <div>
          <img src={travel3} alt="After Redesign"  />
        </div>
        <div>
          <img src={travel4} alt="Before Redesign" />
        </div>
      </section>
    </div>
  );
}

export default Work;
