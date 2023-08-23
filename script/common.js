// header, footer

//nav에 마우스 올렸을 때 해당 nav 나타내기
//변수 생성
const sub = document.querySelectorAll('ul > li > .sub_bg')
const nav = document.querySelectorAll('ul > li ')
console.log(sub, nav)

//처음 sub 숨기기
for(let i of sub){i.style.display='none'}

/* //nav에 마우스 올렸을 때 해당 nav 나타내기
for(let i of nav){i.addEventListener('mouseover',function(){
    for(let j of sub){j.style.display='block'}
})}
//nav에 마우스 나갔을 때 nav 숨기기
for(let i of nav){i.addEventListener('mouseout',function(){
    for(let j of sub){j.style.display='none'}
})} */
nav.forEach(function(t,i,a){
    t.addEventListener('mouseover',function(){
        for(let i of sub){i.style.display='none'}
        sub[i].style.display='block'
    })
})
//sub에 마우스 나갔을 때 nav 숨기기
for(let i of sub){i.addEventListener('mouseout',function(){
    for(let j of sub){j.style.display='none'}
})} 


// slide
const h_adver = new Swiper('#h_adver',{
    direction:'horizontal',
    // effect:'fade',
    autoplay:{
        delay:3000,
        disableOnInteraction:false, //클릭 후 자동 유지
    },
    loop: true, //반복설정 true=마지막->첫번째(무한)
    speed:1500, //슬라이드 전환 시 부드러운 전환
    navigation: {
        nextEl: '#h_adver .swiper-button-next',
        prevEl: '#h_adver .swiper-button-prev',
    },
})