const portrait = document.querySelector("[data-portrait]");

if (portrait) {
  const useFallback = () => {
    portrait.src = "./assets/sofia-placeholder.svg";
    portrait.classList.add("portrait-fallback");
  };

  portrait.addEventListener("error", useFallback, { once: true });

  if (portrait.complete && portrait.naturalWidth === 0) {
    useFallback();
  }
}
