/*TO DO LIST
3. Faire des animations rapides
4. Mettre du focus sur certains éléments
*/

//Light Mode - Dark Mode
const toggleLightDark = document.getElementById("toggle-light-dark");
const body = document.body;

if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    toggleLightDark.checked = false;
}

toggleLightDark.addEventListener("change", () => {
  if (toggleLightDark.checked) {
    document.body.classList.remove("light-mode");
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.add("light-mode");
    localStorage.setItem('theme', 'light');
  }
});

//Français - Anglais
const toggleFrEn = document.getElementById("toggle-fr-en");

const savedLang = localStorage.getItem("language");
const currentPath = window.location.pathname;
const isInEnFolder = currentPath.includes("/en/");

if (savedLang === "en" && !isInEnFolder) {
    let fileName = currentPath.substring(currentPath.lastIndexOf("/") + 1) || "index.html";
    window.location.href = "./en/" + fileName;
}
else if (savedLang === "fr" && isInEnFolder) {
    let fileName = currentPath.substring(currentPath.lastIndexOf("/") + 1) || "index.html";
    window.location.href = "../" + fileName;
}

if (toggleFrEn) {
    // 1. On synchronise le bouton avec l'URL réelle au chargement
    if (window.location.pathname.includes("/en/")) {
        toggleFrEn.checked = true;
    } else {
        toggleFrEn.checked = false;
    }

    // 2. On gère le changement au clic
    toggleFrEn.addEventListener("change", () => {
        let path = window.location.pathname;
        let fileName = path.substring(path.lastIndexOf("/") + 1) || "index.html";
        let newPath = "";

        if (toggleFrEn.checked) {
            localStorage.setItem("language", "en");
            if (!path.includes("/en/")) {
                newPath = "./en/" + fileName;
            }
        } else {
            localStorage.setItem("language", "fr");
            if (path.includes("/en/")) {
                newPath = "../" + fileName;
            }
        }

        if (newPath !== "") {
            setTimeout(() => {
                window.location.href = newPath;
            }, 300);
        }
    });
}