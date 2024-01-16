
//Табы
const tabNavItems = document.querySelectorAll(".tabs-deals__button");
const tabItems = document.querySelectorAll(".item-tabs");

document.addEventListener('click',(e) => {
    let currentActive = null;
    let newActive = null;
    if(e.target.closest('.tabs-deals__button')) {
        tabNavItems.forEach((tabNavItem,index) => {
            if(tabNavItem.classList.contains('active')) {
                currentActive = index
                tabNavItem.classList.remove('active')
            }
            if(tabNavItem === e.target) {
                newActive = index
            }
        })
    }
    e.target.classList.add('active')
    tabItems[currentActive].classList.remove('active')
    tabItems[newActive].classList.add('active')
})