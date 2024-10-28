import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
  {
    skill: "C++",
    level: "advanced",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img src="../images/Arturs.jpg" alt="Arturs avatar" className="avatar" />
  );
}

function Intro() {
  return (
    <div className="data">
      <header>
        <h1>Arturs Anikins</h1>
      </header>
      <p>
        Hello, my name is Arturs Anikins (Artūrs Aņikins), and I love building
        things and seeing the results of hard work. My main skill is C++, and I
        really like Qt. However, I also have other skills. I have knowledge of
        other programming languages such as Python, Pascal, C, CSS, SCSS (Sass
        CSS), HTML, JavaScript, and many other tools, instruments, and
        frameworks such as Git, GitKraken, Qt, CMake, JIRA, and more. I'm agile
        and always ready to learn. By nature, I am a perfectionist. In addition,
        I love playing computer games. I'd say I'm a hardcore gamer, haha!
      </p>
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skillName}</span>
      <span> {props.emoji}</span>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          skillName={skill.skill}
          emoji={
            skill.level === "advanced"
              ? "💪"
              : skill.level === "intermediate"
              ? "👍"
              : skill.level === "beginner"
              ? "👶"
              : null
          }
          color={skill.color}
        />
      ))}

      {/* <Skill skillName="HTML" emoji="💪" color="orange" />
      <Skill skillName="CSS" emoji="💪" color="green" />
      <Skill skillName="JavaScript" emoji="💪" color="red" />
      <Skill skillName="React" emoji="💪" color="blue" /> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
