import PersonalIntro from "../components/personalIntro/PersonalIntro";
import About from "../components/About";
import Skills from "../components/Skills";
import RecentProjects from "../components/RecentProjects";

export default function page() {
  return (
    <div className="lg:grid lg:grid-cols-2">
      <PersonalIntro />
      <About />
      <Skills />
      <RecentProjects />
    </div>
  );
}
