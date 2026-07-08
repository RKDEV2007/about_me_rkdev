import { useEffect, useState } from "react";
import BounceCards from "./BounceCards";
import ContactSection from "./ContactSection";
import projectsData from "./projectsData";

const projectPreviewTransforms = [
  "rotate(5deg) translate(-92px)",
  "rotate(0deg) translate(-46px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(46px)",
  "rotate(-5deg) translate(92px)"
];

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    function onKey(e) {
      if (e.key === "Escape") {
        setActiveProject(null);
      }
    }

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  function openProject(project, e) {
    if (e.target.closest("a")) return;
    setActiveProject(project);
  }

  return (
    <>
      <section className="section section-hero">
        <div className="container">
          <span className="section-kicker">Работы</span>
          <h1 className="section-title">Проекты и интерфейсные задачи</h1>
          <p className="section-subtitle">
            Подборка сайтов и React-проектов: от посадочных страниц для услуг
            до небольших приложений с интерактивной логикой.
          </p>
        </div>
      </section>

      <section className="section projects-list-section">
        <div className="container">
          <div className="projects-grid projects-grid-full">
            {projectsData.map((project) => (
              <article
                key={project.id}
                className="project-card project-card-clickable"
                onClick={(e) => openProject(project, e)}
              >
                <div className="project-card-image-wrap">
                  <BounceCards
                    className="project-bounceCards"
                    images={project.gallery}
                    alt={`Превью: ${project.title}`}
                    containerWidth="100%"
                    containerHeight={222}
                    animationDelay={0}
                    animationStagger={0.08}
                    easeType="elastic.out(1, 0.5)"
                    transformStyles={projectPreviewTransforms}
                    enableHover={true}
                  />
                </div>
                <div className="project-content">
                  <span className="project-tag">{project.tag}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags-inline">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      <div
        className={"modal" + (activeProject ? " modal-open" : "")}
        role="dialog"
        aria-modal="true"
        aria-hidden={activeProject ? "false" : "true"}
      >
        <div className="modal-backdrop" onClick={() => setActiveProject(null)}></div>
        <div className="modal-content">
          <button
            className="modal-close"
            onClick={() => setActiveProject(null)}
            aria-label="Закрыть"
          ></button>
          <div className="modal-body">
            {activeProject && (
              <div className="modal-project">
                <img src={activeProject.image} alt="" className="modal-project-image" />
                <span className="project-tag">{activeProject.tag}</span>
                <h2 className="modal-project-title">{activeProject.title}</h2>
                <p className="modal-project-desc">{activeProject.description}</p>
                <div className="project-tags-inline">
                  {activeProject.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={activeProject.demo} target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
                  <a href={activeProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
