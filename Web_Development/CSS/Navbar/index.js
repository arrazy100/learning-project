document.getElementById("burger").addEventListener("click", function () {
    let el = document.getElementById("menu");

    this.classList.toggle("navbar-burger-open")
    el.classList.toggle("navbar-menu-mobile");
});

// Toggle active menu item
var navbar_items = document.getElementById("menu").getElementsByTagName("li");

for (let i = 0, el; el = navbar_items[i]; i++) {
    el.addEventListener("click", function() {
        for (let j = 0, item; item = navbar_items[j]; j++) {
            if (item.classList.contains("active")) item.classList.toggle("active");
        }
        this.classList.toggle("active");
    });
};