import "./SkillCard.css";

function Card({skill, percentage, level, experience, projects}) {
    return (
        <div className="card">
            <h2>{skill}</h2>

            <p className="label">Proficiency</p>

            <div className="progress-bar">
                <div className="progress" style={{width: `${percentage}%`}}>
                </div>
            </div>

            <p>{percentage}%</p>

            <p>
                <strong>Level:</strong> {level}
            </p>

            <p>
                <strong>Experience:</strong> {experience}
            </p>

            <div>
                <strong>Projects:</strong> {projects}
            </div>
        </div>
    )
}

export default Card;