import AboutMe from "@/components/AboutMe"
import Contact from "@/components/Contact"
import Experience from "@/components/Experience"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"

export default function Home() {
  return (
    <main>
      <Hero/>
      <AboutMe/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
    </main>
  )
}
