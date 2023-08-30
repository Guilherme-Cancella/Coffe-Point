let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.toggle("active");
  cartItem.classList.toggle("active");
};

let searchForm = document.querySelector(".searchForm");
document.querySelector("#cart-btn").onclick = () => {
  navbar.classList.remove("active");
  searchForm.classList.toggle("active");
  cartItem.classList.toggle("active");
};

let cartItem = document.querySelector(".cart-items-container");
document.querySelector("#search-btn").onclick = () => {
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.toggle("active");
  cartItem.classList.toggle("active");
};
