import React from "react";
import aboutMe from "../images/aboutMe.jpg";
import about1 from "../images/about1.jpg";
import about2 from "../images/about2.jpg";
import about3 from "../images/about3.jpg";
import about4 from "../images/about4.jpg";
import about6 from "../images/about6.jpg";
import about7 from "../images/about7.jpg";
import about8 from "../images/about8.jpg";
import about9 from "../images/about9.jpg";

function About() {
  return (
    <div className="pageStyle" id="aboutStyle">
      <style>
        {`
          @keyframes colorChange {
            0% {
              color: #A7D8D8; 
            }
            33% {
              color: #F5A7B8; 
            }
            66% {
              color: #F5D29A;
            }
            100% {
              color: #A7D8D8;
            }
          }
        `}
      </style>

      <section className="sectionStyle" id="aboutSection">
        <div className="textStyle">
          <h1 className="titleStyle">Hi, I'm Aya!</h1>
          <p>
            I’m currently a second-year student in Website Design & Development
            at SAIT. My journey into this field comes after working in the
            kitchen for a while, but my passion for the arts has always driven
            me to pursue something beyond the culinary world.<br></br>
            <br></br>
            I’m also a huge animal lover with 3 cats and 2 dogs back home in the
            Philippines! When I’m not immersed in tech, you’ll find me outdoors
            (snowboarding, camping, or just being out there), traveling, trying
            new cuisines, or capturing moments through photography. In the past
            years I have been focusing on career growth but I am trying to take
            a step back and have been focusing on staying present and fully
            enjoying each experience.
            <br></br>
            <br></br>
            While what I do is still a work in progress, I’m excited to share it
            with you, and I hope you enjoy it as much as I do creating it!
          </p>
        </div>
        <img src={aboutMe} alt="About Me"/>
      </section>

    
      <section className="aboutgalleryStyle">
        <img src={about1} alt="snowboarding" />
        <img src={about2} alt="family in japan" />
        <img src={about3} alt="with justin" />
        <img src={about4} alt="mom and dad at santa monica" />
        <img src={about6} alt="supernintendo world with my sister" />
        <img src={about7} alt="tokyo at night" />
        <img src={about8} alt="golden gate bridge with family" />
        <img src={about9} alt="seven magic mountains with family"/>
      </section>
    </div>
  );
}

export default About;
