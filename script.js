(function () {
  "use strict";

  // Telegram / in-app browser: keep nav at top on load
  if (typeof window !== "undefined") {
    window.scrollTo(0, 0);
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", function () {
        window.scrollTo(0, 0);
      });
    }
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 100);
  }

  let burger = document.getElementById("burger");
  let navMenu = document.getElementById("navMenu");
  if (burger && navMenu) {
    burger.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
    let navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
      });
    });
  }

  // Toggle more projects (homepage)
  let showMoreBtn = document.getElementById("showMoreBtn");
  let projectsMore = document.getElementById("projectsMore");
  if (showMoreBtn && projectsMore) {
    showMoreBtn.addEventListener("click", function () {
      let isOpen = !projectsMore.hidden;
      if (isOpen) {
        projectsMore.hidden = true;
        showMoreBtn.classList.remove("toggle-arrow-open");
      } else {
        projectsMore.hidden = false;
        showMoreBtn.classList.add("toggle-arrow-open");
        let cards = projectsMore.querySelectorAll(".reveal");
        cards.forEach(function (el, i) {
          setTimeout(function () {
            el.classList.add("reveal-visible");
          }, 80 * i);
        });
      }
    });
  }

  // Scroll reveal
  let revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    let observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { rootMargin: "0px 0px -40px 0px", threshold: 0.05 }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("reveal-visible");
    });
  }

  // Contact form (works on any page that has #contactForm)
  let contactForm = document.getElementById("contactForm");
  if (contactForm) {
    let formStatus = document.getElementById("formStatus");
    let submitBtn = document.getElementById("submitBtn");
    let nameInput = document.getElementById("contactName");
    let emailInput = document.getElementById("contactEmail");
    let messageInput = document.getElementById("contactMessage");
    let nameError = document.getElementById("name-error");
    let emailError = document.getElementById("email-error");
    let messageError = document.getElementById("message-error");

    function showFieldError(input, errorEl, msg) {
      if (input) input.classList.add("invalid");
      if (errorEl) {
        errorEl.textContent = msg;
        errorEl.style.display = msg ? "block" : "none";
      }
    }

    function clearFormErrors() {
      [nameInput, emailInput, messageInput].forEach(function (el) {
        if (el) el.classList.remove("invalid");
      });
      [nameError, emailError, messageError].forEach(function (el) {
        if (el) {
          el.textContent = "";
          el.style.display = "none";
        }
      });
      if (formStatus) {
        formStatus.className = "form-status";
        formStatus.classList.remove("visible", "success", "error");
        formStatus.textContent = "";
      }
    }

    function setStatus(success, text) {
      if (!formStatus) return;
      formStatus.className = "form-status visible " + (success ? "success" : "error");
      formStatus.textContent = text;
    }

    function validateEmail(value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      clearFormErrors();

      let name = nameInput ? nameInput.value.trim() : "";
      let email = emailInput ? emailInput.value.trim() : "";
      let message = messageInput ? messageInput.value.trim() : "";
      let valid = true;

      if (!name) {
        showFieldError(nameInput, nameError, "Введите имя.");
        valid = false;
      }
      if (!email) {
        showFieldError(emailInput, emailError, "Введите email.");
        valid = false;
      } else if (!validateEmail(email)) {
        showFieldError(emailInput, emailError, "Введите корректный email.");
        valid = false;
      }
      if (!message) {
        showFieldError(messageInput, messageError, "Введите сообщение.");
        valid = false;
      } else if (message.length < 10) {
        showFieldError(messageInput, messageError, "Минимум 10 символов.");
        valid = false;
      }

      if (!valid) {
        setStatus(false, "Заполните все поля корректно.");
        return;
      }

      let action = contactForm.getAttribute("action");
      if (!action) {
        setStatus(false, "Форма не настроена.");
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Отправка…";
      }

      let formData = new FormData(contactForm);
      fetch(action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      })
        .then(function (res) {
          if (res.ok) {
            setStatus(true, "Сообщение отправлено. Спасибо!");
            contactForm.reset();
            clearFormErrors();
          } else {
            return res.text().then(function () {
              setStatus(false, "Ошибка отправки. Попробуйте позже.");
            });
          }
        })
        .catch(function () {
          setStatus(false, "Ошибка сети. Попробуйте позже.");
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "Отправить";
          }
        });
    });
  }
})();
