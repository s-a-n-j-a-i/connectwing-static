document.addEventListener("alpine:init", () => {
  Alpine.data("siteApp", () => ({
    navOpen: false,
    scrolled: false,
    theme: "light",

    init() {
      const storedTheme = window.localStorage.getItem("cw-theme");
      if (storedTheme === "light" || storedTheme === "dark") {
        this.theme = storedTheme;
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        this.theme = "dark";
      }
      this.applyTheme();

      const updateHeaderState = () => {
        this.scrolled = window.scrollY > 16;
      };

      updateHeaderState();
      window.addEventListener("scroll", updateHeaderState, { passive: true });
    },

    closeNav() {
      this.navOpen = false;
    },

    toggleTheme() {
      this.theme = this.theme === "dark" ? "light" : "dark";
      this.applyTheme();
      window.localStorage.setItem("cw-theme", this.theme);
    },

    applyTheme() {
      document.documentElement.classList.toggle("dark", this.theme === "dark");
    },

    validateAndSubmit(event) {
      const form = event.target;
      if (!form.checkValidity()) {
        event.preventDefault();
        form.reportValidity();
      }
    },
  }));

  Alpine.data("reveal", () => ({
    shown: false,
  }));
});
