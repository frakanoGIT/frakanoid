import PersonalIntro from "./components/personalIntro/PersonalIntro";
import About from "./components/About";
import Skills from "./components/Skills";
import RecentProjects from "./components/RecentProjects";

export default function page() {
  return (
    <>
      <PersonalIntro />
      <About />
      <Skills />
      <RecentProjects />
    </>
  );
}
