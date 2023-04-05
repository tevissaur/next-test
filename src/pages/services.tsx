import { type NextPage } from "next";
import ServiceTile from "~/components/service-tile";
import { api } from "~/utils/api";
import Alert from "~/components/alert";

const Services: NextPage = () => {
  const {
    data: projects,
    isLoading,
    isError,
    isSuccess,
    error
  } = api.example.getServices.useQuery();
  return (
    <div className="flex w-full flex-col gap-0">
      {isLoading && <Alert loading variant="warning" />}
      {(isSuccess && projects) &&
        projects.map((project) => (
          <ServiceTile key={project.id} service={project} />
        ))}
      {isError && <Alert error={error.message} variant="error" />}
    </div>
  );
};

export default Services
