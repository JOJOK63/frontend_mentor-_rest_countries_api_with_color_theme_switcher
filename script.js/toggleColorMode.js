// Définissez les chemins d'origine des images
const toggleColor = document.getElementById("toggle-color-mode");
toggleColor.addEventListener("click", toggleColorMode);

const moonModeImgPath = "public/moon-fill-w.svg";
const searchIconImgPath = "public/search-line-w.svg";

export function toggleColorMode() {
  const body = document.querySelector("body");
  const moon = document.getElementById("moon-mode-img");
  const search = document.getElementById("search-icon-img");

  body.classList.toggle("darkmode");

  // Vérifiez si le mode sombre est activé
  if (body.classList.contains("darkmode")) {
    // Si le mode sombre est activé, utilisez les images en mode sombre
    moon.src = moonModeImgPath;
    search.src = searchIconImgPath;
  } else {
    // Sinon, utilisez les images par défaut
    moon.src = "public/moon-line.svg";
    search.src = "public/search-line.svg";
  }
}
