import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Card from "./components/SkillCard";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />

    <section className="skills-section">
      <h2 className="skills-heading">My Skills (Tech Stacks)</h2>
      <div
        style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
        <Card
          skill="Spring Boot"
          percentage={85}
          level="Advance"
          experience="1 year"
          projects="Complaint Management System, BlogApp"
        />
        <Card
          skill="React"
          percentage={80}
          level="Intermediate"
          experience="1 year"
          projects="Portfolio Website"
        />
        <Card
          skill="Java"
          percentage={90}
          level="Advanced"
          experience="2 year"
          projects={5}
        />
      </div>
    </section>

    <section className="projects-section">
      <h2 className="projects-heading">My Projects</h2>
      <div
        style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
        <ProjectCard
          title="Portfolio Website"
          description="A responsive portfolio showcasing my skills and projects."
          techs={["React", "CSS", "JavaScript"]}
          github="https://github.com/Rohit-GP/My_Portfolio"
        />

        <ProjectCard
          title="Blog App"
          description="A blog app with user authentication and CRUD operations."
          techs={["Spring Boot", "Spring Security", "React", "MySQL"]}
          github="https://github.com/Rohit-GP/BlogApp"
        />
      </div>
    </section>
    </>
  );
}

export default App;