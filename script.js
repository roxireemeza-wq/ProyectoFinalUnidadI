
const saveBtn = document.getElementById("saveBtn");
const cardsContainer = document.getElementById("cardsContainer");

const COUPON = "DESC50";

saveBtn.addEventListener("click", () => {
  const image = document.getElementById("image").value;
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  let price = parseFloat(document.getElementById("price").value);
  const coupon = document.getElementById("coupon").value;

  if (!image || !title || !description || !price) {
    alert("Completa todos los campos");
    return;
  }

  if (coupon === COUPON) {
    price = price * 0.5;
  }

  const card = document.createElement("div");
  card.classList.add("card-product");

  card.innerHTML = `
    <img src="${image}">
    <div class="card-content">
      <h4>${title}</h4>
      <p>${description}</p>
      <strong>$${price.toFixed(2)}</strong>
    </div>
    <button class="delete-btn">Eliminar</button>
  `;

  card.querySelector(".delete-btn").addEventListener("click", () => {
    card.remove();
  });

  cardsContainer.appendChild(card);
});
