import { prisma } from "../src/server/db";

async function main() {
  const id = "cl9ebqhxk00003b600tymydho";
  await prisma.article.deleteMany();
  await prisma.article.create({
    data: {
      title: "About Me",
      content: "Hello World!",
      author: "me"
    }
  })
  await prisma.project.deleteMany();
  await prisma.project.create({
    data: {
      name: "Chicken Running",
      description: "This web app allows a gardener to organize their garden and share information with others through a blogging system.",
      demoUrl: "https://chicken-running.herokuapp.com/",
      owner: "maxaeon",
      repoName: "project-2",
      repoUrl: "https://github.com/maxaeon/project-2",
      imageUrl: "https://via.placeholder.com/640x640"
    }
  })
  await prisma.project.create({
    data: {
      name: "Fantasy World Wiki",
      description: "This web app allows a gardener to organize their garden and share information with others through a blogging system.",
      demoUrl: "https://tevissaur.github.io/forene-wiki/",
      owner: "tevissaur",
      repoName: "forene-wiki",
      repoUrl: "https://github.com/tevissaur/forene-wiki",
      imageUrl: "https://via.placeholder.com/640x640"
    }
  })
  await prisma.project.create({
    data: {
      name: "Netflix and Grill",
      description: "This web app allows a gardener to organize their garden and share information with others through a blogging system.",
      demoUrl: "https://alexanderleino.github.io/Netflix-and-Grill/",
      owner: "AlexanderLeino",
      repoName: "Netflix-and-Grill",
      repoUrl: "https://github.com/AlexanderLeino/Netflix-and-Grill",
      imageUrl: "https://via.placeholder.com/640x640"
    }
  })
  await prisma.project.create({
    data: {
      name: "Local Farmers",
      description: "This web app allows a gardener to organize their garden and share information with others through a blogging system.",
      demoUrl: "https://your-local-farmers.herokuapp.com/",
      owner: "tevissaur",
      repoName: "your-local-farmers",
      repoUrl: "https://github.com/tevissaur/your-local-farmers",
      imageUrl: "https://via.placeholder.com/640x640"
    }
  })
  await prisma.project.create({
    data: {
      name: "Tic Tac Toe",
      description: "This web app allows a gardener to organize their garden and share information with others through a blogging system.",
      demoUrl: "https://tevissaur.github.io/orange-blossom/",
      owner: "tevissaur",
      repoName: "orange-blossom",
      repoUrl: "https://github.com/tevissaur/orange-blossom",
      imageUrl: "https://via.placeholder.com/640x640"
    }
  })
  await prisma.example.upsert({
    where: {
      id,
    },
    create: {
      id,
    },
    update: {},
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
