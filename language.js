// Wartet darauf, dass das gesamte DOM geladen ist, bevor der Code ausgeführt wird.
// Dadurch wird sichergestellt, dass alle DOM-Elemente verfügbar sind.
document.addEventListener("DOMContentLoaded", () => {

  // Liste von Sprachen, die eine Rechts-nach-Links-Ausrichtung (RTL) verwenden.
  const rtlLanguages = ['ar', 'he', 'fa', 'ur']; // Arabisch, Hebräisch, Persisch, Urdu.

  // Ermittelt die Sprache des Benutzers anhand der Browsereinstellungen.
  const userLang = navigator.language || navigator.userLanguage;

  // Extrahiert den Sprachcode (z. B. "en" aus "en-US").
  const langCode = userLang.split('-')[0];

  // Überprüft, ob die Benutzersprache eine RTL-Sprache ist.
  const isRTL = rtlLanguages.includes(langCode);

  // Sucht alle Navigationsleisten mit dem Attribut `data-rtl="true"`.
  document.querySelectorAll('.navbar[data-rtl="true"]').forEach(navbar => {

    // Wenn die Sprache des Benutzers RTL ist, fügt sie die RTL-Stile hinzu.
    if (isRTL) {
      navbar.classList.add('rtl-enabled'); // Fügt eine Klasse hinzu, um RTL-spezifische Stile zu aktivieren.
      navbar.setAttribute('dir', 'rtl'); // Setzt die Textausrichtung der Navigationsleiste auf RTL.
    } else {
      // Andernfalls entfernt RTL-spezifische Stile und setzt die Ausrichtung auf LTR.
      navbar.classList.remove('rtl-enabled');
      navbar.setAttribute('dir', 'ltr'); // Setzt die Textausrichtung der Navigationsleiste auf LTR.
    }
  });
});
