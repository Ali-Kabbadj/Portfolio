import React from "react"
import { projectsData } from "~/static/data"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type ProjectProps = typeof projectsData[number];

export function Projects() {
    return (
        <section id="projects" className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">Projects</h1>
                <p className="mt-4 text-lg text-center">Here are some of the projects I've worked on.</p>
            </div>
            <ProjectsCarousel  />
        </section>
    )
}

function ProjectsCarousel() {
    return (
         <Carousel className="mt-8">
            <CarouselContent>
                <CarouselNext />
                {
                    projectsData.map((project, index) => (
                        <CarouselItem key={index}>
                            <Card>
                                <CardContent>
                                    <div className="flex flex-col items-center">
                                        <img src={project.imageUrl} alt={project.title} className="w-full h-40 object-cover rounded-lg" />
                                        <h2 className="text-xl font-bold mt-4">{project.title}</h2>
                                        <p className="mt-2 text-sm text-center">{project.description}</p>
                                        <div className="flex flex-wrap justify-center mt-4">
                                            {
                                                project.tags.map((tag, index) => (
                                                    <span key={index} className="px-2 py-1 bg-primary text-background rounded-lg text-xs mr-2">{tag}</span>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
    )
}
