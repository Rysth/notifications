const markButton = document.querySelector(".mark");
const notifications = document.querySelectorAll(".notification-card");

markButton.addEventListener("click", () => {
  notifications.forEach((element) => {
    if (!element.classList.contains("notification-card--inactive")) {
      element.classList.add("notification-card--inactive");
    }
  });
});
