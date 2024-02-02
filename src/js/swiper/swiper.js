import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";

const swiper = new Swiper(".slider-main-block", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: ".body-main-block__arrow.swiper-button-next",
        prevEl: ".body-main-block__arrow.swiper-button-prev",
    },
});

export { swiper };
