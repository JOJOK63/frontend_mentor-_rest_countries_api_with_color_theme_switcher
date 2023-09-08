

export function addListenerToCard(){

const cardDetails = document.querySelectorAll(".country-card");

cardDetails.forEach((card) => {
  card.addEventListener("click",  (e) => {

    const clickedCard = e.target;
    clickedCard.classList.add("details");

    console.log(clickedCard);
  });
});

}
