import React from "react";
import SocialBtns from "./SocialBtns";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const contactData = {
  sectionHeading: {
    title: "Let's Work Together",
    subTitle:
      "Je suis disponible pour des projets freelance et des opportunités à temps plein. N'hésitez pas à me contacter pour discuter de vos besoins.",
  },
  contactImg: "/images/avatar.jpg",
  contactInfo: [
    {
      icon: "bi:geo-alt",
      title: "Location",
      text: "Agadir, Maroc",
      url: "#",
    },
    {
      icon: "bi:envelope",
      title: "Email",
      text: "cherkaoui.fatimazahra97@gmail.com",
      url: "mailto:cherkaoui.fatimazahra97@gmail.com",
    },
    {
      icon: "bi:phone",
      title: "Téléphone",
      text: "06 43 26 93 12",
      url: "tel:+212643269312",
    },
  ],
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

export default function Contact() {
  return (
    <section
      id="contactus"
      className="section bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container">
        <div className="contactus-box rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-xl">
          <div className="row g-0 p-4 p-lg-5">
            <div className="col-lg-4" />
            <div className="col-lg-8">
              <div
                className="contactus-title"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <h5 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                  {contactData.sectionHeading.title}
                </h5>
                <p className="text-gray-600 dark:text-gray-300 m-0">
                  {contactData.sectionHeading.subTitle}
                </p>
              </div>
            </div>
          </div>
          <div className="row g-0 contactus-form p-4 p-lg-5 flex-row-reverse">
            <div className="col-lg-8">
              <div className="contact-form bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <ContactForm />
              </div>
            </div>
            <div className="col-lg-4 pe-md-5">
              <div className="contact-banner d-none d-lg-block mb-8">
                <img
                  src={contactData.contactImg}
                  alt="Profile"
                  className="rounded-lg shadow-lg max-w-full"
                />
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                <ContactInfo contactInfoData={contactData.contactInfo} />
              </div>
              <div className="mt-6">
                <SocialBtns
                  socialBtns={socialData}
                  variant="flex gap-4 justify-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
