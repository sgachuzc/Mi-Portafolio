import { HeroSection, JobSection, ProjectsSection, TechStackSection } from "../sections"
import { Footer, ProgressBar } from "../ui"

export const HomePage = () => {
  return (
    <>
      <ProgressBar />
      <main>
        <HeroSection />
        <JobSection />
        <TechStackSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  )
}
