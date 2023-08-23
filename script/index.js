
// slide
const main_adver = new Swiper('#main_adver',{
    // direction:'horizontal',
    effect:'fade',
    autoplay:{
        delay:5000,
        disableOnInteraction:false, //클릭 후 자동 유지
    },
    loop: true, //반복설정 true=마지막->첫번째(무한)
    speed:800, //슬라이드 전환 시 부드러운 전환
    navigation: {
        nextEl: '#main_adver .swiper-button-next',
        prevEl: '#main_adver .swiper-button-prev',
    },
})