import React from "react";
// import AWSImg from "../img/aws_img.png";
//import FreeImg from '../img/free_img.png'
// import IBMImg from "../img/ibm_img.png";
// import GoogleImg from "../img/google_img.png";
// import MicrosoftImg from "../img/ms_img.png";
import "../index.css";

const posts = [
  {
    id: 1,
    company: "SUICIDE PREVENTION",
    // location: "Earn a learning Badge",
    jobTitle: " SUICIDE PREVENTION",
    // employmentType: "Duration: 13hrs 35m",
    description:
      "Call or text 988 or chat online  to connect with a trained crisis counselor. The Lifeline provides 24-hour, confidential support to anyone in suicidal crisis or emotional distress. You can reach a specialized LGBTQI+ affirming counselor by texting “Q” to 988 or by calling 988 and pressing “3.”",
    // salary: "FREE",
    // image: SP,
  },

  {
    id: 2,
    company: "Disaster Distress Helpline.",
    location: "Earn Level 2 badge",
    jobTitle: "Big Data 01",
    employmentType: "Duration: 3hrs",
    description:
      "Call or text 1-800-985-5990. The Disaster Distress Helpline provides immediate crisis counseling for people experiencing emotional distress related to any natural or human-caused disaster. The 24-hour, confidential helpline offers interpretation services in more than 100 languages.",
    salary: "FREE",
    // image: IBMImg,
  },

  {
    id: 3,
    company: "How can I find a health care provider or treatment?",
    location: "via classcentral.com",
    jobTitle: "Artificial Intelligence on Microsoft Azure",
    employmentType: "Duration: 1 week",
    description:
      "Primary care provider: A primary care provider can perform an initial mental health screening and refer you to a mental health professional (such as a social worker, psychologist, or psychiatrist). If you have an appointment with a primary care provider, consider bringing up your mental health concerns and asking for help.",
    salary: "FREE",
    // image: MicrosoftImg,
  },

  {
    id: 4,
    company: "MENTAL HEALTH SUPPORT RESOURCES",
    location: "via classcentral.com",
    jobTitle: "Network Security & Database Vulnerabilities",
    employmentType: "Duration: 15hrs",
    description:
      "United for Global Mental health is not a provider of mental health support services or guidance. If you feel you are in need of mental health support, please seek appropriate support from your local health care facility, community groups which specialise in mental health, or a national helpline if one is available.",
    salary: "FREE",
    // image: IBMImg,
  },

  {
    id: 5,
    company: "Mental Health Blog by WHO",
    location: "via classcentral.com",
    jobTitle: "Prepare for Google Cloud professional Data Engineer",
    employmentType: "Duration: 6 weeks",
    description:
      "WHO estimates that the burden of mental health problems in India is 2443 disability-adjusted life years (DALYs) per 100 00 population; the age-adjusted suicide rate per 100 000 population is 21.1. The economic loss due to mental health conditions, between 2012-2030, is estimated at USD 1.03 trillion.",
    salary: "FREE",
    // image: GoogleImg,
  },

  {
    id: 6,
    company: "Mental health in emergencies",
    location: "via classcentral",
    jobTitle: "Introduction to Computer and Operating Systems & Security",
    employmentType: "Duration: 14hrs",
    description:
      "Most people affected by emergencies will experience distress (e.g. feelings of anxiety and sadness, hopelessness, difficulty sleeping, fatigue, irritability or anger and/or aches and pains).This is normal and will for most people improve over time. However, the prevalence of common mental disorders such as depression and anxiety is expected to more than double in a humanitarian crisis.",
    salary: "FREE",
    // image: MicrosoftImg,
  },
  {
    id: 7,
    company: "Mental health and forced displacement",
    location: "via classcentral",
    jobTitle: "Introduction to Computer and Operating Systems & Security",
    employmentType: "Duration: 14hrs",
    description:
      "There were an estimated 272 million international migrants in 2019 (1). Refugees, asylum seekers and irregular migrants are of special concern and need protection and support.Migrants and refugees can be exposed to various stress factors which affect their mental health and well-being before and during their migration journey and during their settlement and integration.",
    salary: "FREE",
    // image: MicrosoftImg,
  },
  {
    id: 8,
    company: "Mental health at work",
    location: "via classcentral",
    jobTitle: "Introduction to Computer and Operating Systems & Security",
    employmentType: "Duration: 14hrs",
    description:
      "15% of working-age adults were estimated to have a mental disorder in 2019.Globally, an estimated 12 billion working days are lost every year to depression and anxiety at a cost of US$ 1 trillion per year in lost productivity.",
    salary: "FREE",
    // image: MicrosoftImg,
  },
  {
    id: 9,
    company: "Mental health of adolescents",
    description:
      "Globally, one in seven 10-19-year-olds experiences a mental disorder, accounting for 13% of the global burden of disease in this age group.Depression, anxiety and behavioural disorders are among the leading causes of illness and disability among adolescents.Suicide is the fourth leading cause of death among 15-29 year-olds.",
  },
];

