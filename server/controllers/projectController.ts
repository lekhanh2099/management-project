import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProject = async (
 req: Request,
 res: Response
): Promise<void> => {
 const { id } = req.params;

 try {
  const project = await prisma.project.findUnique({
   where: { id: parseInt(id) },
  });

  res.json(project);
 } catch (error: any) {
  res
   .status(500)
   .json({ message: `Error retrieving project: ${error.message}` });
 }
};

export const getProjects = async (
 req: Request,
 res: Response
): Promise<void> => {
 try {
  const projects = await prisma.project.findMany();
  res.json(projects);
 } catch (error: any) {
  res
   .status(500)
   .json({ message: `Error retrieving projects: ${error.message}` });
 }
};

export const createProject = async (
 req: Request,
 res: Response
): Promise<any> => {
 const { name, description, startDate, endDate } = req.body;

 try {
  const existingProject = await prisma.project.findMany({
   where: { name },
  });

  if (existingProject) {
   return res.status(400).json({ message: "Project name already exists." });
  }
  const newProject = await prisma.project.create({
   data: {
    name,
    description,
    startDate,
    endDate,
   },
  });
  res.status(201).json(newProject);
 } catch (error: any) {
  res
   .status(500)
   .json({ message: `Error creating a project: ${error.message}` });
 }
};
