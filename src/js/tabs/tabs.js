//Табы
const tabNavItems = document.querySelectorAll(".tabs-deals__button");
const tabItems = document.querySelectorAll(".item-tabs");

document.addEventListener("click", (e) => {
    let currentActive = null;
    let newActive = null;
    if (e.target.closest(".tabs-deals__button")) {
        tabNavItems.forEach((tabNavItem, index) => {
            if (tabNavItem.classList.contains("active")) {
                currentActive = index;
                tabNavItem.classList.remove("active");
            }
            if (tabNavItem === e.target) {
                newActive = index;
            }
        });
        if(currentActive !== null) {
            e.target.classList.add("active")
            if (tabItems[currentActive]) {
                tabItems[currentActive].classList.remove("active");
            }
            
            if (tabItems[newActive]) {
                tabItems[newActive].classList.add("active");
            }
        }
    }
});