const Blogs = () => {
  const isMediumScreen = window.innerWidth >= 768;

  const handleEnrollClick = (post) => {
    let link = " ";
    if (post.id === 1) {
      link =
        "https://aws.amazon.com/training/learn-about/cloud-practitioner/?th=tile&tile=learnabout";
    } else if (post.id === 2) {
      link = "https://cognitiveclass.ai/courses/what-is-big-data";
    } else if (post.id === 3) {
      link =
        "https://www.classcentral.com/course/artificial-intelligence-microsoft-azure-43806";
    } else if (post.id === 4) {
      link =
        "https://www.classcentral.com/course/network-security-database-vulnerabilitie-13873";
    } else if (post.id === 5) {
      link =
        "https://www.classcentral.com/course/preparing-cloud-professional-data-engine-12822";
    } else if (post.id === 6) {
      link =
        "https://www.classcentral.com/course/introduction-to-computers-and-operating-systems-a-200521";
    } else {
      console.log("Post not found");
    }

    window.open(link, "_blank");
  };

  const visiblePosts = isMediumScreen ? posts.slice(0, 8) : posts.slice(0, 3);

  return (
    <div className="w-full bg-[EDF1F6]">
      <div className="p-9 h-full">
        <p
          className="text-[1.8rem] font-semibold text-center"
          style={{ marginBottom: "1.5rem" }}
        >
          <span className="text-lightPrimary">Freelance Ready </span>Resources
        </p>

        <div className="h-full w-full grid md:grid-cols-3 gap-9 my-6 md:px-16">
          {visiblePosts.map((post) => (
            <div
              key={post.id}
              className="md:w-300 p-8 min-w-260 bg-lightCard backdrop-blur-md rounded-3xl flex flex-col justify-center drop-shadow-lg gap-4 hover:scale-105 transition-all duration-300"
            >
              {/*<img src="frontend/src/img/free_img.png" alt="corner-image" className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 object-cover"/>*/}

              <div className="flex">
                <img
                  src={post.image}
                  alt="logo"
                  className="w-9 h-9 md:w-12 md:h-12 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                />
                <div className="mx-3">
                  <p className="md:text-[1rem] text-[0.8rem] font-medium hover:text-lightPrimary hover:underline">
                    {post.company}
                  </p>
                  <p className="md:text-[0.7rem] text-[0.6rem] text-lighttextGray">
                    {post.location}
                  </p>
                </div>
              </div>
              <div>
                <p className="font-semibold">{post.jobTitle}</p>
                <p className="text-[0.7rem] text-lighttextGray">
                  {post.employmentType}
                </p>
              </div>
              <p className="text-[0.7rem] text-justify font-medium">
                {post.description}
              </p>
              <div className="flex justify-between pb-4 gap-3">
                <p className="text-[0.7rem] text-lighttextGray">
                  <span className="text-xl font-bold text-lightModeTextColor">
                    {post.salary}
                  </span>
                </p>

                <div
                  className="md:text-[0.9rem] text-[0.7rem] rounded-lg bg-lightBgBlue py-2 px-5 text-lightPrimary font-medium hover:shadow-lg duration-100 transition-all ease-in-out cursor-pointer"
                  onClick={() => handleEnrollClick(post)}
                >
                  Enroll Now
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="md:text-[lg] text-sm text-right text-lightPrimary cursor-pointer hover:text-lightModeTextColor">
          View all
        </p>
      </div>
    </div>
  );
};

export default Blogs;
