import { SCENARIO, SCENARIO_CONTENT } from "../constants";

export const DUMMY_DB = {
  projects: [
    {
      url: "http://bloom.babdevs.com",
      title: "Bloom - Shop from luxury",
      ongoing: true,
      images: [
        "/images/BLOOM/img-lg.png",
        "/images/BLOOM/img-sm.png",
        "/images/BLOOM/img-sm-2.png",
      ],
      year: 2022,
      icon: "language",
      host: "IBM",
      type: "WEB",
      features: [
        "iBMCloud",
        "Cloudant",
        "Cloud foundary",
        "cloud functions",
        "CI/CD pipepline",
        "html",
        "css",
        "React",
        "Responsive",
        "Javascript",
        "Instanes: 2",
        "Github Actions",
      ],
      contributors: undefined,
    },

    {
      url: "http://portfolio.babdevs.com",
      title: "Portfolio - I am a developer",
      images: ["/images/self/img-md.png", "/images/self/img3.jpg","/images/self/img2.jpg"],
      year: 2022,
      ongoing: false,
      icon: "language",
      host: "IBM",
      type: "WEB",
      features: [
        "iBMCloud",
        "Cloudant",
        "kubernetes",
        "microservice",
        "cloud functions",
        "CI/CD pipepline",
        "html",
        "css",
        "React Native",
        "Responsive",
        "Docker",
        "Typescript",
        "Instance: 1",
        "GitHub Actions",
      ],
      contributors: [
        { Name: "Charliesommie", Link: "https://github.com/Charliesommie" },
        { Name: "thenakmonster", Link: "https://github.com/thenakmonster" },
        { Name: "vmisun", Link: "https://github.com/vmisun" },
      ],
    },

    {
      title: "Bank9ja - Mobile App ios/android",
      year: 2022,
      ongoing: true,
      url: 'https://github.com/faccon/bbank',
      images: ["/images/mobile/group.png", "/images/mobile/bbank1.jpg"],
      icon: "phone_iphone",
      host: "IBM",
      type: "WEB",
      features: [
        "React Native",
        "Google firebase",
        "Typescript",
        "Javascript",
        "Axios",
        "Redux",
        'Reanimated'
      ],
      contributors: undefined,
    },
    {
      title: "Automation with Python - Case study",
      year: 2021,
      ongoing: false,
      url: undefined,
      images: ["/images/python/smarthome.jpg", "/images/python/python.jpg"],
      scenario: SCENARIO,
      content: SCENARIO_CONTENT,
      icon: null,
      host: null,
      type: "python",
      Logo: "/images/certificates/python.png",
      features: [
        "iBMCloud",
        "Cloudant",
        "kubernetes",
        "microservice",
        "cloud functions",
        "CI/CD pipepline",
        "html",
        "css",
        "React Native",
        "Responsive",
        "Docker",
      ],
    },
  ],
  certifications: [
    {
      name: "Full Stack Cloud Developer",
      image_url: "/images/certificates/GMP.png",
      verify: "https://coursera.org/verify/professional-cert/UEGVCEZFG582",
      author: "IBM",
      Logo: "/images/certificates/IBM.png",
      badge: null,
    },

    {
      name: "IT Automation with Python",
      image_url: "/images/certificates/GMP.png",
      verify: "https://coursera.org/verify/professional-cert/UN2U8XRQFEK5",
      author: "Google",
      Logo: "images/certificates/Google.png",
      badge: "/images/certificates/GIPT_BADGE.png",
    },

    {
      name: "Project Management Professional",
      image_url: "/images/certificates/GMP.png",
      verify: "https://coursera.org/verify/professional-cert/2TB5WW2WMVSQ",
      author: "Google",
      Logo: "/images/certificates/Google.png",
      badge: "/images/certificates/GPMP_BADGE.png",
    },

    {
      name: "Msc. Metallic Materials Technology",
      badge: "/images/certificates/edu.png",
      image_url: "/images/certificates/edu.png",
      verify: null,
      author: "TU Freiberg, Germany",
      Logo: null,
    },
  ],
  skills: [
    "React",
    // IBM CLOUD
    "HTML",
    "CSS",
    "JavaScript",
    "Typescript",
    "Python",
    "GitHub",
    "GitHub actions",
    "Node.js",
    "Cloud Native practices",
    "DevOps",
    "CI/CD",
    "Containers",
    "Docker",
    "Kubernetes",
    "OpenShift",
    "Databases",
    "SQL",
    "NoSQL",
    "Django ORM",
    "Bootstrap",
    "Application Security",
    "Microservices",
    "Serverless computing",
    // Automation with Python subs
    "Computer Networking",
    "IT infrastructural Services",
    "IT Support",
    "Operating Systems",
    "Security",
    "System Administration",
    "Troubleshooting",
    "Debugging",
    "Automation with Python",
    // Project Management
    "Agile Project Management",
    "Budgeting And Procurement",
    "Effective Communication",
    "Process Improvement",
    "Project Management",
    "Project Scoping And Planning",
    "Risk Management",
    "Stakeholder Management",
    "Work Management Tools",
  ],
};
