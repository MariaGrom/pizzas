const buttons = document.getElementsByClassName("button-pizza");
const chooseBtn = document.getElementById("main-action");
const popup = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__close-button");
const popupPhoto = document.querySelector(".popup__photo");
const popupOpenButton = document.querySelector(".button-img");
const pizzaItems = document.querySelectorAll(".pizza__item");
const popupCaption = popup.querySelector(".popup__caption");
const popupSpan = popup.querySelector(".popup__span");
const closeButton = popup.querySelector(".popup__close-button");

// скролл к форме оформления заказа
for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    document.getElementById("delivery").scrollIntoView({ behavior: "smooth" });
  };
}

// скролл к выбору пицц
chooseBtn.onclick = function () {
  console.log("click");
  document.getElementById("pizzas").scrollIntoView({ behavior: "smooth" });
};

// простейщая валидация формы на заполнение - пустую отправить нельзя
document.getElementById("delivery-action").onclick = function () {
  if (document.getElementById("name").value === "") {
    alert("Заполните поле имя");
  } else if (document.getElementById("phone").value === "") {
    alert("Заполните поле номер телефона");
  } else if (document.getElementById("address").value === "") {
    alert("Заполните поле адрес");
  } else {
    alert("Спасибо за заказ");
  }
};

// функционал открытия попапа с выбранной пиццей по клику
pizzaItems.forEach((pizzaItem) => {
  const buttonImg = pizzaItem.querySelector(".button-img");
  const imgPizza = pizzaItem.querySelector(".pizza__image");
  const title = pizzaItem.querySelector(".pizza__item-title");
  const description = pizzaItem.querySelector(".pizza__item-description p");

  buttonImg.addEventListener("click", () => {
    popupPhoto.src = imgPizza.src;
    popupCaption.textContent = title.textContent;
    popupSpan.textContent = description.textContent;
    popup.classList.remove("popup_hidden");
  });
});

closeButton.addEventListener("click", () => {
  popup.classList.add("popup_hidden");
});
