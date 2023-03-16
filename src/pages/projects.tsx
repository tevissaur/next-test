import { type NextPage } from "next";
import Head from "next/head";
import Article from "~/components/article";
import Card from "~/components/card";
import Header from "~/components/header";
import { api } from "~/utils/api";

const Projects: NextPage = () => {
  const {
    data: projects,
    isLoading,
    isError,
    isSuccess,
  } = api.example.getProjects.useQuery();
  return (
    <>
      {!isLoading && isSuccess && projects
        ? projects.map((project) => <Card project={project} />)
        : "Loading!"}
    </>
  );
};

export default Projects;
