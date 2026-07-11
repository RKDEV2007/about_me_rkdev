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

const services = [
  {
    number: "01",
    title: "Лендинг для услуги",
    price: "от 6000 руб.",
    description:
      "Одностраничный сайт, который последовательно знакомит с предложением и приводит пользователя к заявке.",
    details: ["Структура и тексты", "Адаптивная верстка", "Формы и интерактив"],
    project: projectsData[1]
  },
  {
    number: "02",
    title: "Сайт-визитка",
    price: "от 9000 руб.",
    description:
      "Компактный сайт для специалиста или бренда: профиль, услуги, преимущества, примеры работ и контакты.",
    details: ["Подача специалиста", "Несколько смысловых разделов", "Удобная мобильная версия"],
    project: projectsData[0]
  },
  {
    number: "03",
    title: "Верстка по макету Figma",
    price: "от 7000 руб.",
    description:
      "Перевожу готовый дизайн в точный адаптивный интерфейс на HTML, CSS, JavaScript или React.",
    details: ["Соответствие макету", "Компонентная структура", "Состояния и анимации"],
    project: projectsData[2]
  }
];

function ProjectExample({ project }) {
  return (
    <div className="project-card service-project">
      <BounceCards
        className="project-bounceCards"
        images={project.gallery}
        alt={`Превью: ${project.title}`}
        containerWidth="100%"
        containerHeight={240}
        animationDelay={0}
        animationStagger={0.08}
        easeType="elastic.out(1, 0.5)"
        transformStyles={projectPreviewTransforms}
        enableHover={true}
      />
      <div className="project-content">
        <span className="project-tag">Пример работы / {project.tag}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-links">
          <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
          <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  );
}

function Home({ goToProjects }) {
  return (
    <>
      <section className="hero" id="home">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="badge">Frontend Developer / React / Adaptive UI</span>
            <h1>Создаю понятные сайты для экспертов и малого бизнеса</h1>
            <p>
              Проектирую интерфейс, верстаю адаптивные страницы и собираю React-проекты,
              в которых аккуратный дизайн работает на доверие, заявки и удобство пользователя.
            </p>

            <div className="hero-actions">
              <a href="#services" className="btn">Посмотреть услуги</a>
              <a href="#contact" className="btn btn-secondary">Обсудить проект</a>
            </div>

            <div className="hero-tags">
              <span>Семантичная верстка</span>
              <span>React-компоненты</span>
              <span>Адаптивные интерфейсы</span>
              <span>Внимание к деталям</span>
            </div>
          </div>

          <div className="hero-card">
            <picture>
              <source srcSet="/images/profile.webp" type="image/webp" />
              <img src="/images/profile.jpg" alt="Фото разработчика" className="hero-image" />
            </picture>
            <div className="hero-card-info">
              <span>RKDEV</span>
              <h3>Роман Карпов</h3>
              <p>Frontend developer, который собирает ясные интерфейсы для реальных задач.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="container">
          <span className="section-kicker">Услуги</span>
          <h2 className="section-title">Что я делаю</h2>
          <p className="section-subtitle">
            Выберите подходящий формат: от компактной посадочной страницы
            до точной адаптивной верстки готового дизайна. Под каждой услугой
            расположен соответствующий пример.
          </p>

          <div className="offers-grid">
            {services.map((service) => (
              <div className="offer-pair" key={service.number}>
                <article className="service-copy">
                  <div className="service-meta">
                    <span className="service-number">{service.number}</span>
                    <span className="price">{service.price}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-details">
                    {service.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </article>

                <div className="offer-example" id={service.number === "01" ? "projects" : undefined}>
                  <div className="offer-example-heading">
                    <span>Пример к услуге</span>
                    <strong>{service.number}</strong>
                  </div>
                  <ProjectExample project={service.project} />
                </div>
              </div>
            ))}
          </div>

          <div className="projects-cta">
            <button type="button" className="btn" onClick={goToProjects}>
              Смотреть все проекты
            </button>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="container">
          <span className="section-kicker">Профиль</span>
          <h2 className="section-title">Обо мне</h2>
          <p className="section-subtitle">
            Я работаю с фронтендом как с инструментом для ясной коммуникации:
            помогаю упаковать услугу, продукт или личный бренд в аккуратный сайт,
            который легко читать, удобно открывать с телефона и просто поддерживать.
          </p>

          <div className="about-grid">
            <article className="card">
              <span className="card-number">01</span>
              <h3>Структура</h3>
              <p>
                Продумываю порядок блоков, тексты, акценты и сценарий пользователя,
                чтобы сайт вел к понятному действию.
              </p>
            </article>

            <article className="card">
              <span className="card-number">02</span>
              <h3>Интерфейс</h3>
              <p>
                Собираю адаптивную верстку на HTML, CSS, JavaScript и React:
                сетки, формы, состояния, навигацию и интерактивные детали.
              </p>
            </article>

            <article className="card">
              <span className="card-number">03</span>
              <h3>Качество</h3>
              <p>
                Пишу читаемый код, держу структуру компонентов в порядке и проверяю
                страницу на разных экранах.
              </p>
            </article>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}

export default Home;
