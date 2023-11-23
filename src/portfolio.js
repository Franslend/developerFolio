/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Frans Lend",
  title: "Hello Everyone, I'm Jay Francis Intig",
  subTitle: emoji(
    "A passionate student, aspiring to be an IT support 🚀 having an experience of building Web application using JavaScript / HTML5 / Bootstrap / React and MySQL."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Franslend",
  linkedin: "https://www.linkedin.com/in/franslend/",
  gmail: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
  gitlab: "https://gitlab.com/franslend",
  facebook: "https://www.facebook.com/profile.php?id=61552465216823",
  medium: "https://medium.com/@franslend",
  stackoverflow: "https://stackoverflow.com/users/22971802/franslend-20",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "CREATING A DIFFERENT TYPES OF WEB BASED SYSTEM AND EXPLORE FOR MORE CHALLENGES",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Eager to learn more languages"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "MINDANAO STATE UNIVERSITY AT NAAWAN",
      logo: require("./assets/images/msunLogo.png"),
      subHeader: "Bachelor of Science Information Technology",
      duration: "August 2020 - July 2024",
      desc: "Participated in the Capstone project of Web based Product Information System and published 1 paper.",
      desc1: "Achievements:",
      descBullets: ["Certification in Python workshop"],
      descBullets1: ["GPA of 1.64"]
    },
    {
      schoolName: "Iligan City East National High School",
      logo: require("./assets/images/icenhsLogo.png"),
      subHeader: "Senior High School Grade",
      duration: "June 2018 - April 2020",
      desc: "Participated in the Research project entitled A Research Paper of the effects of having a low grade in mathematics being an SPA student, and published 1 paper.",
      desc1: "Achievements:",
      descBullets: ["Champion in a News Casting"],
      descBullets1: ["GPA of 89.9"]
    },
    {
      schoolName: "Lugait National High School",
      logo: require("./assets/images/lugaitLogo.png"),
      subHeader: "High School Grade",
      duration: "June 2015 - April 2018",
      desc: "",
      desc1: "Achievements:",
      descBullets: ["GPA of 89.6"]
    },
    {
      schoolName: "Crisologo Elementary School",
      logo: require("./assets/images/crisLogo.png"),
      subHeader: "Elementary Grade",
      duration: "September 2009 - April 2015",
      desc: "",
      desc1: "Achievements:",
      descBullets: ["3rd Academic Honor"]
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Freelancer",
      companylogo: require("./assets/images/freeLogo.png"),
      date: "June 2024 – 2026",
      desc: "Web App Development for Management System Companies",
      descBullets: [
        "Led the development of a cross-platform web app for Management System client, and to ensure the users experience with both iOS and Android devices, and ensures security to the system.",
        "Achieved a 4.8-star rating on both app stores, with positive user feedback on the intuitive design and smooth performance."
      ]
    },
    {
      role: "IT-support Specialist",
      company: "Hoyoverse",
      companylogo: require("./assets/images/hoyoLogo.png"),
      date: "August2027 – May 2030",
      desc: "End-User Support",
      descBullets: [
        "Provide timely and effective technical support to end-users, addressing hardware and software issues through remote assistance and on-site troubleshooting.",
        "Manage and prioritize support tickets using a ticketing system, ensuring issues are resolved within agreed-upon service level agreements (SLAs).",
        "Conduct thorough root cause analysis to prevent recurring issues and improve overall system stability."
      ]
    },
    {
      role: "Software Engineer Suppport Specialist",
      company: "Amazon",
      companylogo: require("./assets/images/amaLogo.png"),
      date: "Jan 2031 – Present",
      desc: "Bug Tracking and Reporting",
      descBullets: [
        "Utilize bug tracking systems (e.g., Jira) to document and track reported issues, ensuring accurate and up-to-date information for both customers and internal teams.",
        "Collaborate with development teams to prioritize and escalate critical issues, facilitating efficient bug resolution."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Project",
  subtitle: "COMPANY THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/kingLogo.png"),
      projectName: "KingSun Product Information System",
      projectDesc:
        "An informtaion system which provide data storing and security towards product information in the KingSun Enterprises",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://kingsunenterprises.com/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to play and get some ideas on it to get references for some of my projects.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.friv.com/",
      title: "Friv web game",
      description:
        "Friv is a magical realm filled with a diverse array of games, an indispensable part of my childhood that added color and joy to every moment. Without this web sanctuary, my childhood would be incomplete."
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO TALK TO PEOPLE AND THIS WAY I CAN MEET OTHER PEOPLE"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO PLAY AND TALK ABOUT TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+63-9302193876",
  email_address: "jayfrancis.intig20@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "IntigJay28026", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
