import React from "react";
import SectionHeading from "./SectionHeading";

const experienceData = {
  sectionHeading: {
    miniTitle: "Experience",
    title: "Work Experience & Education",
  },
  allExperience: [
    {
      designation: "Full Stack Developer (Intern)",
      company: "AFRITSY",
      duration: "Mai 2024 - Juillet 2024",
      jobType: "Stage",
      companyTitle: "Full Stack Web Development",
      companyDescription:
        "Développement du backend avec Laravel et du frontend avec React.js. Mise en place des fonctionnalités CRUD pour la gestion des membres, projets, pays et services. Intégration de la pagination et de la recherche avancée. Conception d'interfaces responsives avec Tailwind CSS.",
    },
    {
      designation: "Développeur Full Stack",
      company: "YouCode/UM6P",
      duration: "2023 - Présent",
      jobType: "Formation",
      companyTitle: "Formation Développement Full Stack",
      companyDescription:
        "Formation intensive en développement web full stack, travail sur des projets réels comme AlloMedia (application de livraison) et EventSportify (système de gestion d'événements sportifs). Technologies principales : Node.js, Express.js, MongoDB, React.js, Docker.",
    },
    {
      designation: "Stage Laboratoire",
      company: "Hôpital Militaire OUED EDDAHAB",
      duration: "Décembre 2022 - Mai 2023",
      jobType: "Stage",
      companyTitle: "Laboratoire d'Analyses Médicales",
      companyDescription:
        "Stage au service du laboratoire d'analyses médicales, développant des compétences en analyse et gestion de données.",
    },
    {
      designation: "Licence Sciences de la Vie",
      company: "Faculté des Sciences, Agadir",
      duration: "2015 - 2020",
      jobType: "Formation",
      companyTitle: "Biotechnologies et Amélioration des Plantes",
      companyDescription:
        "Formation en sciences de la vie avec spécialisation en biotechnologies, combinant des compétences analytiques et scientifiques qui enrichissent ma perspective en développement logiciel.",
    },
  ],
};

export default function Experience() {
  return (
    <section className="section bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container">
        <SectionHeading
          miniTitle={experienceData.sectionHeading.miniTitle}
          title={experienceData.sectionHeading.title}
        />
        <div className="row gy-3">
          {experienceData.allExperience?.map((item, index) => (
            <div
              className="col-12"
              key={index}
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay={index * 100}
            >
              <div className="ex-box bg-black dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div className="row gy-4">
                  <div className="col-md-4 col-lg-3">
                    <div className="ex-left border-r border-gray-200 dark:border-gray-700 pr-4">
                      <h4 className="text-xl font-bold text-primary mb-2">
                        {item.designation}
                      </h4>
                      <span className="text-lg text-gray-700 dark:text-gray-300 block mb-2">
                        {item.company}
                      </span>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        {item.duration}
                      </p>
                      <label className="inline-block px-3 py-1 rounded-full text-sm bg-gradient-to-r from-primary to-purple-600 dark:from-primary dark:to-purple-400 text-white">
                        {item.jobType}
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8 col-lg-9">
                    <div className="ex-right pl-4">
                      <h5 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                        {item.companyTitle}
                      </h5>
                      <p className="text-gray-600 dark:text-gray-300 m-0">
                        {item.companyDescription}
                      </p>
                    </div>
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
