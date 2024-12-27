import { Icon } from "@iconify/react";
import React from "react";
import SectionHeading from "./SectionHeading";
import Ratings from "./Ratings";

const servicesData = {
  sectionHeading: {
    miniTitle: "What I Do",
    title: "My Services",
  },
  allService: [
    {
      icon: "bi:code-slash",
      title: "Frontend Development",
      subTitle:
        "Building responsive and interactive user interfaces using React.js, Tailwind CSS, and modern JavaScript",
      ratings: 5,
      imgUrl: "/images/services/frontend.jpg",
    },
    {
      icon: "bi:server",
      title: "Backend Development",
      subTitle:
        "Creating robust server-side applications using Node.js, Express.js, and MongoDB",
      ratings: 5,
      imgUrl: "/images/services/backend.jpg",
    },
    {
      icon: "bi:database",
      title: "Database Design",
      subTitle:
        "Designing and implementing efficient database solutions with MongoDB and MySQL",
      ratings: 4,
      imgUrl: "/images/services/database.jpg",
    },
    {
      icon: "bi:gear",
      title: "API Development",
      subTitle:
        "Creating secure and scalable RESTful APIs with authentication and authorization",
      ratings: 4,
      imgUrl: "/images/services/api.jpg",
    },
  ],
};

export default function Service() {
  return (
    <section className="section bg-white dark:bg-gray-900" id="services">
      <div className="container">
        <SectionHeading
          miniTitle={servicesData.sectionHeading.miniTitle}
          title={servicesData.sectionHeading.title}
        />
        <div className="row gy-5">
          {servicesData.allService?.map((item, index) => (
            <div className="col-sm-6 col-lg-3" key={index}>
              <div
                className="services-box bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                style={{ backgroundImage: `url(${item.imgUrl})` }}
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay={index * 100}
              >
                <div className="services-body p-6">
                  <div className="icon text-4xl text-primary mb-4">
                    <Icon icon={item.icon} />
                  </div>
                  <h5 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {item.title}
                  </h5>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {item.subTitle}
                  </p>
                  <div className="rating-wrap">
                    <Ratings ratings={item.ratings} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
