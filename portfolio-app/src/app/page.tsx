import { Intro } from "~/components/global/intro/intro";
import { Projects } from "~/components/sections/projects";

export default async function HomePage() {
    return (
        <>
        <Intro />
        <Projects />
        </>
    )
}
