const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector("#sidebarToggle");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("open-sidebar");
});