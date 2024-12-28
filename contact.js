/*
Sicherheitsmaßnahmen für das Formular
*/

// Wartet darauf, dass das DOM vollständig geladen ist, bevor der Code ausgeführt wird
document.addEventListener('DOMContentLoaded', function () {
  // Holt das Formular-Element über die ID
  const form = document.getElementById('contactForm');
  // Element, in dem die Antwort angezeigt wird
  const responseElement = document.getElementById('formResponse');

  /**
   * Sicherheitsfunktion: Bereinigt Benutzereingaben, um Cross-Site Scripting (XSS) zu verhindern.
   * Wandelt potenziell gefährliche Eingaben in sicheren Text um.
   * @param input - Benutzereingabe, die bereinigt werden soll.
   * @returns - Bereinigte Eingabe als sichere HTML-Zeichenkette.
   */
  function clearInput(input) {
    // Erstellt ein neues DOM-Element
    const element = document.createElement('div');
    // Fügt die Eingabe als reinen Text ein (HTML wird nicht interpretiert)
    element.innerText = input;
    // Gibt die bereinigte HTML-Zeichenkette zurück
    return element.innerHTML;
  }

  // Event-Listener: Wird ausgelöst, wenn das Formular abgeschickt wird
  form.addEventListener('submit', function (event) {
    // Verhindert die Standardaktion des Formulars (z. B. Neuladen der Seite)
    event.preventDefault();
    // Stoppt die Propagation des Events zu anderen Listenern
    event.stopPropagation();

    // Überprüft, ob alle Felder des Formulars gültig sind
    if (!form.checkValidity()) {
      // Fügt eine Klasse hinzu, um ungültige Felder visuell hervorzuheben
      form.classList.add('was-validated');
      // Beendet die Funktion, wenn das Formular ungültig ist
      return;
    }

    // Bereinigt die Benutzereingaben für jedes Feld
    const name = clearInput(document.getElementById('name').value);
    const email = clearInput(document.getElementById('email').value);
    const subject = clearInput(document.getElementById('subject').value);
    const message = clearInput(document.getElementById('message').value);

    // Zeigt eine Erfolgsmeldung mit den bereinigten Eingaben an
    responseElement.innerHTML = `
      <div class="alert alert-success" id="successAlert">
        <strong>Nachricht erfolgreich gesendet!</strong><br>
        <strong>Name:</strong> ${name}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Betreff:</strong> ${subject}<br>
        <strong>Nachricht:</strong> ${message}
      </div>
    `;

    // Erfolgsmeldung durch Mausklick entfernen
    responseElement.addEventListener('click', function () {
      const alertElement = document.getElementById('successAlert');
      if (alertElement) {
        alertElement.remove(); // Entfernt die Erfolgsmeldung aus dem DOM
      }
    });

    // Setzt das Formular zurück, um es für neue Eingaben bereitzustellen
    form.reset();

    // Entfernt die Validierungsklasse, um das Formular zurückzusetzen
    form.classList.remove('was-validated');
  });
});
