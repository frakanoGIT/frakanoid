import PersonalIntro from "./components/PersonalIntro";
import About from "./components/About";
import Skills from "./components/Skills";

export default function page() {
  return (
    <>
      <PersonalIntro />
      <About />
      <Skills />
      <About />
    </>
  );
}
