import { type NextPage } from "next";
import Head from "next/head";
import Article from "~/components/article";
import Card from "~/components/card";
import Header from "~/components/header";
import Loading from "~/components/loading";
import ProjectTile from "~/components/project-tile";
import { api } from "~/utils/api";

const Projects: NextPage = () => {
  const {
    data: projects,
    isLoading,
    isError,
    isSuccess,
  } = api.example.getProjects.useQuery();
  return (
    <div className="flex w-full flex-col gap-0">
      {isLoading && <Loading />}
      {(isSuccess && projects) &&
        projects.map((project) => (
          <ProjectTile key={project.id} project={project} />
        ))}
      {isError && <p>Error</p>}
    </div>
  );
};

export default Projects;
