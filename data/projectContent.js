export const projects = [
  {
    key: 0,
    title: "Saseo",
    subHeader: "Book suggestion & Organization site",
    content: `Are you having a hard time finding a book? Well Saseo can help
    you! Saseo offers users the ability to be suggested books by
    subject or at random! Users will also have the ability to search
    for more information on their favorite authors, as well as find
    books via ISBN. `,
    technologies: ["ReactJS", "Axios", "OpenLibraryAPI", "EmailJS", "ChakraUI", "Formik", "Canvas-Confetti", "Aos"],
    techniques: [
      "Form Validation & submission",
      "Fetching data via multiple APIs (OpenLibrary & NY Times) using Axios",
      "Use of ReactJS hooks such as:  useMemo, useContext, useState, useReducer & useCallback",
      "Storing & retrieving site cookies",
      "User account creation, verification & loading",
    ],
    youtube: "https://www.youtube.com/",
    github: "https://www.github.com",
    site: "https://www.nhl.com",
    images: [
      "https://drive.google.com/thumbnail?id=1PCXG34_O7Jjx8ygX921j9kcro-S4Ipu0&sz=w1000",
      "https://drive.google.com/thumbnail?id=1hNTPGCInSHEuNIsKFYYmm-vyp1D0fg_6&sz=w1000",
      "https://drive.google.com/thumbnail?id=1o7usE8eQjimmfjXOYwj-QVJ5uMoVuSzZ&sz=w1000",
      "https://drive.google.com/thumbnail?id=1TNvh9dlyCfNO2FEkUuhEyyS2jsGlrCI_&sz=w1000",
    ],
    video: "https://www.youtube.com/watch?v=LXb3EKWsInQ"
  },
  {
    key: 1,
    title: "Neptune's Cove",
    subHeader: "Faux Aquarium & Museum Business Site",
    content: `An imitation of a fake aquarium & museum located in Key Biscayne, Florida. 
    This website is static and only serves to show the frontend design and implementation.`,
    technologies: ["ReactJS", "Styled-Components", "Swiper", "AnimateCSS"],
    techniques: [
      "Form Validation & submission",
      "Fetching data via multiple APIs (OpenLibrary & NY Times) using Axios, ",
      "Use of ReactJS hooks such as:  useMemo, useContext, useState, useReducer & useCallback",
      "Storing & retrieving site cookies",
      "User account creation & loading",
    ],
    youtube: "https://www.youtube.com/",
    github: "https://www.github.com",
    site: "https://www.nhl.com",
    images: [
      " https://drive.google.com/thumbnail?id=1v2iz3qQl44QIODN6AToQI23-CCcY4uOH&sz=w1000",
      " https://drive.google.com/thumbnail?id=1o7usE8eQjimmfjXOYwj-QVJ5uMoVuSzZ&sz=w1000",
      " https://drive.google.com/thumbnail?id=1TNvh9dlyCfNO2FEkUuhEyyS2jsGlrCI_&sz=w1000",
    ],
    video: "https://www.youtube.com/watch?v=z9vCWXuIw00"
  },
  {
    key: 2,
    title: "OWIWI-OWADII",
    subHeader: "Flashcard & notes study site",
    content: `Owadi-Owiwi means "study owl" in the Yoruba language. This site is a simple to use study 
    tool users can use to create, edit, load & organize flash cards. In addition user's can save
    notes in th same fashion. User's can save their flash cards to their google drive as well.`,
    technologies: ["ReactJS", "MongoDB", "Axios", "Node", "Express", "Grommet", "React-Draggble", "React-Scripts"],
    techniques: [
      "Form Validation & submission",
      "Fetching data via multiple APIs (OpenLibrary & NY Times) using Axios, ",
      "Use of ReactJS hooks such as:  useMemo, useContext, useState, useReducer & useCallback",
      "Storing & retrieving site cookies",
      "User account creation & loading",
    ],
    youtube: "https://www.youtube.com/",
    github: "https://www.github.com",
    site: "https://www.nhl.com",
    images: [
      "https://drive.google.com/thumbnail?id=1JaZ6pxHqjPGjaC88Ausxa5u6kHunXjWh&sz=w1000",
      "https://drive.google.com/thumbnail?id=1hNTPGCInSHEuNIsKFYYmm-vyp1D0fg_6&sz=w1000",
      "https://drive.google.com/thumbnail?id=1o7usE8eQjimmfjXOYwj-QVJ5uMoVuSzZ&sz=w1000",
      "https://drive.google.com/thumbnail?id=1TNvh9dlyCfNO2FEkUuhEyyS2jsGlrCI_&sz=w1000",
    ],
    video: "https://www.youtube.com/watch?v=znNllvBt_Jg"
  },
  {
    key: 3,
    title: "OnLoad",
    subHeader: "A desktop webapp that facilitates creating load files.",
    content: `This simple to use webapp is meant to help with lawfirms, who use specific document 
    repo applications, create load files for large productions that need to be digested into repo.`,
    technologies: ["Javascript", "Neutrino", "Jquery", "Node"],
    techniques: [
      "Form Validation & submission",
      "Fetching data via multiple APIs (OpenLibrary & NY Times) using Axios, ",
      "Use of ReactJS hooks such as:  useMemo, useContext, useState, useReducer & useCallback",
      "Storing & retrieving site cookies",
      "User account creation & loading",
    ],
    youtube: "https://www.youtube.com/",
    github: "https://www.github.com",
    site: "https://www.nhl.com",
    images: [
      "https://drive.google.com/thumbnail?id=12V_eFveENQKo5lfiyYKy0EFXWb2Oaj5B&sz=w1000",
      "https://drive.google.com/thumbnail?id=1hNTPGCInSHEuNIsKFYYmm-vyp1D0fg_6&sz=w1000",
      "https://drive.google.com/thumbnail?id=1o7usE8eQjimmfjXOYwj-QVJ5uMoVuSzZ&sz=w1000",
      "https://drive.google.com/thumbnail?id=1TNvh9dlyCfNO2FEkUuhEyyS2jsGlrCI_&sz=w1000",
    ],
    video: "https://www.youtube.com/watch?v=F5E711639lM"
  },
  {
    key: 4,
    title: "Waagword",
    subHeader: "Desktop webapp that helps generates specific passwords.",
    content: `While password generators might seem simple, this specific password generators 
    offers more robust password generation by adding advance features such as prefix, 
    postfix and key word insertion. In addition the user has access to create SSH keys.`,
    technologies: ["Javascript", "Electron", "Jquery", "Crypto.js"],
    techniques: [
      "Form Validation & submission",
      "Fetching data via multiple APIs (OpenLibrary & NY Times) using Axios, ",
      "Use of ReactJS hooks such as:  useMemo, useContext, useState, useReducer & useCallback",
      "Storing & retrieving site cookies",
      "User account creation & loading",
    ],
    youtube: "https://www.youtube.com/",
    github: "https://www.github.com",
    site: "https://www.nhl.com",
    images: [
      "https://drive.google.com/thumbnail?id=17nWWNRlHBgYjQZxBBgQQygaolQZFIAnk&sz=w1000",
      "https://drive.google.com/thumbnail?id=1ompIzFSn6syYlaX7AK9oZb8qM3EchrXv&sz=w1000",
      "https://drive.google.com/thumbnail?id=177M8XZnOvwjc95Cwzd2KcWxQaiuCQE9K&sz=w1000",
      "https://drive.google.com/thumbnail?id=14CAFZouY58-u8Ad3YoeiFOUCp-5PIqk2&sz=w1000",
    ],
    video: "https://www.youtube.com/watch?v=Ot5VUi-pp0g"
  },
  {
    key: 5,
    title: "Portfolio",
    subHeader: "My web developer portfolio",
    content: `What better way to show off my skills by providing information on my developer portfolio? I designed 
    and produced this site to be interesting to the eye and allows to user to explore my skills and traits 
    smoothly. 
  `,
    technologies: [
      "Javascript",
      "React",
      "SweetAlert2",
      "domPurify",
      "react-player",
      "Yet-Another-React-Lightbox",
      "EmailJs",
      "Styled-Components",
      "react-google-recaptcha",
      "React Icons",
      "React-Responsive-Carousel"
    ],
    techniques: [
      "Designed website layout",
      "Maintained a responsive design of various compute and mobile screen sizes",
      "Utilized EmailJS to provide form submission",
      "Used React as a frontend springboard",
    ],
    youtube: "https://www.youtube.com/",
    github: "https://www.github.com",
    site: "https://www.nhl.com",
    images: [
      "https://drive.google.com/thumbnail?id=1ndR_XDwCWW60lf1pM6zqJRnEjBWwwzmC&sz=w1000",
      "https://drive.google.com/thumbnail?id=1hNTPGCInSHEuNIsKFYYmm-vyp1D0fg_6&sz=w1000",
      "https://drive.google.com/thumbnail?id=1o7usE8eQjimmfjXOYwj-QVJ5uMoVuSzZ&sz=w1000",
      "https://drive.google.com/thumbnail?id=1TNvh9dlyCfNO2FEkUuhEyyS2jsGlrCI_&sz=w1000",
    ],
    video: "https://www.youtube.com/watch?v=AP5SRgDnJQ4"
  },
];
