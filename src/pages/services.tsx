import { type NextPage } from "next";
import ServiceTile from "~/components/service-tile";
import { api } from "~/utils/api";
import Alert from "~/components/alert";

const Services: NextPage = () => {
  const {
    data: services,
    isLoading,
    isError,
    isSuccess,
    error
  } = api.example.getServices.useQuery();
  return (
    <div className="flex w-full flex-col gap-0">
      {isLoading && <Alert loading variant="warning" />}
      {(isSuccess && services) &&
        services.map((service) => (
          <ServiceTile key={service.id} service={service} />
        ))}
      {isError && <Alert error={error.message} variant="error" />}
    </div>
  );
};

export default Services
