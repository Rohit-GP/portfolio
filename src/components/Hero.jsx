import "./Hero.css";
import profile from "../assets/PP.jpg";

function Hero() {
  return (
    <section className="hero"> 
      <img
        src={profile}
        alt="Profile"
      />

      <h1>Rohit GP</h1>

      <h3>Student</h3>

      <p>
        Hello! I am learning React and building my portfolio website.
        I enjoy creating simple and interactive web applications.
      </p>

      <button>Download Resume</button>
    </section>
  );
}

export default Hero;