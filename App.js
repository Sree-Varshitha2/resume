import React from "react";

const projects = [
  {
    title: "Project One",
    description: "A brief description of project one.",
    link: "https://github.com/yourusername/project-one",
  },
  {
    title: "Project Two",
    description: "A brief description of project two.",
    link: "https://github.com/yourusername/project-two",
  },
  // Add more projects here
];

export default function Portfolio() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Pasala Sree Varshitha</h1>
        <nav>
          <a href="#about" style={styles.navLink}>
            About
          </a>
          <a href="#projects" style={styles.navLink}>
            Projects
          </a>
          <a href="#contact" style={styles.navLink}>
            contact
          </a>
        </nav>
      </header>

      <section id="about" style={styles.section}>
        <h2>About Me</h2>
        <p>
          Myself Sree Varshitha, a passionate developer specializing in frontend
          development with React. I love building user-friendly websites etc..
        </p>
      </section>

      <section id="projects" style={styles.section}>
        <h2>Projects</h2>
        {projects.map((project, idx) => (
          <div key={idx} style={styles.projectCard}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </section>

      <section id="contact" style={styles.section}>
        <h2>CONTACT:7670960501</h2>
        <p>Email: sreevarshitha04@gmail.com</p>
        <p>
          GitHub:{"Sree-Varshitha2"}
          <a
            href="https://github.com/Sree-Varshitha2"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Sree-Varshitha2
          </a>
        </p>
        <p>
          LinkedIn:{"sree varshitha"}
          <a
            href="https://linkedin.com/in/sree varshitha"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/sree varshitha
          </a>
        </p>
      </section>

      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: 900,
    margin: "0 auto",
    padding: 20,
    color: "#333",
    lineHeight: 1.6,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "2px solid #ddd",
    paddingBottom: 10,
    marginBottom: 20,
  },
  navLink: {
    marginLeft: 15,
    textDecoration: "none",
    color: "#0077cc",
  },
  section: {
    marginBottom: 40,
  },
  projectCard: {
    border: "1px solid #ccc",
    padding: 15,
    borderRadius: 6,
    marginBottom: 15,
  },
  footer: {
    textAlign: "center",
    padding: 10,
    borderTop: "1px solid #ddd",
    color: "#666",
  },
};
