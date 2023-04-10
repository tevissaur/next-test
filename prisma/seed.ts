import { prisma } from "../src/server/db";

async function main() {
  await prisma.article.deleteMany();
  await prisma.article.create({
    data: {
      title: "About Me",
      content:
        "Full Stack Web developer, and flexible problem-solver passionate about building applications that are aimed to support individuals, small businesses, and local community-run organizations. Effective at working in an agile development environment. Eager to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.",
      author: "me",
    },
  });
  await prisma.project.deleteMany();
  await prisma.project.create({
    data: {
      name: "Chicken Running",
      description:
        "This full-stack web application gives you all the tools you need to organize your own garden. The first full-stack app made by a group of four web developers. I took the role of front-end developer, designing UI to gather data and send that over an API call and handle server responses. Used Handlebars.js, an express server, and MySQL to save data to a SQL database, created API routes to handle requests and responses, and rendered views with the data requested through the routses, all inside of the MVC architecture.s",
      demoUrl: "https://chicken-running.herokuapp.com/",
      owner: "maxaeon",
      repoName: "project-2",
      repoUrl: "https://github.com/maxaeon/project-2",
      imageUrl: "/chicken-running.png",
      technologies: ["HTML", "CSS", "JavaScript", "Handlebars.js", "Express", "MySQL", "Sequelize"].join(','),
    },
  });
  await prisma.project.create({
    data: {
      name: "Fantasy World Wiki",
      description:
        "A web based wiki of my own homebrew DnD world. This was a first attempt at creating something with HTML and CSS only. Gained a complete understanding of the box model, grid layouts, flex layouts, accessibility, and basic web design. Currently transforming this into a React app that generates a wiki similar to this one, after the user creates the world with the tools available to them.",
      demoUrl: "https://tevissaur.github.io/forene-wiki/",
      owner: "tevissaur",
      repoName: "forene-wiki",
      repoUrl: "https://github.com/tevissaur/forene-wiki",
      imageUrl: "/forene-wiki.png",
      technologies: ["HTML", "CSS"].join(','),
    },
  });
  await prisma.project.create({
    data: {
      name: "Netflix and Grill",
      description:
        "This web app allows the user to select some criteria to generate a random movie and meal to have a nice night inside. The user can save suggestions, and change the criteria as well. It communicates with a few third-party APIs to get the movie and recipe data. Developed in a team of three junior web developers as the first group project in the program. My responsibilities included developing the web apps API calls, error handling, and DOM manipulation.",
      demoUrl: "https://alexanderleino.github.io/Netflix-and-Grill/",
      owner: "AlexanderLeino",
      repoName: "Netflix-and-Grill",
      repoUrl: "https://github.com/AlexanderLeino/Netflix-and-Grill",
      imageUrl: "/net-grill-image.png",
      technologies: ["HTML", "CSS", "JavaScript"].join(','),
    },
  });
  await prisma.project.create({
    data: {
      name: "Local Farmers",
      description:
        "This e-commerce website provides a platform for small, independent producers to sell their products directly to customers, bypassing the traditional supply chain and enabling consumers to purchase fresh, high-quality food directly from the source. It also promotes sustainable agriculture and supports small-scale food producers, helping to build stronger local food systems and communities. My work on this project included I built the back-end, using Node.js, Express, and MongoDB and helping develop a portion of the front-end of the website, using React, Redux, and Material UI.",
      demoUrl: "https://your-local-farmers.herokuapp.com/",
      owner: "tevissaur",
      repoName: "your-local-farmers",
      repoUrl: "https://github.com/tevissaur/your-local-farmers",
      imageUrl: "/local-farmers.png",
      technologies: ["Node.js", "Express", "MongoDB", "React", "Redux", "Material UI", "JavaScript"].join(','),
    },
  });
  await prisma.project.create({
    data: {
      name: "Tic Tac Toe",
      description:
        "The classic game that everyone loves. My first attempt to build something with javascript. Learned a lot about how to manipulate the DOM, conditional statements, and data structures.",
      demoUrl: "https://tevissaur.github.io/orange-blossom/",
      owner: "tevissaur",
      repoName: "orange-blossom",
      repoUrl: "https://github.com/tevissaur/orange-blossom",
      imageUrl: "/ttt.png",
      technologies: ["HTML", "CSS", "JavaScript"].join(','),
    },
  });
  await prisma.service.deleteMany();
  await prisma.service.create({
    data: {
      name: "Web Development",
      description:
        "Need a custom website to showcase your business? Look no further!",
        imageUrl: "/web-dev.jpg",
    },
  });
  await prisma.service.create({
    data: {
      name: "Web Design",
      description:
        "I can help improve your website design and user experience.",
        imageUrl: "/web-dev.jpg",
    },
  });
  await prisma.service.create({
    data: {
      name: "Website Maintenance",
      description:
        "I can help maintain your existing websites as well as make it easier for others to find your website.",
        imageUrl: "/web-dev.jpg",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
