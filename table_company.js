import companiesCO2Emissions from './data_company.js'; // Importiert die Datenquelle mit CO2-Emissionen von Unternehmen

// Erstellt eine neue Vue.js-Anwendung
const app = Vue.createApp({
  // Datenobjekt der Anwendung
  data() {
    return {
      searchTerm: '', // Suchbegriff, den der Nutzer eingeben kann
      sortColumn: '', // Die aktuell nach Spalte sortierte Spalte
      sortDirection: 'asc', // Sortierrichtung: 'asc' (aufsteigend) oder 'desc' (absteigend)
      rowsPerPage: 10, // Anzahl der Tabellenzeilen pro Seite
      currentPage: 1, // Die aktuell angezeigte Seite
      tableData: companiesCO2Emissions, // Die importierte Datenquelle (eine Liste von Unternehmen und ihren Emissionen)
    };
  },

  // Berechnete Eigenschaften 
  computed: {
    // Filtert die Tabelle basierend auf dem Suchbegriff
    filteredData() {
      const term = this.searchTerm.trim().toLowerCase(); // Suchbegriff in Kleinbuchstaben konvertieren und Leerzeichen entfernen
      return this.tableData.filter(row =>
        Object.values(row).some(value =>
          value.toString().toLowerCase().includes(term) // Überprüft, ob irgendein Wert der Zeile den Suchbegriff enthält
        )
      );
    },
    // Berechnet die Gesamtanzahl der Seiten basierend auf den gefilterten Daten
    totalPages() {
      return Math.ceil(this.filteredData.length / this.rowsPerPage); // Anzahl der Seiten = Gesamte gefilterte Daten geteilt durch Zeilen pro Seite
    },
    
      // Gefilterte und paginierte Daten, inklusive Leerzeilen
    paginatedData() {
      const start = (this.currentPage - 1) * this.rowsPerPage;
      const end = start + this.rowsPerPage;

      // Original gefilterte Daten für die aktuelle Seite
      const pageData = this.filteredData.slice(start, end);

      // Anzahl der benötigten Leerzeilen
      const emptyRowsCount = this.rowsPerPage - pageData.length;

      // Füge Leerzeilen hinzu
      const emptyRows = Array.from({ length: emptyRowsCount }, () => ({
        rank: '',
        country: '',
        emissions: ''
      }));

      // Kombiniere gefilterte Daten mit Leerzeilen
      return [...pageData, ...emptyRows];
    
      },
  },

  // Methoden für die interaktive Steuerung der Tabelle
  methods: {
    // Sortiert die Tabelle basierend auf einer ausgewählten Spalte
    sortTable(column) {
      // Überprüft, ob die aktuelle Spalte die gleiche ist wie die ausgewählte Spalte
      if (this.sortColumn !== column) {
        this.sortDirection = 'asc'; // Setzt die Sortierrichtung auf 'asc', wenn eine neue Spalte ausgewählt wird
      } else {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc'; // Wechselt zwischen aufsteigend und absteigend
      }
      this.sortColumn = column; // Aktualisiert die aktuelle Spalte

      // Führt die Sortierung der Daten durch
      this.tableData.sort((a, b) => {
        if (typeof a[column] === 'number') {
          // Numerische Sortierung
          return this.sortDirection === 'asc' ? a[column] - b[column] : b[column] - a[column];
        }
        // Alphabetische Sortierung
        return this.sortDirection === 'asc'
          ? a[column].localeCompare(b[column])
          : b[column].localeCompare(a[column]);
      });
    },
    // Wechselt zur vorherigen Seite
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--; // Reduziert die aktuelle Seite um 1
      }
    },
    // Wechselt zur nächsten Seite
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++; // Erhöht die aktuelle Seite um 1
      }
    },
    // Wechselt direkt zu einer bestimmten Seite
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page; // Setzt die aktuelle Seite auf die angegebene Seitenzahl
      }
    },
  },
});

// Bindet die Vue-Anwendung an das HTML-Element mit der ID 'app'
app.mount('#app');
