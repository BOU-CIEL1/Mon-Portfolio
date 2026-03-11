/*TO DO LIST
1. Faire un Toggle Button FR - EN
2. Faire un Toggle Button Light Mode - Dark Mode
3. Faire des animations rapides
4. Mettre du focus sur certains éléments
*/

//Light Mode - Dark Mode
const toggleLightDark = document.getElementById("toggle-light-dark");
const body = document.body;

toggleLightDark.addEventListener("change", () => {
  if (toggleLightDark.checked) {
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
  }
});

//Français - Anglais
const toggleFrEn = document.getElementById("toggle-fr-en");

toggleFrEn.addEventListener("change", () => {
  let currentPath = window.location.pathname;
  let newPath = "";

  if (toggleFrEn.checked) {
    if (!currentPath.includes("/en/")) {
      let fileName = currentPath.substring(currentPath.lastIndexOf("/") + 1);
      newPath = "./en/" + (fileName || "index.html");
    }
  } else {
    if (currentPath.includes("/en/")) {
      newPath = "../" + currentPath.substring(currentPath.lastIndexOf("/") + 1);
    }
  }
  if (newPath !== "") {
    setTimeout(() => {
      window.location.href = newPath;
    }, 300);
  }
});
