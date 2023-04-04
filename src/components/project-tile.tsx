import { type NextPage } from "next";
import VisibilitySensor from "react-visibility-sensor";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import autoAnimate from "@formkit/auto-animate";
import { api } from "~/utils/api";
import Image from "next/image";
import { Project } from "@prisma/client";
import Button, { ProjectTileButton } from "./button";
import { useEffect, useState, useRef } from "react";

type ProjectProps = {
  project?: Project;
  isExpanded?: boolean;
};

const ProjectTile: NextPage<ProjectProps> = ({ project, isExpanded }) => {
  const [visible, setVisible] = useState(false);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <VisibilitySensor
      onChange={(isVisible: boolean | ((prevState: boolean) => boolean)) =>
        setVisible(isVisible)
      }
    >
      <div
        className={`duration-50 project-tile relative flex h-max w-full flex-col justify-between gap-4 overflow-hidden border-b-2 border-black text-white transition-all ease-in ${
          visible ? "opacity-80 hover:opacity-100" : "opacity-40"
        }`}
      >
        <div className="flex flex-col justify-between items-start bg-white/90 w-1/4 z-10 m-6 p-6 rounded-lg text-black">
          <div className="flex h-min flex-col justify-start gap-10 rounded-lg p-3">
            <h3 className="z-10 text-left text-3xl font-bold">
              {project?.name}
            </h3>
            <div className="text-lg">{project?.description}</div>
          </div>

          <div className="flex h-min flex-col justify-start gap-5 rounded-lg p-3">
            <h3 className="z-10 text-left text-3xl font-bold">Tech Stack</h3>
            <div className="text-lg">Icons go here</div>
          </div>

          <div className="flex max-h-min justify-start gap-3">
            <ProjectTileButton href={project?.demoUrl || "#"}>
              {" "}
              Demo{" "}
            </ProjectTileButton>
            <ProjectTileButton href={project?.repoUrl || "#"}>
              {" "}
              Github{" "}
            </ProjectTileButton>
          </div>
        </div>
        <Image
          className={`z-0 object-cover transition-all duration-300 opacity-70`}
          src={project?.imageUrl || ""}
          alt={"Snapshot of the application."}
          fill
        />
      </div>
    </VisibilitySensor>
  );
};

export default ProjectTile;
