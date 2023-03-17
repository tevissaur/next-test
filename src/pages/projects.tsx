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
    <div className="flex lg:flex-row flex-col w-full gap-6">
      <div className="flex min-h-screen w-full flex-col items-center justify-start to-[#15162c] p-6">
        {!isLoading && isSuccess && projects ? (
          projects.map((project) => <Card key={project.id} project={project} />)
        ) : (
          <> Loading! </>
        )}
      </div>
    </div>
  );
};

export default Projects;
