import { Icon } from "@iconify/react";
import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import Slider from "react-slick";
import Modal from "./Modal";

const projectsData = {
  sectionHeading: {
    miniTitle: "My Work",
    title: "Recent Projects",
  },
  allProjects: [
    {
      title: "AlloMedia",
      subTitle: "Delivery Application",
      thumbUrl: "/images/projects/allomedia.jpg",
      description:
        "A comprehensive delivery application featuring a user-friendly client interface and admin portal for order and user management. Built with Node.js, Express.js, MongoDB, and React.js.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "React.js",
        "JWT",
        "2FA",
        "AWS SNS",
      ],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "EventSportify",
      subTitle: "Sports Event Management System",
      thumbUrl: "/images/projects/eventsportify.jpg",
      description:
        "A web application for managing sports events, featuring event creation, participant registration, automated list generation, and secure authentication using JWT.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "React.js",
        "Vite",
        "Tailwind CSS",
        "Docker",
      ],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AFRITSY Project",
      subTitle: "Member Management Platform",
      thumbUrl: "/images/projects/afritsy.jpg",
      description:
        "Developed full-stack functionality for member, project, and service management with advanced search and pagination features.",
      technologies: ["Laravel", "React.js", "MySQL", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ],
};

export default function Projects() {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState("image");
  const [modalData, setModalData] = useState({});

  const handelProjectDetails = (item, itemType) => {
    setModalData(item);
    setModalType(itemType);
    setModal(!modal);
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
  };

  return (
    <>
      <section
        className="project-section section bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
        id="project"
      >
        <div className="container">
          <SectionHeading
            miniTitle={projectsData.sectionHeading.miniTitle}
            title={projectsData.sectionHeading.title}
          />
          <div
            className="full-width"
            data-aos="fade"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <Slider {...settings} className="slider-gap-24">
              {projectsData.allProjects?.map((item, index) => (
                <div key={index} style={{ width: "416px" }}>
                  <div className="project-box bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                    <div className="project-media">
                      <img
                        src={item.thumbUrl}
                        alt={item.title}
                        className="rounded-t-lg"
                      />
                      <span
                        className="gallery-link"
                        onClick={() => handelProjectDetails(item, "image")}
                      >
                        <i>
                          <Icon icon="bi:plus" />
                        </i>
                      </span>
                    </div>
                    <div className="project-body p-4">
                      <div className="text">
                        <h5 className="text-xl font-bold text-gray-800 dark:text-white">
                          {item.title}
                        </h5>
                        <span className="text-gray-600 dark:text-gray-300">
                          {item.subTitle}
                        </span>
                      </div>
                      <div className="link">
                        <span
                          className="p-link cursor-pointer text-primary hover:text-purple-600"
                          onClick={() => handelProjectDetails(item, "details")}
                        >
                          <Icon icon="bi:arrow-right" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      {modal && (
        <div className="mfp-wrap">
          <div className="mfp-container">
            <div className="mfp-bg" onClick={() => setModal(!modal)}></div>
            <div className="mfp-content">
              <button
                type="button"
                className="mfp-close"
                onClick={() => setModal(!modal)}
              >
                ×
              </button>
              {modalType === "image" ? (
                <img src={modalData.thumbUrl} alt={modalData.title} />
              ) : (
                <Modal modalData={modalData} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
