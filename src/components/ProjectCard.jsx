import "./ProjectCard.css";

function ProjectCard({title, description, techs, github}) {
    return (
        <div className="project-card">
            <h2>{title}</h2>

            <p className="project-description">{description}</p>

            <p className="project-techs">
                <strong>Tech Stacks:</strong> {techs.join(", ")}
            </p>

            <a
                href={github}
                target="_blank"
                className="github-btn"
            >
                View on GitHub
            </a>
        </div>
    );
}

export default ProjectCard;