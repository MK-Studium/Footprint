// Wartet darauf, dass das gesamte DOM geladen ist, bevor der Code ausgeführt wird.
// Dadurch wird sichergestellt, dass alle Elemente wie `team-container` verfügbar sind.
document.addEventListener("DOMContentLoaded", () => {

  // Ein Array mit Informationen über Teammitglieder.
  // Jedes Objekt im Array enthält Details zu einem Teammitglied:
  // - `name`: Der Name des Teammitglieds.
  // - `role`: Die Position oder Rolle des Teammitglieds.
  // - `image`: Der Pfad zum Profilbild des Teammitglieds.
  // - `linkedin`: Der Link zum LinkedIn-Profil.
  const teamData = [
    {
      name: "Regina Reh", // Name des Teammitglieds
      role: "Geschäftsführerin", // Position im Team
      image: "./img/Reh.jpg", // Pfad zum Profilbild
      linkedin: "https://www.linkedin.com/" // LinkedIn-Profil
    },
    {
      name: "Holger Hase",
      role: "Finanzen",
      image: "./img/Hase.jpg",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "Katja Katze",
      role: "Fundraising",
      image: "./img/Katze.jpg",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "Paul Panda",
      role: "Public Relations",
      image: "./img/Panda.jpg",
      linkedin: "https://www.linkedin.com/"
    }
  ];

  // Holt das HTML-Element, in das die Teamkarten eingefügt werden sollen.
  // Dieses Element sollte im HTML-Dokument die ID `team-container` haben.
  const teamContainer = document.getElementById("team-container");

  // Iteriert über jedes Teammitglied im `teamData`-Array und erstellt eine Karte.
  teamData.forEach(member => {
    // Erzeugt die HTML-Struktur für eine Teamkarte.
    // Die Karte enthält:
    // - Profilbild des Mitglieds.
    // - Namen und Rolle des Mitglieds.
    // - Einen Button mit einem Link zu ihrem LinkedIn-Profil.
    const cardHTML = `
      <div class="col-lg-3 col-md-4 col-sm-6 col-12"> 
        <div class="card text-center h-100"> 
          <img src="${member.image}" alt="Foto von ${member.name}" 
               class="card-img-top rounded-circle mx-auto mt-3" 
               width="150" height="150"> 
          <div class="card-body">
            <h5 class="card-title text-success"><strong>${member.name}</strong></h5> 
            <p class="card-text">${member.role}</p> 
            <a href="${member.linkedin}" target="_blank" 
               class="btn btn-outline-primary btn-sm"> 
              <i class="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>
    `;

    // Fügt die generierte Karte in den Container ein.
    // `insertAdjacentHTML` fügt die Karte direkt als HTML in den Container ein, ohne die Struktur neu zu laden.
    teamContainer.insertAdjacentHTML("beforeend", cardHTML);
  });
});
