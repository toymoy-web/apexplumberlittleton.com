(function () {
  var toggle = document.getElementById("menuToggle");
  var menu = document.getElementById("mobileMenu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", function () {
    var isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.documentElement.style.overflow = isOpen ? "hidden" : "";
  });

  var MOBILE_BREAKPOINT = 768;
  window.addEventListener("resize", function () {
    if (window.innerWidth > MOBILE_BREAKPOINT && menu.classList.contains("open")) {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      document.documentElement.style.overflow = "";
    }
  });
})();
