export async function callApi() {
  const apiUrl = "https://restcountries.com/v3.1/all";

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Erreur lors de la requête à l'API");
    }

    const data = await response.json();
    //console.log(data);
    return data; // Retourne les données au lieu de les afficher
  } catch (error) {
    // Gérez les erreurs ici
    console.error(error);
    throw error; // Propagez l'erreur pour la gestion ultérieure
  }
}
