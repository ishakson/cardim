import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
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
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar image="/ishak.jpg" />
      <div className="data">
        <Intro
          name="İshak Söylemez"
          description="Frontend Developer | Passionate about UI/UX & Web Performance"
        />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar({ image }) {
  return <img src={image} alt="Avatar" className="avatar" />;
}

function Intro({ name, description }) {
  return (
    <div className="intro">
      <h1>{name}</h1>
      <p className="description">{description}</p>
    </div>
  );
}

function SkillList() {
  return (
    <div>
      <h2>Skills</h2>
      <ul className="skill-list">
        {skills.map((s, index) => (
          <Skill key={index} skill={s.skill} color={s.color} level={s.level} />
        ))}
      </ul>
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>
        {skill}{" "}
        {level === "beginner" ? "👶" : level === "intermediate" ? "👍" : "💪"}
      </span>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
