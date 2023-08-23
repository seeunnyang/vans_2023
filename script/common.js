// header, footer

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


//m_nav 클릭시 open_nav 나타나기
//open_nav > li > a 클릭시 해당 open_sub 나타나기
//변수생성
const m_nav = document.querySelector('header .container .h_right .m_nav')
const open_nav = document.querySelector('header .container .open_nav')
const aTag = document.querySelectorAll('header .container .open_nav ul li > a')
const open_sub = document.querySelectorAll('header .container .open_nav ul li .open_sub')
console.log(m_nav, open_nav,aTag, open_sub)

//m_nav 클릭시 open_nav 나타나기
m_nav.addEventListener('click',function(e){
    e.preventDefault()
    open_nav.style.display='block'
})
//open_nav > li > a 클릭시 해당 open_sub 나타나기
aTag.forEach(function(t,i,a){
    t.addEventListener('click',function(e){
        e.preventDefault()
        for(let j of open_sub){j.style.display='none'}
        open_sub[i].style.display='block'
    })
})
