import { type NextPage } from "next";
import VisibilitySensor from "react-visibility-sensor";
import { Service } from "@prisma/client";
import { useState } from "react";
import Image from "next/image";

type ServiceProps = {
  service?: Service;
  isExpanded?: boolean;
};

const ServiceTile: NextPage<ServiceProps> = ({ service }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={`duration-50 project-tile relative flex w-full items-end justify-start flex-col gap-4 overflow-hidden border-b-2 border-black p-6 text-white transition-all ease-in ${
        visible
          ? "opacity-100 sm:opacity-90 sm:hover:opacity-100"
          : "opacity-40"
      }`}
    >
      <div className="item-start text-left z-10 flex w-full flex-col justify-start rounded-lg border-2 border-[#233329] bg-[#4D4730] p-6 text-white/90 shadow-2xl sm:items-end md:w-2/5 lg:w-1/3 xl:w-2/5 2xl:w-1/4">
        <VisibilitySensor
          onChange={(isVisible: boolean | ((prevState: boolean) => boolean)) =>
            setVisible(isVisible)
          }
        >
          <div className="flex h-min flex-col justify-start gap-10 rounded-lg p-3">
            <h3 className="z-10 text-left text-3xl font-bold">
              {service?.name}
            </h3>
            <div className="text-lg">{service?.description}</div>
          </div>
        </VisibilitySensor>
      </div>
      <Image
        className={`z-0 object-cover transition-all duration-300 opacity-80`}
        src={service?.imageUrl || "/web-dev.jpg"}
        alt={"Snapshot of the application."}
        fill
      />
    </div>
  );
};

export default ServiceTile;
