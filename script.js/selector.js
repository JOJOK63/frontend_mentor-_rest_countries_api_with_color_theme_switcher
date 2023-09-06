// Sélectionnez l'élément select par son name ou ID
const selectElement = document.querySelector('select[name="continent"]');

selectElement.addEventListener(
  "change",
  function continentModification(event, countries) {
    const selectedContinent = event.target.value;

    if (selectedContinent === "africa") {
      console.log("africa");
    } else if (selectedContinent === "america") {
      console.log("america");
    } else if (selectedContinent === "asia") {
      console.log("asia");
    } else if (selectedContinent === "europe") {
      console.log("europe");
    } else if (selectedContinent === "oceania") {
      console.log("oceania");
    } else {
      console.log("none");
    }
  }
);
