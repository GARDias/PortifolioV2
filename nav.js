/*
  Progressive enhancement do menu mobile.
  Sem este script, o painel de navegação (.nav-panel) permanece
  sempre visível e empilhado em telas pequenas — nenhum link fica
  inacessível. Com o script, o botão hambúrguer aparece e passa a
  controlar a exibição do painel.
*/
(function () {
  var toggles = document.querySelectorAll(".nav-toggle");

  toggles.forEach(function (toggle) {
    var panel = document.getElementById(toggle.getAttribute("aria-controls"));
    if (!panel) return;

    document.documentElement.classList.add("js-nav-enhanced");
    toggle.hidden = false;

    function closePanel() {
      toggle.setAttribute("aria-expanded", "false");
      panel.classList.remove("is-open");
    }

    function openPanel() {
      toggle.setAttribute("aria-expanded", "true");
      panel.classList.add("is-open");
    }

    toggle.addEventListener("click", function () {
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      if (isOpen) {
        closePanel();
      } else {
        openPanel();
      }
    });

    panel.addEventListener("click", function (event) {
      if (event.target.closest("a")) closePanel();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        closePanel();
        toggle.focus();
      }
    });

    document.addEventListener("click", function (event) {
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      if (isOpen && !toggle.contains(event.target) && !panel.contains(event.target)) {
        closePanel();
      }
    });
  });
})();
