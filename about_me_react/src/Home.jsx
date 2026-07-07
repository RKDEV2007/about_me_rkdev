import ContactSection from "./ContactSection";
import BounceCards from "./BounceCards";
import projectsData from "./projectsData";

const FEATURED_COUNT = 3;
const featuredProjects = projectsData.slice(0, FEATURED_COUNT);
const projectPreviewTransforms = [
  "rotate(5deg) translate(-92px)",
  "rotate(0deg) translate(-46px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(46px)",
  "rotate(-5deg) translate(92px)"
];

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
              <a href="#projects" className="btn">Посмотреть работы</a>
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
            <img src="/images/profile.jpg" alt="Фото разработчика" className="hero-image" />
            <div className="hero-card-info">
              <span>RKDEV</span>
              <h3>Роман Карпов</h3>
              <p>Frontend developer, который собирает ясные интерфейсы для реальных задач.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="about">
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
                чтобы сайт не просто выглядел хорошо, а вел к понятному действию.
              </p>
            </article>

            <article className="card">
              <span className="card-number">02</span>
              <h3>Интерфейс</h3>
              <p>
                Собираю адаптивную верстку на HTML, CSS, JavaScript и React:
                сетки, карточки, формы, состояния, навигацию и интерактивные детали.
              </p>
            </article>

            <article className="card">
              <span className="card-number">03</span>
              <h3>Качество</h3>
              <p>
                Пишу читаемый код, держу структуру компонентов в порядке и проверяю,
                как страница выглядит на разных экранах.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <span className="section-kicker">Портфолио</span>
          <h2 className="section-title">Проекты с фокусом на пользу</h2>
          <p className="section-subtitle">
            В подборке есть сайты для услуг, локального бизнеса и React-приложения.
            Каждый проект показывает работу со структурой, адаптивом и визуальной подачей.
          </p>

          <div className="projects-grid projects-grid-featured">
            {featuredProjects.map((project) => (
              <article key={project.id} className="project-card">
                <BounceCards
                  className="project-bounceCards"
                  images={Array(5).fill(project.image)}
                  alt={`Превью: ${project.title}`}
                  containerWidth="100%"
                  containerHeight={222}
                  animationDelay={0}
                  animationStagger={0.08}
                  easeType="elastic.out(1, 0.5)"
                  transformStyles={projectPreviewTransforms}
                  enableHover={true}
                />
                <div className="project-content">
                  <span className="project-tag">{project.tag}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-links">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="projects-cta">
            <button type="button" className="btn" onClick={goToProjects}>
              Открыть все проекты
            </button>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <span className="section-kicker">Форматы</span>
          <h2 className="section-title">Чем могу быть полезен</h2>
          <p className="section-subtitle">
            Беру задачи, где важны аккуратная подача, адаптивность и понятная структура.
          </p>

          <div className="services-grid">
            <article className="card service-card">
              <h3>Лендинг для услуги</h3>
              <p>
                Одностраничный сайт с сильным первым экраном, блоками доверия,
                описанием предложения и удобным переходом к контакту.
              </p>
              <span className="price">от 6000 руб.</span>
            </article>

            <article className="card service-card">
              <h3>Сайт-визитка</h3>
              <p>
                Компактный сайт о специалисте, бренде или локальном бизнесе:
                профиль, услуги, проекты, преимущества и контакты.
              </p>
              <span className="price">от 9000 руб.</span>
            </article>

            <article className="card service-card">
              <h3>Верстка по макету</h3>
              <p>
                Перевод дизайна из Figma в HTML, CSS, JavaScript или React
                с вниманием к адаптиву, состояниям и повторяемым компонентам.
              </p>
              <span className="price">от 7000 руб.</span>
            </article>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}

export default Home;
