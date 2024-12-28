// Wartet darauf, dass das gesamte DOM geladen ist, bevor der Code ausgeführt wird.
// Dadurch wird sichergestellt, dass alle HTML-Elemente wie `tableBody` verfügbar sind.
document.addEventListener("DOMContentLoaded", () => {

  // Liest die Daten aus der globalen Variable `emissionsData`.
  // Diese Variable enthält ein Array von Objekten mit Informationen zu Rang, Land und Emissionen.
  const data = emissionsData;

  // Wählt das Tabellenkörper-Element aus, in das die Daten eingefügt werden sollen.
  // Dieses Element sollte im HTML-Dokument die ID `tableBody` haben.
  const tableBody = document.getElementById("tableBody");

  // Iteriert über die Datensätze im `emissionsData`-Array.
  data.forEach(row => {
    // Erstellt eine neue Tabellenzeile (`tr`) für jeden Datensatz.
    const tr = document.createElement("tr");

    // Befüllt die Tabellenzeile mit den Daten:
    // - `row.rank`: Der Rang des Landes basierend auf Emissionen.
    // - `row.country`: Der Name des Landes.
    // - `row.emissions`: Die Gesamtemissionen des Landes.
    tr.innerHTML = `
      <td>${row.rank}</td>       
      <td>${row.country}</td>    
      <td>${row.emissions}</td>  
    `;

    // Fügt die generierte Tabellenzeile (`tr`) in den Tabellenkörper (`tableBody`) ein.
    tableBody.appendChild(tr);
  });
});
