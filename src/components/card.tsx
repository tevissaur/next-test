import { type NextPage } from "next";

import { api } from "~/utils/api";
import Image from "next/image";
import { Project } from "@prisma/client";
import Button from "./button";

type CardProps = {
  project?: Project;
};

const Card: NextPage<CardProps> = ({ project }) => {
  return (
    <>
      <div className="my-10 flex max-w-lg flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
        <h3 className="text-2xl font-bold">{project?.name}</h3>
        <div className="text-lg">{project?.description}</div>
        <Image
          className="rounded-xl"
          src={project?.imageUrl || ""}
          alt={"Snapshot of the application."}
          width={640}
          height={340}
        />
        <div className="flex justify-center gap-4">
          <Button href={project?.demoUrl || "#"}> Demo </Button>
          <Button href={project?.githubUrl || "#"}> Github </Button>
        </div>
      </div>
    </>
  );
};

export default Card;
