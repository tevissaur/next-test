import { type NextPage } from "next";
import ServiceTile from "~/components/service-tile";
import { api } from "~/utils/api";
import Alert from "~/components/alert";
import { useState } from "react";

const Services: NextPage = () => {
  const {
    data: services,
    isLoading,
    isError,
    isSuccess,
    error,
  } = api.example.getServices.useQuery();
  const [message, setMessage] = useState("");

  return (
    <div className="flex h-full w-full flex-col gap-0">
      {isLoading && <Alert loading variant="warning" />}
      {isSuccess &&
        services &&
        services.map((service) => (
          <ServiceTile key={service.id} service={service} />
        ))}
      {isError && <Alert error={error.message} variant="error" />}
      <form
        className="flex w-full flex-col items-center justify-center gap-4 bg-white/20 px-6 py-4"
        action="mailto:tevisreilly1@gmail.com"
        method="GET"
        encType="text/plain"
        onSubmit={(e) => {
          e.preventDefault();
          setMessage("");
        }}
      >
        <label
          htmlFor="message"
          className=" text-3xl font-extrabold tracking-tight text-white"
        >
          Get in contact with me!
        </label>
        <textarea
          className="w-full rounded-lg border-2 border-black bg-black/40 p-2 text-[1.5rem] font-semibold tracking-tight text-white transition-colors duration-200 hover:bg-black/80 focus:bg-black/80 sm:text-3xl md:font-extrabold lg:w-1/2"
          name="message"
          id="message"
          rows={10}
          value={message}
          placeholder="Would love to connect and work together!"
          onChange={(e) => setMessage(e.currentTarget.value)}
        />

        <button
          type="submit"
          className="rounded-full bg-white/20 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/40 hover:shadow-lg"
        >
          Send!
        </button>
      </form>
    </div>
  );
};

export default Services;
