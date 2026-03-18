(function () {
  let modal = document.getElementById("projectModal");
  let modalBody = document.getElementById("modalBody");
  let modalBackdrop = document.getElementById("modalBackdrop");
  let modalClose = document.getElementById("modalClose");
  let data = window.PROJECTS_DATA;

  if (!modal || !data) return;

  function openModal(project) {
    if (!project) return;
    modalBody.innerHTML =
      '<div class="modal-project">' +
      '  <img src="' + project.image + '" alt="" class="modal-project-image" />' +
      '  <span class="project-tag">' + project.tag + '</span>' +
      '  <h2 class="modal-project-title" id="modalTitle">' + project.title + '</h2>' +
      '  <p class="modal-project-desc">' + project.description + '</p>' +
      '  <div class="project-tags-inline">' +
      (project.tags || []).map(function (t) { return '<span>' + t + '</span>'; }).join("") +
      "  </div>" +
      '  <div class="project-links">' +
      '    <a href="' + project.demo + '" target="_blank" rel="noopener" class="btn">Live Demo</a>' +
      '    <a href="' + project.github + '" target="_blank" rel="noopener" class="btn btn-secondary">GitHub</a>' +
      "  </div>" +
      "</div>";
    modal.setAttribute("aria-hidden", "false");
    modal.classList.add("modal-open");
    document.body.style.overflow = "hidden";
    modalClose.focus();
  }

  function closeModal() {
    modal.setAttribute("aria-hidden", "true");
    modal.classList.remove("modal-open");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".project-card-clickable").forEach(function (card) {
    let id = card.getAttribute("data-project");
    if (id === null) return;
    let project = data[parseInt(id, 10)];
    if (!project) return;
    card.addEventListener("click", function (e) {
      if (e.target.closest("a")) return;
      openModal(project);
    });
  });

  if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);
  if (modalClose) modalClose.addEventListener("click", closeModal);

  modal.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });
})();
