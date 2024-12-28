// Wartet darauf, dass das DOM vollständig geladen ist, bevor der Code ausgeführt wird.
// Dadurch wird sichergestellt, dass alle HTML-Elemente verfügbar sind.
document.addEventListener("DOMContentLoaded", () => {

  // Array mit Informationen zu Partnerorganisationen.
  // Jede Organisation enthält:
  // - `name`: Den Namen der Organisation.
  // - `description`: Eine kurze Beschreibung der Organisation.
  // - `logo`: Die URL zum Logo der Organisation.
  // - `website`: Die URL zur Webseite der Organisation.
  const partners = [
    {
      name: "Green Future Initiative",
      description: "Engagiert in der Förderung erneuerbarer Energien und der Reduzierung des CO2-Fußabdrucks.",
      logo: "https://via.placeholder.com/150?text=Green+Future", // Beispiel-Logo
      website: "https://google.com" // Beispiel-URL
    },
    {
      name: "Healthy Earth Alliance",
      description: "Der Schwerpunkt liegt auf Wiederaufforstungs- und Naturschutzprojekten weltweit.",
      logo: "https://via.placeholder.com/150?text=Healthy+Earth",
      website: "https://google.com"
    },
    {
      name: "Education for All",
      description: "Bereitstellung eines Zugangs zu hochwertiger Bildung für benachteiligte Bevölkerungsgruppen.",
      logo: "https://via.placeholder.com/150?text=Education+for+All",
      website: "https://google.com"
    },
    {
      name: "WaterAid Foundation",
      description: "Sicherstellung des Zugangs zu sauberem und sicherem Trinkwasser für alle.",
      logo: "https://via.placeholder.com/150?text=WaterAid",
      website: "https://google.com"
    },
    {
      name: "Shelter Support",
      description: "Sichere Häuser für bedürftige Familien auf der ganzen Welt bauen.",
      logo: "https://via.placeholder.com/150?text=Shelter+Support",
      website: "https://google.com"
    }
  ];

  // Wählt das HTML-Element aus, in das die Partnerkarten eingefügt werden sollen.
  // Dieses Element sollte die ID `partnerCards` haben.
  const partnerCards = document.getElementById("partnerCards");

  // Iteriert über das Array der Partner und generiert für jeden Partner eine Karte.
  partners.forEach(partner => {
    // Erstellt ein neues `div`-Element für die Partnerkarte.
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4"; // Bootstrap-Klassen für Layout und Abstand.

    // Fügt die HTML-Struktur der Karte in das `div`-Element ein.
    // Die Karte enthält:
    // - Ein Bild (Logo) der Organisation.
    // - Den Namen und die Beschreibung der Organisation.
    // - Einen Button mit einem Link zur Webseite der Organisation.
    card.innerHTML = `
      <div class="card partner-card"> 
        <img src="${partner.logo}" class="card-img-top" alt="${partner.name}"> 
        <div class="card-body"> 
          <h5 class="card-title">${partner.name}</h5> 
          <p class="card-text">${partner.description}</p> 
          <a href="${partner.website}" class="btn btn-primary" target="blank">Visit Website</a> 
        </div>
      </div>
    `;

    // Fügt die erstellte Karte in den Container `partnerCards` ein.
    partnerCards.appendChild(card);
  });
});
