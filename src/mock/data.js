/* eslint-disable prettier/prettier */
import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Chirag Kamat', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Chirag Kamat',
  subtitle: 'JS Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Experienced Application Development Senior Analyst with a demonstrated history of working in the information technology and services industry. Skilled in Javascript, ES6, Nodejs, Angular, ReactJS, Express, Web services, CouchDB, SQL, Core Java and Selenium . Strong business development professional with a Bachelor of Engineering (BE) focused in Computer Science from BVB College of Engineering and Technology.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1esdfpdXCh3hP8nDhUvPvIeVz4l7RzEWH/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.png',
    title: 'Imessage clone',
    info: 'Imessenger where you can chat with registered users',
    info2: '',
    url: 'https://imessage-clone-yt-9d63c.web.app/',
    repo: 'https://github.com/chigya4/imessage-clone-yt', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Airbnb clone',
    info: 'Airbnb website where you can browse hotels',
    info2: '',
    url: 'https://airbnb-clone-b2f42.web.app/',
    repo: 'https://github.com/chigya4/airbnb-clone', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '+91-8553486365',
  btn: 'Email me',
  email: 'chiragkamat.kamat@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/ChiragKamat',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/chiragkamat48/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/chigya4',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
