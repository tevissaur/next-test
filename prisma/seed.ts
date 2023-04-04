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
        "This web app allows a gardener to organize their garden and share information with others through a blogging system.",
      demoUrl: "https://chicken-running.herokuapp.com/",
      owner: "maxaeon",
      repoName: "project-2",
      repoUrl: "https://github.com/maxaeon/project-2",
      imageUrl: "/chicken-running.png",
    },
  });
  await prisma.project.create({
    data: {
      name: "Fantasy World Wiki",
      description:
        "This web app allows a gardener to organize their garden and share information with others through a blogging system.",
      demoUrl: "https://tevissaur.github.io/forene-wiki/",
      owner: "tevissaur",
      repoName: "forene-wiki",
      repoUrl: "https://github.com/tevissaur/forene-wiki",
      imageUrl: "/forene-wiki.png",
    },
  });
  await prisma.project.create({
    data: {
      name: "Netflix and Grill",
      description:
        "This web app allows a gardener to organize their garden and share information with others through a blogging system.",
      demoUrl: "https://alexanderleino.github.io/Netflix-and-Grill/",
      owner: "AlexanderLeino",
      repoName: "Netflix-and-Grill",
      repoUrl: "https://github.com/AlexanderLeino/Netflix-and-Grill",
      imageUrl: "/net-grill-image.png",
    },
  });
  await prisma.project.create({
    data: {
      name: "Local Farmers",
      description:
        "This web app allows a gardener to organize their garden and share information with others through a blogging system.",
      demoUrl: "https://your-local-farmers.herokuapp.com/",
      owner: "tevissaur",
      repoName: "your-local-farmers",
      repoUrl: "https://github.com/tevissaur/your-local-farmers",
      imageUrl: "/local-farmers.png",
    },
  });
  await prisma.project.create({
    data: {
      name: "Tic Tac Toe",
      description:
        "This web app allows a gardener to organize their garden and share information with others through a blogging system.",
      demoUrl: "https://tevissaur.github.io/orange-blossom/",
      owner: "tevissaur",
      repoName: "orange-blossom",
      repoUrl: "https://github.com/tevissaur/orange-blossom",
      imageUrl: "/ttt.png",
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
