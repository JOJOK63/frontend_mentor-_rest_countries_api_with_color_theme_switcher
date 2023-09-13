export function addListenerToCard() {
  const cardDetails = document.querySelectorAll(".country-card");
  const cardMoreInfo = document.querySelector(
    ".country-information-more-information"
  );
  const cardBorder = document.querySelector(".country-card-border-countries");

  cardDetails.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("expanded");
      cardMoreInfo.classList.toggle("display-none");
      cardBorder.classList.toggle("display-none");
      document.body.classList.toggle("no-scroll");
    });
  });
}
