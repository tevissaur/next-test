import { type NextPage } from "next";
import ProjectTile from "~/components/project-tile";
import { api } from "~/utils/api";
import Alert from "~/components/alert";

const Projects: NextPage = () => {
  const {
    data: projects,
    isLoading,
    isError,
    isSuccess,
    error
  } = api.example.getProjects.useQuery();
  return (
    <div className="flex w-full flex-col gap-0">
      {isLoading && <Alert loading variant="warning" />}
      {(isSuccess && projects) &&
        projects.map((project) => (
          <ProjectTile key={project.id} project={project} />
        ))}
      {isError && <Alert error={error.message} variant="error" />}
    </div>
  );
};

export default Projects;
