import { type NextPage } from "next";
import VisibilitySensor from "react-visibility-sensor";
import Image from "next/image";
import { Project } from "@prisma/client";
import { ProjectTileButton } from "./button";
import { useEffect, useState } from "react";
import { api } from "~/utils/api";
import { skillLogos } from "~/utils/constants";

type ProjectProps = {
  project?: Project;
  isExpanded?: boolean;
};

const ProjectTile: NextPage<ProjectProps> = ({ project }) => {
  const [visible, setVisible] = useState(false);
  const { data: contributors, isSuccess } =
    api.example.getGithubRepoContributorsInfo.useQuery({
      repoName: project?.repoName || "",
      owner: project?.owner || "",
    });
  return (
    <VisibilitySensor
      onChange={(isVisible: boolean | ((prevState: boolean) => boolean)) =>
        setVisible(isVisible)
      }
      partialVisibility
    >
      <div
        className={`duration-50 project-tile relative flex h-max w-full flex-col justify-between gap-4 overflow-hidden border-b-2 border-black p-2 md:p-6 text-white transition-all ease-in ${
          visible
            ? "opacity-100 sm:opacity-90 sm:hover:opacity-100"
            : "opacity-40"
        }`}
      >
        <div className="item-center z-10 flex w-full flex-col justify-between rounded-lg border-2 border-[#233329] bg-[#4D4730] p-6 text-white/90 shadow-2xl sm:items-start md:w-4/5 lg:w-1/3 2xl:w-1/3 ">
          <div className="flex h-min flex-col justify-start gap-5 rounded-lg">
            <h3 className="z-10 text-left text-3xl font-bold">
              {project?.name}
            </h3>
            <div className="text-lg">{project?.description}</div>
          </div>
          <div className="flex h-min flex-grow flex-wrap justify-around gap-5 rounded-lg w-full">
            {isSuccess && contributors && contributors.length > 0 && (
              <h3 className="z-10 w-full text-left text-3xl font-bold">
                Contributors
              </h3>
            )}
            {isSuccess &&
              contributors &&
              contributors.map((contributor) => (
                <a
                  key={contributor.login}
                  className="w-1/3 text-center text-lg"
                  href={contributor.html_url}
                  target="_blank"
                >
                  <Image
                    className="m-auto rounded-full"
                    src={contributor.avatar_url}
                    alt="Contributor's avatar."
                    width={50}
                    height={50}
                  />
                  {contributor.login}
                </a>
              ))}
          </div>
          <div className="flex flex-wrap justify-around gap-5 w-full">
            <h3 className="z-10 w-full text-left text-3xl font-bold">Tech Stack</h3>
            {project?.technologies?.split(",").map((tech) => (
              <div key={tech} className="w-fit md:w-1/4 h-full text-center text-xl border-black border rounded-xl p-2 bg-white/20">
                {skillLogos[tech] && (
                  <Image
                    className="m-auto"
                    src={skillLogos[tech]}
                    alt="Skill logo."
                    width={100}
                    height={100}
                  />
                )}
                {tech}
              </div>
            ))}
          </div>

          <div className="flex max-h-min justify-start gap-3 p-2">
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
          className={`z-0 object-cover opacity-80 transition-all duration-300`}
          src={project?.imageUrl || ""}
          alt={"Snapshot of the application."}
          fill
        />
      </div>
    </VisibilitySensor>
  );
};

export default ProjectTile;
