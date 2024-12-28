// Wartet, bis das gesamte DOM geladen ist, bevor der Code ausgeführt wird.
// Dadurch wird sichergestellt, dass alle Elemente wie Navbars verfügbar sind.
document.addEventListener('DOMContentLoaded', () => {

  // Funktion zur Behandlung einer spezifischen Navbar.
  // Diese Funktion wird aufgerufen, um ein bestimmtes Navbar-Menü zu konfigurieren.
  const handleNavbar = (navbarId) => {
    // Wählt die Navbar anhand ihrer ID aus.
    const navbar = document.querySelector(`#${navbarId}`);
    
    // Wenn die Navbar mit der angegebenen ID nicht existiert, wird die Funktion beendet.
    if (!navbar) return;

    // Sucht alle Navigationslinks innerhalb der Navbar.
    const navLinks = navbar.querySelectorAll('.navbar-nav .nav-link');
    
    // Wählt das zusammenklappbare Menü (Hamburger-Menü) in der Navbar aus.
    const navbarCollapse = navbar.querySelector('.navbar-collapse');

    // Fügt jedem Navigationslink einen Klick-Event-Listener hinzu.
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        // Überprüft, ob das Hamburger-Menü aktuell geöffnet ist.
        if (navbarCollapse.classList.contains('show')) {
          // Schließt das Hamburger-Menü, falls es geöffnet ist.
          new bootstrap.Collapse(navbarCollapse, {
            toggle: true // Aktiviert/Deaktiviert das Collapse-Element.
          });
        }
      });
    });
  };

  // Eine Liste mit den IDs der Navbars, die behandelt werden sollen.
  const navbars = ['home-navbar', 'aboutUs-navbar', 'statistik-navbar', 'kontakt-navbar'];

  // Wendet die `handleNavbar`-Funktion auf jede Navbar-ID in der Liste an.
  navbars.forEach(navbarId => handleNavbar(navbarId));
});
