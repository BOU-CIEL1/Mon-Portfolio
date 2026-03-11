/*TO DO LIST
1. Faire un Toggle Button FR - EN
2. Faire un Toggle Button Light Mode - Dark Mode
3. Faire des animations rapides
4. Mettre du focus sur certains éléments
*/

const toggleLightDark = document.getElementById('toggle-light-dark');
const body = document.body;

toggleLightDark.addEventListener('change', () => {
    if(toggleLightDark.checked) {
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.add('light-mode');
    }
});