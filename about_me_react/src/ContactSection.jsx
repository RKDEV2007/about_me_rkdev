function ContactSection() {
  return (
    <section className="section section-contact" id="contact">
      <div className="container contact-layout">
        <header className="contact-intro">
          <span className="section-kicker">Контакт</span>
          <h2 className="section-title">Обсудим задачу</h2>
          <p className="section-subtitle">
            Напишите в Telegram, если нужен лендинг, сайт-визитка, React-интерфейс
            или аккуратная адаптивная верстка. Код и примеры проектов доступны на GitHub.
          </p>
        </header>

        <div className="contact-bento">
          <a
            href="https://t.me/obich2007"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-tile"
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
            <span className="contact-tile-eyebrow">Быстрая связь</span>
            <span className="contact-tile-title">Telegram</span>
            <span className="contact-tile-desc">Коротко обсудим цель сайта, сроки и формат работы.</span>
          </a>

          <a
            href="https://github.com/RKDEV2007?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-tile contact-tile--dark"
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
            <span className="contact-tile-desc">Репозитории, демо и история работы над проектами.</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
