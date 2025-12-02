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
  username: "Hello world",
  title: "Здравствуйте, меня зовут Дмитрий",
  subTitle: emoji(
    "Я Python-backend разработчик 🚀 Разрабатываю масштабируемые веб-приложения на Django REST Framework, Celery и Redis. Уже работаю над реальным проектом с OAuth2, тестированием API и интеграцией Rollbar."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/DmitrySakhalin",
  telegram: "https://t.me/Connection_Sakhalin",
  gmail: "dmitry-pack@mail.ru",
//  gitlab: "https://gitlab.com/saadpasta",
//  facebook: "https://www.facebook.com/saad.pasta7",
//  medium: "https://medium.com/@saadpasta",
//  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Python Backend",
  subTitle: "Выпускник расширенного курса Python Backend. Практические навыки Django, FastAPI, Docker & CI/CD",
  skills: [
    emoji(
      "⚡ Проектирование и разработка REST API на Django и FastAPI с поддержкой асинхронности"
    ),
    emoji("⚡ Интеграция облачных сервисов: Docker, CI/CD"),
    emoji(
      "⚡ Оптимизация и масштабирование backend-приложений с использованием Asyncio и Docker Compose"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "Django",
    fontAwesomeClassname: "fas fa-feather-alt"
  },
  {
    skillName: "FastAPI",
    fontAwesomeClassname: "fas fa-bolt"
  },
  {
    skillName: "Flask",
    fontAwesomeClassname: "fas fa-flask"
  },
  {
    skillName: "Asyncio",
    fontAwesomeClassname: "fas fa-sync-alt"
  },
  {
    skillName: "SQL-database",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt"
  },
  {
    skillName: "GitHub",
    fontAwesomeClassname: "fab fa-github"
  },
  {
    skillName: "CI/CD",
    fontAwesomeClassname: "fas fa-cogs"
  },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Первый медицинский университет им. Павлова, г. Санкт-Петербург",
      logo: require("./assets/images/first_med.png"),
      subHeader: "Лечебное дело",
      duration: "Сентябрь 2004 - Июль 2009",
      desc: "Степень",
      descBullets: [
        "Специалист",
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "65%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "55%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
//    {
//      role: "Software Engineer",
//      company: "Facebook",
//      companylogo: require("./assets/images/facebookLogo.png"),
//      date: "June 2018 – Present",
//      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//      descBullets: [
//        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
//      ]
//    },
//    {
//      role: "Front-End Developer",
//      company: "Quora",
//      companylogo: require("./assets/images/quoraLogo.png"),
//      date: "May 2017 – May 2018",
//      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//    },
//    {
//      role: "Software Engineer Intern",
//      company: "Airbnb",
//      companylogo: require("./assets/images/airbnbLogo.png"),
//      date: "Jan 2015 – Sep 2015",
//      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//    }
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
  title: "Проекты и кейсы",
  subtitle: "Проекты, созданные во время обучения Python Backend",
  projects: [
       {
      image: require("./assets/images/backend.png"),
      projectName: "Backend для автоматизации закупок",
      projectDesc: "Сервис заказов на Django REST с Celery, импортом и кастомными полями",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/DmitrySakhalin/diplom_2025"
        }
        //  you can add extra buttons here.
      ]
      },
      {
      image: require("./assets/images/fastapi-screenshot.png"),
      projectName: "REST API на FastAPI",
      projectDesc: "Асинхронное API с валидацией Pydantic, JWT аутентификацией и документацией Swagger",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/DmitrySakhalin/fast_api_auth"
        }
        //  you can add extra buttons here.
      ]
    },

    {
      image: require("./assets/images/flask.png"),
      projectName: "Flask REST API объявлений",
      projectDesc: "REST API с HTTP Basic Auth, pytest тестами и CI/CD (Docker + GitHub Actions)",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/DmitrySakhalin/flask"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Образование и Сертификаты 🏆 "),
  subtitle:
    "Python Backend разработка",

  achievementsCards: [
    {
      title: "Нетология",
      subtitle:
        "Сертификат об окончании обучения",
      image: require("./assets/images/finish_ed.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Сертификат",
          url: "https://disk.yandex.ru/i/QJ8PE4nOOROCPQ"
        },
        {
          name: "Программа Обучения",
          url: "https://netology.ru/programs/python"
        },
//        {
//          name: "Google Code-in Blog",
//          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
//        }
      ]
    },
    {
      title: "Нетология",
      subtitle:
        "Python: Основы языка и Профессиональная работа",
      image: require("./assets/images/prof_python.png"),
      imageAlt: "Google Assistant Action Logo",
            footerLink: [
        {
          name: "Основы языка Python",
          url: "https://disk.yandex.ru/i/6Ju_cri4RZLPsQ"
        },
        {
          name: "Профессиональная  работа",
          url: "https://disk.yandex.ru/i/Fsy9xf6qMRr9Nw"
        },
//        {
//          name: "Google Code-in Blog",
//          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
//        }
      ]
    },

    {
      title: "Нетология",
      subtitle: "Django: Создание backend-приложений",
      image: require("./assets/images/django.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Сертификат", url: "https://disk.yandex.ru/i/6srl0OiS4MgQ_w"},
//        {
//          name: "Final Project",
//          url: "https://pakistan-olx-1.firebaseapp.com/"
//        }
      ]
    },
       {
      title: "Нетология",
      subtitle: "Работа с базами данных для Python-разработчиков",
      image: require("./assets/images/data_base.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Сертификат", url: "https://disk.yandex.ru/i/dPe7qmnpKBpMYw"},
//        {
//          name: "Final Project",
//          url: "https://pakistan-olx-1.firebaseapp.com/"
//        }
      ]
    },
           {
      title: "Нетология",
      subtitle: "Объектно-ориентированное программирование и API",
      image: require("./assets/images/oop_api.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Сертификат", url: "https://disk.yandex.ru/i/qQkdXeY2lJYPIA"},
//        {
//          name: "Final Project",
//          url: "https://pakistan-olx-1.firebaseapp.com/"
//        }
      ]
    },
 {
      title: "Нетология",
      subtitle: "Git: Система контроля версий",
      image: require("./assets/images/git.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Сертификат", url: "https://disk.yandex.ru/i/8PwOkYXP-YVgjw"},
//        {
//          name: "Final Project",
//          url: "https://pakistan-olx-1.firebaseapp.com/"
//        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false// Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Контакты ☎️"),
  subtitle:
    "Готов обсудить проект или просто пообщаться. Моя почта всегда открыта для вас.",
  number: "+7 (906) 254-67-89",
  email_address: "dmitry-pack@mail.ru"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  isHireable,
  resumeSection
};
