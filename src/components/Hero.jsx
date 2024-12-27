import { Icon } from "@iconify/react";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
import SocialBtns from "./SocialBtns";

const portfolioData = {
  imgUrl: "/images/My_Images/1708945619477.jpg",
  name: "CHERKAOUI FATIMA ZAHRA",
  heading: "Full Stack Developer",
  typingText: [
    "React.js Developer",
    2000,
    "Node.js Developer",
    2000,
    "Express.js Developer",
    2000,
    "MongoDB Specialist",
    2000,
  ],
  description:
    "Passionate full stack developer specializing in modern web technologies including React.js, Node.js, Express.js, and MongoDB. Experienced in building responsive web applications with a focus on user experience and scalable architecture.",
  btnText: "View My Work",
  btnUrl: "projects",
};

const socialData = [
  {
    icon: "bi:github",
    url: "https://github.com/CHERKAOUIfatimazahra",
  },
  {
    icon: "bi:linkedin",
    url: "https://linkedin.com/in/fatimazahra-cherkaoui",
  },
  {
    icon: "bi:envelope",
    url: "mailto:cherkaoui.fatimazahra97@gmail.com",
  },
];

export default function Hero() {
  return (
    <section
      className="home-section mb-16 bg-gradient-to-r from-purple-700 to-purple-400 dark:from-purple-900 dark:to-black text-white"
      id="home"
      data-scroll-index={0}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Texte du côté gauche */}
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="hs-text-box">
              <h6
                className="text-lg font-semibold text-purple-200"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <span>{portfolioData.name}</span>
              </h6>

              <h1
                className="text-4xl font-bold text-white"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                {portfolioData.heading}
              </h1>
              <h2
                className="text-3xl font-medium mt-4 text-gray-300"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <TypeAnimation
                  sequence={portfolioData.typingText}
                  speed={0}
                  repeat={Infinity}
                />
              </h2>
              <p
                className="text mt-6 text-gray-300"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                {portfolioData.description}
              </p>
              <div
                className="btn-bar d-flex align-items-sm-center flex-column flex-sm-row mt-6"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                {/* Bouton principal */}
                <ScrollLink
                  to={portfolioData.btnUrl}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="px-btn bg-white text-purple-700 hover:bg-gray-100 transition-all rounded-full px-6 py-3 flex items-center font-medium shadow-lg"
                >
                  <span>{portfolioData.btnText}</span>
                  <i className="d-flex ml-2">
                    <Icon icon="bi:arrow-right" />
                  </i>
                </ScrollLink>
                {/* Boutons sociaux */}
                <SocialBtns
                  socialBtns={socialData}
                  variant="ps-sm-4 pt-4 pt-sm-0 d-flex justify-content-center justify-content-sm-start"
                />
              </div>
            </div>
          </div>
          {/* Image côté droit */}
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div
              className="hs-banner flex justify-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <img
                src={portfolioData.imgUrl}
                alt="Profile"
                className="rounded-lg shadow-lg max-w-full border-4 border-purple-600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
