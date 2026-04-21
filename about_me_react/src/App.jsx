import { useState, useEffect } from "react";
import Home from "./Home";
import Projects from "./Projects";

function App() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (page === "projects") {
      document.body.classList.add("page-projects");
    } else {
      document.body.classList.remove("page-projects");
    }
  }, [page]);

  function goTo(newPage) {
    setPage(newPage);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="header">
        <div className="container nav">
          <a
            href="#"
            className="logo"
            onClick={(e) => {
              e.preventDefault();
              goTo("home");
            }}
          >
            Ob<span>1ch</span>
          </a>

          <button
            className="burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Открыть меню"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={"nav-menu" + (menuOpen ? " active" : "")}>
            {page === "home" ? (
              <>
                <a href="#about" onClick={closeMenu}>Обо мне</a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    goTo("projects");
                  }}
                >
                  Проекты
                </a>
                <a href="#services" onClick={closeMenu}>Услуги</a>
                <a href="#contact" onClick={closeMenu}>Контакты</a>
              </>
            ) : (
              <>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    goTo("home");
                  }}
                >
                  Главная
                </a>
                <a href="#contact" onClick={closeMenu}>Контакты</a>
              </>
            )}
          </nav>
        </div>
      </header>

      <main>
        {page === "home" ? (
          <Home goToProjects={() => goTo("projects")} />
        ) : (
          <Projects />
        )}
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p className="footer-copy">© 2026 Ob1ch. Frontend Developer.</p>
          <div className="footer-actions">
            <a className="footer-mail" href="mailto:romakarpov90@gmail.com">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              romakarpov90@gmail.com
            </a>
            {page === "home" ? (
              <a className="footer-top" href="#home">Наверх ↑</a>
            ) : (
              <a
                className="footer-top"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  goTo("home");
                }}
              >
                На главную
              </a>
            )}
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
