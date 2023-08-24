
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

//--------------------------------------------------------------
//section category
//이미지에 마우스 올리면 h2 색상 바꾸기
//마우스 아웃하면 다시 색 돌아오기
const ca_div = document.querySelectorAll('.category > div')
const ca_h2 = document.querySelectorAll('.category > div >h2')
console.log(ca_div, ca_h2)

ca_div.forEach(function(t,i,a){
    t.addEventListener('mouseover',function(){
        for(let j of ca_h2){j.style.color='#fff'}
        ca_h2[i].style.color='#ca1d31'
    })
})

ca_div.forEach(function(t,i,a){
    t.addEventListener('mouseout',function(){
        for(let j of ca_h2){j.style.color='#fff'}
    })
})

//--------------------------------------------------------------
//section up
//img에 마우스 올리면 title 색 변경하기
//마우스 아웃하면 다시 색 돌아오기
const img_a = document.querySelectorAll('.update .con > div .img')
const title_a = document.querySelectorAll('.update .con > div .title')
console.log(img_a, title_a)

img_a.forEach(function(t,i,a){
    t.addEventListener('mouseover',function(e){
        e.preventDefault()
        for(let j of title_a){j.style.color='#000'}
        title_a[i].style.color='#ca1d31'
    })
})

img_a.forEach(function(t,i,a){
    t.addEventListener('mouseout',function(e){
        e.preventDefault()
        for(let j of title_a){j.style.color='#000'}
    })
})