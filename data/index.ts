export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I direct your project and manage its progress",
    description: "My role",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My dev skills",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an application to revolutionize the world of beauty.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project with me ?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Basic restaurant",
    des: "Discover my fictitious restaurant. Built in TypeScript, JavaScript and CSS.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/emmanueldehaes/basic-restaurant",
  },
  {
    id: 2,
    title: "Portfolio 2023",
    des: "Discover my portfolio developed for the year 2023 in HTML/CSS and JavaScript.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/emmanueldehaes/portfolio-2023",
  },
  {
    id: 3,
    title: "Service app",
    des: "Find the right freelance services, right away. Built in JavaScript and CSS.",
    img: "/p5.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/emmanueldehaes/service-app",
  },
  {
    id: 4,
    title: "Bewell",
    des: "The app that helps you stay in shape even at work. Built in php",
    img: "/p4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/emmanueldehaes/bewell",
  },
];

export const testimonials = [
  {
    quote:
      "Emmanuel really improved our website. His technical expertise and attention to detail made our platform much more engaging. Thanks to his professionalism and punctuality, we've seen an increase in online engagement. I highly recommend his services.",
    name: "Mark Delaney",
    title: "Marketing Director, EverGreen",
  },
  {
    quote:
      "Emmanuel showed great creativity and impressive technical expertise in redesigning our website. He understood our specific needs and developed a custom solution that exceeded our expectations. The result is a modern and intuitive website that perfectly reflects our brand. Thank you, Emmanuel.",
    name: "Sophie Lambert",
    title: "Communications Manager, TradeHub",
  },
  {
    quote:
      "Emmanuel transformed our outdated website into a responsive and user-friendly platform that has greatly improved our online visibility. His methodical approach and expertise in web development made the process smooth and stress-free. We now have a high-performing website that perfectly meets our needs and those of our users.",
    name: "Clara Dupont",
    title: "Operations Director, UrbanHarvest",
  },
  {
    quote:
      "We hired Emmanuel for a complete overhaul of our web application, and we were not disappointed. His mastery of modern technologies and proactive approach were invaluable throughout the project. Emmanuel was always available to answer our questions and delivered a high-quality final product. We are very satisfied with his work.",
    name: "Julian Martin",
    title: "IT Project Manager, AquaPure",
  },
  {
    quote:
      "We entrusted Emmanuel with developing our online store, and he exceeded all our expectations. His attention to detail, responsiveness, and ability to quickly solve problems made this project a great success. Our new online store is not only aesthetically pleasing but also highly functional and easy to use. We are thrilled with the result.",
    name: "Peter Lefebvre",
    title: "E-commerce Manager, SummitFin",
  },
];

export const companies = [
  {
    id: 1,
    name: "EverGreen",
    img: "/entreprise1.png",
    nameImg: "/entrepriseName1.png",
  },
  {
    id: 2,
    name: "TradeHub",
    img: "/entreprise2.png",
    nameImg: "/entrepriseName2.png",
  },
  {
    id: 3,
    name: "UrbanHarvest",
    img: "/entreprise3.png",
    nameImg: "/entrepriseName3.png",
  },
  {
    id: 4,
    name: "AquaPure",
    img: "/entreprise4.png",
    nameImg: "/entrepriseName4.png",
  },
  {
    id: 5,
    name: "SummitFin",
    img: "/entreprise5.png",
    nameImg: "/entrepriseName5.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Front-end developer",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance project manager",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/emmanueldehaes",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/emmanueldehaes/",
  },
];
