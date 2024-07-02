// mobile Dropdown  ============ start =====>
    const navDropdowns = document.querySelectorAll(".dropdown");
navDropdowns.forEach((parentDropdown) => {
parentDropdown.addEventListener("click", function (e) {
this.classList.toggle("showMenu");
});

const subDropdowns = parentDropdown.querySelectorAll(".dropdown ul");
subDropdowns.forEach((subDropdown) => {
subDropdown.addEventListener("click", function (event) {
   event.stopPropagation(); // Prevents the click event from reaching the parent dropdown
});
});
});

// Add a click event listener to the document to close dropdowns when clicking outside
document.addEventListener("click", (e) => {
navDropdowns.forEach((dropdown) => {
if (!dropdown.contains(e.target)) {
   dropdown.classList.remove("showMenu");
}
});
});
// mobile Dropdown  ============ end =====>
