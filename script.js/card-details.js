export function addListenerToCard() {
    const cardDetails = document.querySelectorAll(".country-card");
  
    cardDetails.forEach((card) => {
      card.addEventListener("click", () => {
        card.classList.toggle("expanded");
        
        document.body.classList.toggle('no-scroll');
      });
    });
  }
  