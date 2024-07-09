import SimpleLink from "./SimpleLink";
import Section from "./Section";
export default function About() {
  return (
    <Section
      title="About Me"
      className="lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3"
    >
      <div className="leading-7">
        <p>From Jakarta, Indonesia. Currently in Malaysia &#40;2023 - Present&#41;</p>
        <div><p className="font-bold">Hobbies: </p> Listening Music, Gaming, Coding</div>
        <div>
          <p className="font-bold">Music Preferences: </p>
          <ul className="list-disc pl-4">
            <li className="ml-2">
              <SimpleLink href="https://www.youtube.com/@BTS" text="BTS" />
            </li>
            <li className="ml-2">
              <SimpleLink
                href="https://www.youtube.com/@ArianaGrande"
                text="Ariana Grande"
              />
            </li>
            <li className="ml-2">
              <SimpleLink
                href="https://www.youtube.com/@afganofficial"
                text="Afgan"
              />
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold">Current Games: </p>
          <ul className="list-disc pl-4">
            <li className="ml-2">
              <SimpleLink href="https://tarisglobal.com/" text="Tarisland" />{" "}
              (Protagonist / ASIA-3)
            </li>
            <li className="ml-2">
              <SimpleLink href="https://skylore.com" text="Skylore" />{" "}
              (Protagonist)
            </li>
            <li className="ml-2">Nintendo Switch</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
