import OpenPost from "/images/openpost.png"
import CloudPoint from "/images/cloudpoint.png"
import Stikypad from "/images/stikypad.png"
import Portfolio from "/images/portfolio.png"
import Photo from "/images/photo.png"

export const about = {
  name: "Karan Siddiqui",
  title: "Full-Stack Developer",
  subtitle: "Passionate about Coding and Technology",
  description: "I am a passionate software developer skilled in crafting innovative solutions that merge technology with practical applications. With expertise in React, Node.js, MongoDB, and more, I specialize in delivering user-centric applications like OpenPost, Climate-Connect. Certified in AWS Application Development, I am eager to contribute to teams driving impactful software solutions.",
  quote: "Strive for continuous improvement, instead of perfection.",
  avatar: {
    url: Photo,
  },
};


export const projects =
    [
        {
            _id: 1,
            url: "https://github.com/Karansiddiqui/OPENPOST",
            title: "OPEN POST",
            image: {
                url: OpenPost,
            },
            description: "OpenPost is a blogging platform with dynamic search, easy sign-in (manual or Google OAuth), and separate dashboards for admins and users. Admins can manage accounts, delete comments, and publish blogs, while users can view, comment on, and like posts.",
            techStack: " React, Node.js, Express, MongoDB, Redux Toolkit, Tailwind CSS, JSON, REST API",
        },
        {
          _id: 2,
            url: "https://github.com/Karansiddiqui/Sticky-Pad",
            title: "StikyPad",
            image: {
                url: Stikypad,
            },
            description: "This is a simple note-taking web application built using ReactJS.",
            techStack: " React, Material-UI, CSS"
        },
        {
          _id: 3,
            url: "https://github.com/Karansiddiqui/Climate-Connect",
            title: "Climate-Connect",
            image: {
                url: CloudPoint,
            },
            description: "The Weather App fetches real-time weather data using the OpenWeatherMap API, displaying it with dynamic icons and parameters for user-selected cities. Implemented with Node.js, Express.js, and EJS for server-side rendering, it features a responsive design and error handling for a seamless user experience.",
            techStack: "NodeJS, ExpressJS, Rest-API, JavaScript, EJS, CSS"
        },
        {
          _id: 4,
            url: "",
            title: "Portfolio",
            image: {
                url: Portfolio,
            },
            description: "The Weather App fetches real-time weather data using the OpenWeatherMap API, displaying it with dynamic icons and parameters for user-selected cities. Implemented with Node.js, Express.js, and EJS for server-side rendering, it features a responsive design and error handling for a seamless user experience.",
            techStack: "React, Material-UI, Three.js, CSS"
        },
    ]

    export const timeline = [
      {
        title: "Started Bachelor's in CSE",
        description: "Learned C++, Java, DSA, OOP.",
        date: "2020",
      },
      {
        title: "Continued Studies in CS",
        description: "Advanced DSA, OOP, web development, DBMS.",
        date: "2021",
      },
      {
        title: "Progressed in CS",
        description: "Software engineering, React, Node.js, Express.js, Bootstrap.",
        date: "2022",
      },
      {
        title: "Advanced Studies and Projects",
        description: "Learn Full-stack development, Git, GitHUB.",
        date: "2023",
      },
      {
        title: "Completed MERN Stack Training",
        description: "Hands-on projects with MongoDB, Express, React, Node.js.",
        date: "Early 2024",
      },
      {
        title: "Enhanced SEO Skills",
        description: "Improved SEO performance.",
        date: "Early 2024",
      },
      {
        title: "Expanded Skill Set",
        description: "Proficient in JWT, JSON, REST APIs, Material UI, Tailwind CSS, Three.js.",
        date: "2024",
      },
    ];

    export const skills = {
        image1: {
            url: "https://th.bing.com/th/id/OIP.LhQJvkU8pb3D_VC0HGE5CwHaEk?w=575&h=355&rs=1&pid=ImgDetMain",
        },
        image2: {
            url: "https://cdn.idevie.com/wp-content/uploads/2015/12/React.js_logo.svg_.png",
        },
        image3: {
            url: "https://th.bing.com/th?q=JavaScript+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=strict&t=1&mw=247",
        },
        image4: {
            url: "https://th.bing.com/th/id/OIP.7GgA3ppsiPQmZMitmTb8rAHaHa?w=225&h=225&c=7&o=5&pid=1.20",
        },
        image5: {
            url: "https://th.bing.com/th/id/OIP.eTG_I4LEgyGwP3RLc65GjAHaEG?w=324&h=180&c=7&r=0&o=5&pid=1.7",
        },
        image6: {
            url: "https://th.bing.com/th/id/OIP.XenvPGKORrOoPzw_zr097QAAAA?pid=ImgDet&w=199&h=199&c=7",
        },
    }