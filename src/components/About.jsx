import { Icon } from '@iconify/react';
import React from 'react';
import parser from 'html-react-parser';
import { Link as ScrollLink } from 'react-scroll';

const aboutData = {
  imgSrc: "/images/My_Images/1708945619477.jpg",
  miniTitle: "About Me",
  title:
    "Full Stack Developer with a Focus on <span class='text-gradient'>Modern Web Technologies</span>",
  description:
    "Full Stack Developer with expertise in Node.js, Express.js, MongoDB, and React.js. Graduate of YouCode/UM6P with a background in biotechnology. I combine technical expertise with strong problem-solving skills and a focus on creating user-friendly applications. Experienced in developing delivery applications and event management systems, with a keen interest in creating scalable web solutions.",
  funfacts: [
    {
      number: "3",
      title: "Projects Completed",
    },
    {
      number: "5",
      title: "Technologies Mastered",
    },
    {
      number: "2",
      title: "Years Experience",
    },
  ],
  btnText: "View My Work",
  btnUrl: "portfolio",
};

export default function About() {
  return (
    <section className="about-section section" id="about">
      <div className="container">
        <div className="effect-1">
          <img
            src="/images/effect-1.svg"
            alt="Shape"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="500"
          />
        </div>
        <div className="effect-2">
          <img
            src="/images/effect-2.svg"
            alt="Shape"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="400"
          />
        </div>
        <div className="row align-items-center justify-content-center gy-5">
          <div
            className="col-lg-6 col-xl-5"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="500"
          >
            <div className="about-banner text-center">
              <img src={aboutData.imgSrc} alt="About Me" className="rounded-lg shadow-xl" />
            </div>
          </div>
          <div className="col-lg-6 col-xl-5 px-lg-5">
            <div
              className="about-text"
              data-aos="fade"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="section-heading">
                {aboutData.miniTitle && (
                  <h6 className="text-gradient">
                    <span>{aboutData.miniTitle}</span>
                  </h6>
                )}

                {aboutData.title && <h2>{parser(aboutData.title)}</h2>}
              </div>
              <p className="text-gray-600 dark:text-gray-300">{aboutData.description}</p>
              <div className="review-box">
                {aboutData.funfacts?.map((item, index) => (
                  <div className="r-box bg-black dark:bg-gray-800 shadow-lg rounded-lg p-4" key={index}>
                    <h3 className="text-gradient">
                      {item.number}
                      <span>+</span>
                    </h3>
                    <label className="text-gray-600 dark:text-gray-300">{item.title}</label>
                  </div>
                ))}
              </div>
              <div className="btn-bar mt-5">
                <ScrollLink
                  to={aboutData.btnUrl}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={300}
                  className="px-btn bg-gradient-to-r from-primary to-purple-600 dark:from-primary dark:to-purple-400 text-white hover:opacity-90 transition-all rounded-full px-6 py-3 flex items-center"
                >
                  <span>{aboutData.btnText}</span>{' '}
                  <i className="ml-2">
                    <Icon icon="bi:arrow-right" />
                  </i>
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}