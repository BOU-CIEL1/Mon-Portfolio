/*TO DO LIST
1. Faire un Toggle Button FR - EN
2. Faire un Toggle Button Light Mode - Dark Mode
3. Faire des animations rapides
4. Mettre du focus sur certains éléments
*/

const toggle = document.getElementById('toggle');
const body = document.body;

toggle.addEventListener('change', () => {
    if(toggle.checked) {
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.add('light-mode');
    }
});