import { useState } from "react";

function Home({ goToProjects }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <section className="hero" id="home">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="badge">Frontend Developer • HTML / CSS / JavaScript / React</span>
            <h1>Делаю <span>лендинги</span> для малого бизнеса</h1>
            <p>
              Создаю современные адаптивные сайты-визитки и лендинги,
              которые помогают бизнесу красиво выглядеть в интернете и получать заявки.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn">Смотреть проекты</a>
              <a href="#contact" className="btn btn-secondary">Связаться со мной</a>
            </div>

            <div className="hero-tags">
              <span>Адаптивная верстка</span>
              <span>Landing Page</span>
              <span>Чистый код</span>
              <span>Быстрая разработка</span>
            </div>
          </div>

          <div className="hero-card">
            <img src="/images/profile.jpg" alt="Фото разработчика" className="hero-image" />
            <div className="hero-card-info">
              <h3>Ob1ch</h3>
              <p>Frontend Developer</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <h2 className="section-title">Обо мне</h2>
          <p className="section-subtitle">
            Я начинающий фронтенд-разработчик. Специализируюсь на создании
            лендингов и сайтов-визиток для малого бизнеса, личных брендов и услуг.
            Делаю аккуратную адаптивную верстку, понятную структуру и современный дизайн.
          </p>

          <div className="about-grid">
            <article className="card">
              <h3>Что я делаю</h3>
              <p>
                Верстаю сайты по макету или с нуля. Собираю понятные блоки,
                делаю адаптив под телефон, планшет и компьютер.
              </p>
            </article>

            <article className="card">
              <h3>С чем работаю</h3>
              <p>
                HTML, CSS, JavaScript, React, Flexbox, Grid, адаптивная верстка,
                базовые анимации, формы, секции для продаж и заявок.
              </p>
            </article>

            <article className="card">
              <h3>Для кого</h3>
              <p>
                Для фотографов, репетиторов, мастеров, кофеен, локального бизнеса,
                экспертов и всех, кому нужен красивый сайт без лишней драмы.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <h2 className="section-title">Проекты</h2>
          <p className="section-subtitle">
            Избранные работы. Остальные — на отдельной странице.
          </p>

          <div className="projects-grid projects-grid-featured">
            <article className="project-card">
              <img src="/images/english.jpg" alt="Превью проекта репетитор по английскому" className="project-image" />
              <div className="project-content">
                <span className="project-tag">Business Website</span>
                <h3>Сайт репетитора по английскому</h3>
                <p>Многостраничный сайт с анимациями: занятия, преподаватели, запись на пробный урок.</p>
                <div className="project-links">
                  <a href="https://rkdev2007.github.io/english-tutor/" target="_blank" rel="noopener">Live Demo</a>
                  <a href="https://github.com/RKDEV2007/english-tutor" target="_blank" rel="noopener">GitHub</a>
                </div>
              </div>
            </article>

            <article className="project-card">
              <img src="/images/clinik.jpg" alt="Превью проекта meridian-clinik" className="project-image" />
              <div className="project-content">
                <span className="project-tag">Business Website</span>
                <h3>Сайт частной клиники meridian-clinik</h3>
                <p>Многостраничный сайт для частной клиники: услуги, врачи, контакты.</p>
                <div className="project-links">
                  <a href="https://rkdev2007.github.io/meridian-clinik/" target="_blank" rel="noopener">Live Demo</a>
                  <a href="https://github.com/RKDEV2007/meridian-clinik" target="_blank" rel="noopener">GitHub</a>
                </div>
              </div>
            </article>

            <article className="project-card">
              <img src="/images/phone.jpg" alt="Превью проекта phone-repair" className="project-image" />
              <div className="project-content">
                <span className="project-tag">Business Website</span>
                <h3>Сайт компании по ремонту телефонов</h3>
                <p>Лендинг для компании по ремонту телефонов.</p>
                <div className="project-links">
                  <a href="https://rkdev2007.github.io/phone-repair/" target="_blank" rel="noopener">Live Demo</a>
                  <a href="https://github.com/RKDEV2007/phone-repair.git" target="_blank" rel="noopener">GitHub</a>
                </div>
              </div>
            </article>
          </div>

          {showMore && (
            <div className="projects-more">
              <div className="projects-grid projects-grid-featured">
                <article className="project-card">
                  <img src="/images/tutor.jpg" alt="Превью проекта команда репетиторов" className="project-image" />
                  <div className="project-content">
                    <span className="project-tag">Business Website</span>
                    <h3>Сайт для команды репетиторов</h3>
                    <p>Многостраничный сайт школы: направления, преподаватели, отзывы и запись.</p>
                    <div className="project-links">
                      <a href="https://rkdev2007.github.io/tutor-school/" target="_blank" rel="noopener">Live Demo</a>
                      <a href="https://github.com/RKDEV2007/tutor-school.git" target="_blank" rel="noopener">GitHub</a>
                    </div>
                  </div>
                </article>
                <article className="project-card">
                  <img src="/images/photo.jpg" alt="Превью проекта Photographer" className="project-image" />
                  <div className="project-content">
                    <span className="project-tag">Landing Page</span>
                    <h3>Сайт фотографа</h3>
                    <p>Лендинг для фотографа с блоком услуг, портфолио, отзывами и формой заявки.</p>
                    <div className="project-links">
                      <a href="https://rkdev2007.github.io/photo-man/" target="_blank" rel="noopener">Live Demo</a>
                      <a href="https://github.com/RKDEV2007/photo-man.git" target="_blank" rel="noopener">GitHub</a>
                    </div>
                  </div>
                </article>
                <article className="project-card">
                  <img src="/images/kofee.jpg" alt="Превью проекта Coffee Shop" className="project-image" />
                  <div className="project-content">
                    <span className="project-tag">Business Website</span>
                    <h3>Сайт кофейни</h3>
                    <p>Современный сайт для кофейни с меню, галереей, описанием и блоком контактов.</p>
                    <div className="project-links">
                      <a href="https://rkdev2007.github.io/coffee-shop/" target="_blank" rel="noopener">Live Demo</a>
                      <a href="https://github.com/RKDEV2007/coffee-shop.git" target="_blank" rel="noopener">GitHub</a>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          )}

          <div className="projects-cta">
            <button
              type="button"
              className={"toggle-arrow" + (showMore ? " toggle-arrow-open" : "")}
              onClick={() => setShowMore(!showMore)}
              aria-label="Показать ещё проекты"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <a
              href="#"
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                goToProjects();
              }}
            >
              Смотреть все проекты
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <h2 className="section-title">Услуги</h2>
          <p className="section-subtitle">
            Базовые услуги, которые можно продавать уже сейчас.
          </p>

          <div className="services-grid">
            <article className="card service-card">
              <h3>Лендинг для бизнеса</h3>
              <p>
                Одностраничный сайт для услуги, эксперта или малого бизнеса.
                Современный дизайн, структура под заявки, адаптивность.
              </p>
              <span className="price">от 2000р</span>
            </article>

            <article className="card service-card">
              <h3>Сайт-визитка</h3>
              <p>
                Небольшой сайт с информацией о вас, услугах, преимуществах и контактами.
              </p>
              <span className="price">от 2500р</span>
            </article>

            <article className="card service-card">
              <h3>Верстка по макету</h3>
              <p>
                Перевод дизайна из Figma в HTML, CSS и JavaScript с адаптацией под разные экраны.
              </p>
              <span className="price">от 3500р</span>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-contact" id="contact">
        <div className="container contact-layout">
          <header className="contact-intro">
            <h2 className="section-title">Контакты</h2>
            <p className="section-subtitle">
              Лендинг, визитка или вёрстка — напишите в Telegram. Код и репозитории смотрите на GitHub.
            </p>
          </header>

          <div className="contact-bento">
            <a
              href="https://t.me/obich2007"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-tile contact-tile--telegram"
            >
              <div className="contact-tile-head">
                <span className="contact-tile-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.95 4.05a1.25 1.25 0 0 0-1.32-.12L3.4 11.18c-.88.36-.87 1.64.02 1.97l4.42 1.54 1.71 5.18c.23.7 1.2.9 1.73.35l2.27-2.33 4.47 3.28c.55.4 1.33.1 1.48-.58l3.45-16.2zM8.6 13.86l10.16-6.3-7.12 6.45-.45 3.45-2.59-3.6z" />
                  </svg>
                </span>
                <span className="contact-tile-external" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10" /></svg>
                </span>
              </div>
              <span className="contact-tile-eyebrow">Связь</span>
              <span className="contact-tile-title">Telegram</span>
              <span className="contact-tile-desc">Отвечаю быстро — обсудим задачу и сроки</span>
            </a>

            <a
              href="https://github.com/RKDEV2007?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-tile contact-tile--github"
            >
              <div className="contact-tile-head">
                <span className="contact-tile-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </span>
                <span className="contact-tile-external" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10" /></svg>
                </span>
              </div>
              <span className="contact-tile-eyebrow">Портфолио кода</span>
              <span className="contact-tile-title">GitHub</span>
              <span className="contact-tile-desc">Репозитории, коммиты и живые примеры проектов</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
