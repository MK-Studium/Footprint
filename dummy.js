// Wartet, bis das gesamte DOM geladen ist, bevor der Code ausgeführt wird.
// Dadurch wird sichergestellt, dass alle DOM-Elemente verfügbar sind, bevor auf sie zugegriffen wird.
document.addEventListener('DOMContentLoaded', () => {

  // Wählt alle <a>-Elemente aus, deren `href`-Attribut genau "#" entspricht.
  // Diese Links dienen normalerweise als Platzhalter oder Dummylinks.
  const dummyLinks = document.querySelectorAll('a[href="#"]');

  // Iteriert über alle gefundenen Dummylinks.
  dummyLinks.forEach(link => {
    // Fügt jedem Dummylink einen Event-Listener für das Klick-Ereignis hinzu.
    link.addEventListener('click', event => {
      // Verhindert die Standardaktion des Links, wie z. B. das Scrollen nach oben.
      event.preventDefault();

      // Zeigt einen Hinweis oder eine Warnung an, dass dies ein Platzhalterlink ist.
      alert('Dummy'); // Hier wird eine einfache Nachricht im Alert-Fenster angezeigt.
    });
  });
});
