export const projects = [
  // ****************************************************************************
  // MAESTROBOARD
  // ****************************************************************************
  {
    key: 0,
    title: "Maestroboard ",
    subHeader: "Music News & Community Board Site",
    content: [
      `Maestroboard emulates music shop corkboards for viewing & posting adverts. Built on a MERN stack, every post, user, & article is pulled from an Express server & MongoDB. `,
      `Users can see posts on our community board. Each post will have a details, an image carousel & a contact panel, all of which is retreived via the backend. All images are hosted via Cloudinary. `,
      `Be up to date with the latest gear news! Users can go to the news section to see music gear news articles. Similar to the corkboard posts, everything is retreived from the backend.`,
      `We provide an admin dashboard that shows metrics & data information. Admins can sign in to create, edit & delete articles & community board posts! `,
      `Metrics and data are being retreived via backend. All charts are set up using ChartJS.`,
      "There are future plans to add user account creation, custom account dashboards & a fully functional forum!",
    ],

    technologies: [
      "Node",
      "Javascript",
      "React",
      "CSS",
      "React-Bootstrap",
      "Express",
      "Axios",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Cloudinary",
      "Google-Captcha",
      "React-Hook-Form",
      "ChartJS",
    ],
    techniques: [
      "Implemented live full stack MERN website, hosted with OnRender",
      "Designed fully responsive website using Bootstrap-React & custom CSS",
      "Connected front-end with server & MongoDB database backend using Mongoose, Axios & Express",
      "Fetched image, post & article data via Axios, Mongoose/Mongodb & Cloudinary",
      "Created protected routes, form validation & secure log-in using JWT, & React-Hook-Form",
      "Implemented CRUD admin operations for news articles & corkboard posts",
      "Visualized site metrics using ChartJS",
    ],
    futureUpdates: [
      "User Account creation with CRUD operations, account preference options & metrics dashboard",
      "Simple forum with different music related categories",
      "Implement a section that displays used music gear prices & where to get buy it",
      "More post types & filtering options for community corkboard",
      "Custom corkboard/post color palette & designs per user account",
      "Inserting video excerpts using React-Player",
    ],
    youtube: "#",
    github: "https://github.com/Markrodriguez003/maestroboard",
    site: "https://maestroboard.onrender.com",
    images: [
      "maestroboard.png",
      "maestroboard-1.png",
      "maestroboard-2.png",
      "maestroboard-4.png",
      "maestroboard-5.png",
      "maestroboard-3.png",
    ],
    video: "#",
  },
  // ****************************************************************************
  // SASEO
  // ****************************************************************************
  {
    key: 1,
    title: "Saseo",
    subHeader: "Book Suggestion Site",
    content: [
      `Are you having a hard time finding a book? Well Saseo can help
    you! Saseo offers users the ability to be suggested books by
    subject or at random! Saseo is an API driven website using OpenLibrary API! `,
      `In addition to receiving suggested books, users can also search
    for more information on their favorite authors, as well as find
    books via ISBN. All book data is retreived via Axios.`,
      `When developing this website I intially utilized Google Books API, but decided to go with OpenLibrary API as it was more robust in terms of book choices & book data. `,
      "There are future plans to add magazines, shows, movies & account creation with interactive dashboard.",
    ],

    technologies: [
      "Javascript",
      "React",
      "CSS",
      "Axios",
      "OpenLibrary API",
      "EmailJS",
      "ChakraUI",
      "Formik",
      "Canvas-Confetti",
      "Aos",
    ],
    techniques: [
      "Implemented ReactJS for the frontend using React hooks & React-Router",
      "Fetched data via multiple APIs (OpenLibrary & NY Times) using Axios",
      "Designed website using ChakraUI, CSS, & Styled-Components",
      "Inserted custom CSS animations",
      "Maintained a responsive design of various computer & mobile screen sizes",
      "Utilized NPM libraries such as Canvas-Confetti & AOS",
      "Stored & retrieved site cookies using React-Cookie library",
      "Form validation & submission using EmailJS & Formik",
    ],
    futureUpdates: [
      "Implement account creation & user dashboard",
      "Customizable art assets (bookmarks, account avatar, ect)",
      "Add AI assistance for book search suggestions",
      "Expand search options to include magazines, movies, shows & audiobooks",
      "Add account dashboard with book suggestion, wishlists & books read",
    ],
    youtube: "https://www.youtube.com/watch?v=Kgltbbmhn6c",
    github: "https://github.com/Markrodriguez003/saseo",
    site: "https://saseo.onrender.com",
    images: ["saseo.png", "saseo-1.png", "saseo-2.png", "saseo-3.png"],
    video: "https://www.youtube.com/watch?v=Kgltbbmhn6c",
  },

  // ****************************************************************************
  // PRONTO-SEC
  // ****************************************************************************
  {
    key: 2,
    title: "Pronto-Sec",
    subHeader: "SEC Filings & Data Downloader",
    content: [
      `While working at a law firm, I recognized that they needed a more efficient way to download SEC filings & related data. So I decided to build Pronto-SEC to facilitate this.`,
      `By leveraging SEC-api.io's services I was able to fetch & organize up-to-date data from SEC.gov by CIK number. Users would need their own API key, but this application makes the process fast & hassle-free.`,
      `Users will be able to search company information, subsidaries data, executive compensation, & SEC fillings via a simple to use form. All form inputs are validated for accuracy and completeness.`,
      `I implemented features for users to easily search, view & filter the incoming data via a comprehensive, easy to read table while providing I/O feedback as well as giving helpful documents to help user utilize the app to its fullest.`,
      `There are future plans to add more data retrieval choices, form options & allow user to download specific documents directly from table index.`,
      `In addition to searching & viewing, users will also be able to download selected filings directly to different file formats such as PDF, XLS, DOCX & JSON, while preserving the page URL to view directly from SEC.gov site.`,
    ],
    technologies: [
      "Typescript",
      "React",
      "Electron",
      "Node",
      "Axios",
      "Bulma",
      "Keytar",
      "HTML-to-docx",
      "Fast-CSV",
      "React-hook-form",
      "pdf-creator-node",
      "React-Table",
      "React-Select",
      "Yup",
    ],
    techniques: [
      "Designed & built Pronto-SEC as a solution to a tediously complex workplace problem of searching & downloading documents from SEC.gov.",
      "Implemented API calls to extract data from the SEC.gov website using SEC-api-io & Axios.",
      "Form Validation & submission using yup & react-hook-form",
      "Verified & organized incoming data without pruning main informational content.",
      "Projected data to a user-friendly table that allows for searching & filtering.",
      "Handled writing & exporting data to file (.csv, .pdf, .xls, & .docx) using NPM libraries",
      "Styled responsive application using Bulma CSS & custom CSS",
      "Created standalone executable program using ElectronJS and Node.js",
    ],
    futureUpdates: [
      "Offer more SEC data extraction choices & form choices such as ticker search",
      "Implement web scraping & AI cross referencing",
      "Include more robust filtering, & UI customizability options for data tables",
      "Add .xml, .txt & .html file export options",
      "Add completion & error logs for each fetch/download request.",
    ],
    youtube: "#",
    github: "https://www.github.com/Markrodriguez003/pronto-sec",
    site: "#",
    images: [
      "pronto-sec-1.png",
      "pronto-sec-2.png",
      "pronto-sec-3.png",
      "pronto-sec-4.png",
      "pronto-sec-5.png",
      "pronto-sec-6.png",
    ],
    video: "https://www.youtube.com/watch?v=AQho4sa6kxc",
  },

  // ****************************************************************************
  // SIMPLE-LOAD
  // ****************************************************************************
  {
    key: 3,
    title: "Simple-Load",
    subHeader: "Load file generator.",
    content: [
      `This simple to use stand alone web application is meant to help law firms create load files for large productions that need to be digested into any legal document platform. `,
      `Most legal document platforms handled large productions that can be tens of thousands of pages. To facilitate this they usually have load files that contain all of the files metadata which is used to load in the files into their repositories. `,
      `I wanted to create a simple solution for a complex problem encountered at a law firm I worked at, so I utilized ElectronJS to package this as a standalone application. `,
      ``,
    ],
    technologies: ["Javascript", "CSS", "ElectronJS", "JQuery", "Node"],
    techniques: [
      "Designed application as a solution to a complex workplace problem (creating load file for massive document productions for legal software platforms such as CSDisco & NetDocuments) ",
      "Utilized JQuery to handle application DOM manipulation ",
      "Form Validation & submission",
      "Handled write file & file export (.csv) using Node",
      "Styled application using CSS",
      "Created standalone executable program using ElectronJS",
    ],
    futureUpdates: [
      "Display file sizes, points out sub-folders & have ability to export log",
      "Offer different file export file types (.txt or .dat)",
      "Provide more robust configuration options for form fields",
      "Remove individual files from finalized file list",
    ],
    youtube: "https://www.youtube.com/watch?v=AQho4sa6kxc",
    github: "https://www.github.com/Markrodriguez003/SimpleLoad",
    site: "#",
    images: ["simpleload-1.png"],
    video: "https://www.youtube.com/watch?v=AQho4sa6kxc",
  },

  // ****************************************************************************
  // WAAGWORD
  // ****************************************************************************
  {
    key: 4,
    title: "Waagword",
    subHeader: "Password generator.",
    content: [
      `While password generators might seem simple, this specific password generator offers more robust & secure password generation. `,
      `The application has advance features such as prefix, postfix, key word insertion & SSH key generation for complex password. `,
      `I included prefix & postfix options because certain legal production require it when creating passwords. `,
      `Future updates include having a password bank, password complexity checker & ASCII art password generation. `,
    ],
    technologies: [
      "Javascript",
      "CSS",
      "Bootstrap",
      "Neutrino",
      "Jquery",
      "Crypto.js",
    ],
    techniques: [
      "Designed application as a solution to a workplace problem (complex password generation) ",
      "Styled application using CSS & Bootstrap",
      "Created standalone executable program using Neutrino",
      "Utilized JQuery to handle application DOM manipulation & password generation",
      "Used Crypto.js to generate SSH keys",
      "Form field verification",
    ],
    futureUpdates: [
      "Password memory / keychain bank",
      "LEET / ASCII password - art password generator",
      "Password complexity / length checker",
    ],
    youtube: "https://www.youtube.com/watch?v=LSeEnGTH4E8",
    github: "https://github.com/Markrodriguez003/wagwoord",
    site: "#",
    images: [
      "wagwoord-1.png",
      "wagwoord-2.png",
      "wagwoord-3.png",
      "wagwoord-4.png",
    ],
    video: "https://www.youtube.com/watch?v=LSeEnGTH4E8",
  },

  // ****************************************************************************
  // HBJO SITE
  // ****************************************************************************
  // {
  //   key: 4,
  //   title: "Gallo-Ocho",
  //   subHeader: "Business Prototype Site",
  //   content: [
  //     "Grab a little piece of Miami! This site was built as a prototype site for an art / sculpture business called Gallo Ocho based out of Miami, FL. ",
  //     "The business owner wanted to create an art site that he could sell his custom made sculptures, merchandise & have a site for artists to participate. ",
  //     "There are plans to expand the website by adding a Shopify store, account creation, artist portal, contact email & an inventory backend with MongoDB. ",
  //     "Base rooster model was provided by business owner as a prototype. I edited textures via Unity 3D. ",
  //   ],
  //   technologies: [
  //     "Javascript",
  //     "React",
  //     "CSS",
  //     "Bootstrap",
  //     "Simple-React-Lightbox",
  //     "Styled Components",
  //     "Yet-Another-React-Lightbox",
  //     "Google-Model-Viewer",
  //   ],
  //   techniques: [
  //     "Implemented ReactJS for the frontend using React hooks & React-Router",
  //     "Designed website layout & provided prototype to business owner",
  //     "Utilized NPM libraries such as Simple-React-Lightbox & Google-Model Viewer",
  //     "Styled website with CSS, Bootstrap & Styled-Components",
  //     "Created custom CSS animations, backgrounds, icons & images",
  //     "Maintained a responsive design for various computer & mobile screen sizes",
  //     "Retrieved project / website data from JSON files",
  //     "Implemented model viewer (of rooster) to be responsive & not load bearing to site performance.",
  //     "Assisted exporting model & model textures using Unity3D",
  //   ],
  //   futureUpdates: [
  //     "Finalized site pages",
  //     "Implement account creation & account dashboard",
  //     "Add Shopify store with backend integration with MongoDB",
  //   ],
  //   youtube: "https://www.youtube.com/watch?v=Hx0522u5nak",
  //   github: "https://github.com/Markrodriguez003/galloocho",
  //   site: "https://galloocho.onrender.com",
  //   images: [
  //     "galloocho-1.png",
  //     "galloocho-2.png",
  //     "galloocho-3.png",
  //     "galloocho-4.png",
  //   ],
  //   video: "https://www.youtube.com/watch?v=Hx0522u5nak",
  // },
  // {
  //   key: 4,
  //   title: "HBJO LAW ",
  //   subHeader: "Law firm website",
  //   content: [
  //     `Official website for the Homer Bonner Jacobs Ortiz P.A. law firm. Managed by using Wordpress CMS. `,
  //     `I assisted by helping modify the overall design of the website, appending new lawyer profiles, &
  //   adding new pages with custom CSS styling. `,
  //     `In addition I handled site inbox messages, troubleshooting and managed plugin integration. `,
  //     `Future updates include adding a linkable repository of case victories, awards & accolades. `,
  //   ],
  //   technologies: ["Wordpress", "HTML", "CSS", "Javascript", "PHP"],
  //   techniques: [
  //     "Assisted modifying site elements, such as inserting new reports, pages, & attorney profiles",
  //     "Managed Wordpress plugins & inserted brochure viewer",
  //     "Created custom CSS styling",
  //     "Provided help troubleshooting site issues with styling, plugins, & site backup",
  //     "Handle site inbox messages",
  //     "Created graphics for brochure & site",
  //     "Edited attorney photos",
  //   ],
  //   futureUpdates: [
  //     "Add video player to introduce interactive powerpoint & videos ",
  //     "Links to case victories & other accolades",
  //   ],
  //   youtube: "#",
  //   github: "#",
  //   site: "https://www.homerbonner.com/",
  //   images: [
  //     "hbjo-1.png",
  //     "hbjo-2.png",
  //     "hbjo-3.png",
  //     "hbjo-4.png",
  //     "hbjo-5.png",
  //     "hbjo-6.png",
  //     "hbjo-7.png",
  //   ],
  //   video: "#",
  // },

  // ****************************************************************************
  // WEB DEV SITE
  // ****************************************************************************
  {
    key: 5,
    title: "Portfolio",
    subHeader: "My web developer portfolio",

    content: [
      `What better way to show off my skills than by providing my own developer portfolio! `,
      `I designed and produced this site to showcase my portfolio pieces, skills & resume. `,
      `Initially I wanted to create a kaleidoscope styled art website but it became way too distracting so I kept it simple. `,
      `There are many projects waiting in the wings so I will be updating this site often! `,
    ],
    technologies: [
      "Javascript",
      "React",
      "CSS",
      "SweetAlert2",
      "DomPurify",
      "react-intersection-observer",
      "Use-Scramble",
      "React-Lightbox",
      "EmailJs",
      "react-google-recaptcha",
      "Styled-Components",
      "React-Responsive-Carousel",
      "File-Saver",
    ],
    techniques: [
      "Deployed ReactJS as the frontend library using React hooks",
      "Designed website layout with custom animations, using Styled-Components, CSS & NPM libraries such as Use-Scramble",
      "Maintained a responsive design of various computer & mobile screen sizes",
      "Integrated NPM libraries such as SweetAlert2, Swiper, File-Saver & React-Lightbox",
      "Provided form field verification, field data purification using DomPurify, & form submission using EmailJS with Google-Captcha to send forms to webmaster",
      "Retrieved project / website data from JSON files",
    ],
    futureUpdates: [
      "Add video player to project slide show",
      "Add final website page with special thanks",
    ],
    youtube: "#",
    github: "https://github.com/Markrodriguez003/webdev-portfolio",
    site: "#",
    images: [
      "portfolio-1.png",
      "portfolio-2.png",
      "portfolio-3.png",
      "portfolio-4.png",
    ],
    video: "#",
  },
];
