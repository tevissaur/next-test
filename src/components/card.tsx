import { type NextPage } from "next";
import VisibilitySensor from "react-visibility-sensor";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import autoAnimate from "@formkit/auto-animate";
import { api } from "~/utils/api";
import Image from "next/image";
import { Project } from "@prisma/client";
import Button from "./button";
import { useEffect, useState, useRef } from "react";

type CardProps = {
  project?: Project;
  isExpanded?: boolean;
};

const Card: NextPage<CardProps> = ({ project, isExpanded }) => {

  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(isExpanded);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const expand = () => setExpanded(!expanded);

  return (
    <VisibilitySensor
      onChange={(isVisible: boolean | ((prevState: boolean) => boolean)) =>
        setVisible(isVisible)
      }
    >
      <div
        className={`duration-50 my-10 flex max-w-full flex-col items-center gap-4 rounded-xl bg-white/10 px-6 py-4 text-white transition-all ease-in hover:bg-white/20 hover:opacity-100 lg:max-w-lg ${
          visible ? "opacity-100" : "opacity-50"
        }`}
        ref={parent}
      >
        <h3
          className="text-2xl font-bold hover:cursor-pointer"
          onClick={expand}
        >
          {project?.name}
        </h3>
        {expanded && (
          <div className="flex max-w-full flex-row items-center gap-4">
            <div className="flex max-w-full flex-col items-center gap-4">
              <div className="text-lg">{project?.description}</div>

              <Image
                className={`rounded-xl ${visible ? " visible " : " visible "}`}
                src={project?.imageUrl || ""}
                alt={"Snapshot of the application."}
                width={640}
                height={340}
              />
              <div className="flex justify-center gap-4">
                <Button href={project?.demoUrl || "#"}> Demo </Button>
                <Button href={project?.repoUrl || "#"}> Github </Button>{" "}
              </div>
            </div>
            <div className="flex max-w-full flex-col items-center gap-4"></div>
          </div>
        )}
      </div>
    </VisibilitySensor>
  );
};

export default Card;
