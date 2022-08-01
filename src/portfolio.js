// Website related settings
const settings = {
  // isSplash: false, // Change this to true if you want to use the splash screen.
  // useCustomCursor: false, // Change this to false if you want the good'ol cursor
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Irakli Ivaneishvili",
  logo_name: "Irakli()",
  full_name: "Irakli Ivaneishvili",
  subTitle: "Frontend Developer. 🔥Always learning.",
  mail: "i.ivaneishvili9@gmail.com",
};

const socialMediaLinks = {
  /* Social Media Link */
  github: "https://github.com/irakli9909",
  linkedin: "https://www.linkedin.com/in/irakli-ivaneishvili-03094922a/",
  gmail: "i.ivaneishvili9@gmail.com",
  facebook: "https://www.facebook.com/iivaneishvili",
};

const skills = {
  data: [
    {
      title: "Front End Development",
      fileName: "FullStackImg",
      skills: ["⚡ Building responsive website front end using ReactJS"],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work & Internship",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for internships.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Development Work Experience",
      experiences: [
        {
          logo_path: "gdg.png",
          location: "I can work home and office ",
          description:
            "I have not development experience, But I have big goals in this field, let me start an internship in this direction and become a good member of your team. ",
          color: "#9285F4",
        },
      ],
    },

    {
      title: "Other Work Experience",
      experiences: [
        {
          title: "U G T",
          company: "LTD UGT",
          company_url: "https://ugt.ge/",
          logo_path: "valora.svg",
          duration: "Aug 2017 - Mar 2018",
          location: "Office",
          description: `IT supporter in 10 schools of Kutaisi.
          `,
          color: "#ee3c26",
        },
        {
          title: "VTB bank",
          company: "VTB",
          company_url: "https://vtb.ge/ge/individuals",
          logo_path: "logo.png",
          duration: "Jun 2021 - Mar 2022",
          location: "Office",
          description: `Administrator of the computer network of Kutaisi 2 Bank branch.
          `,
          color: "#ee3c26",
        },
        {
          title: "LEPL - Zurab Zhvania School of Public Administration",
          company: "Ministry of Education and Science of Georgia",
          company_url: "http://www.zspa.ge/",
          logo_path: "logoZSPA.png",
          duration: "Apr 2022 - Present",
          location: "Office",
          description: `Information Technology Specialist.
          `,
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Intership",
      experiences: [
        {
          title: "OlAcademy",
          company: "olacademy",
          company_url: "https://olacademy.ge/",
          logo_path: "ol-dark.png",
          duration: "Mey 2022 - Present",
          location: "From Home",
          description: "I study react.js at the  Olacademy.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create React Project. Below are some of my projects. ",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "irakli.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "ol-academy-react-todo",
      url: "https://github.com/irakli9909/ol-academy-react-todo.git",
      description: "This is TOdolis, using react hooks.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
      ],
    },
    {
      id: "1",
      name: "ol-academy-react-todo-class",
      url: "https://github.com/irakli9909/ol-academy-react-todo-class.git",
      description: "A React project Todolis, using react class.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "2",
      name: "ol-academy-popup-with-handling-outside-click",
      url:
        "https://github.com/irakli9909/ol-academy-popup-with-handling-outside-click.git",
      description: "A small project outside-clic.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "3",
      name: "ol-academy-context-menu",
      url: "https://github.com/irakli9909/ol-academy-context-menu.git",
      description: "A small project context-menu",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "4",
      name: "ol-academy-Portfolio",
      url: "https://i-quiz-app.netlify.app/",
      description: "My final project in ol-academy",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
