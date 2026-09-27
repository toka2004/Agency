const navigationMenu = document.querySelector("#navbarSupportedContent");

if (navigationMenu && window.bootstrap?.Collapse) {
  const navigationCollapse = window.bootstrap.Collapse.getOrCreateInstance(navigationMenu, {
    toggle: false,
  });

  navigationMenu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (navigationMenu.classList.contains("show")) {
        navigationCollapse.hide();
      }
    });
  });
}