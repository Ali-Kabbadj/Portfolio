import { db } from "~/server/db";

type Stack = {
  id: number;
  name: string | null;
};

type Project = {
  id: number;
  name: string | null;
  description: string | null;
  stacks: Stack[] | null;
};

async function getProjects(): Promise<Project[]> {
  const dbProjects = await db.query.projects.findMany();
  const dbStacks = await db.query.stacks.findMany();
  const dbProjectOnStacks = await db.query.projectOnStacks.findMany();
  
  const stacks : Stack[] = dbStacks.map((stack) => ({
    id: stack.id,
    name: stack.name,
  }));

  const projects: Project[] = dbProjects.map((project) => ({
    id: project.id,
    name: project.name,
    description: project.description,
    stacks: dbProjectOnStacks
      .filter((projectOnStack) => projectOnStack.projectId === project.id)
      .map((projectOnStack) =>
        stacks.find((stack) => stack.id === projectOnStack.stackId)
      )
      .filter((stack): stack is Stack => stack !== undefined),
  }));

  return projects;
}