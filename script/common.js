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

//----------------------------------------------------------
//nav에 마우스 올렸을 때 해당 nav 나타내기
//변수 생성
const sub = document.querySelectorAll('ul > li > .sub_bg')
const nav = document.querySelectorAll('ul > .nav_sub ')
console.log(sub, nav)
//처음 sub 숨기기
for(let i of sub){i.style.display='none'}

nav.forEach(function(t,i,a){
    t.addEventListener('mouseover',function(){
        for(let j of sub){j.style.display='none'}
        sub[i].style.display='block'
    })
})
console.log(nav[0])
//nav에 마우스 나갔을 때 nav 숨기기
for(let i of nav){i.addEventListener('mouseout',function(){
    for(let j of sub){j.style.display='none'}
})} 



console.log('---------------------')
//----------------------------------------------------------
//m_nav 클릭시 open_nav 나타나기
//open_nav > li > a 클릭시 해당 open_sub 나타나기
//close 클릭시 open_nev 숨기기
//m_search 클릭시 open_search 나타나기
//open_search_close 클릭시 open_search 숨기기
//변수생성
const m_nav = document.querySelector('header .container .h_right .m_nav') //mav아이콘
const open_nav = document.querySelector('header .container .open_nav')//open_nav
const aTag = document.querySelectorAll('header .container .open_nav ul .gnb')//open_nav>li>
const open_sub = document.querySelectorAll('header .container .open_nav ul li .open_sub')//open_nav > open_sub
const open_search = document.querySelector('header .container .open_search')//m검색
const m_search = document.querySelector('header .container .h_right .m_search') //m검색아이콘
console.log(m_nav, open_nav,aTag, open_sub)
console.log(m_search, open_search)

//m_search 클릭시 open_search 나타나기
//다시 클릭시 open_search 숨기기
m_search.addEventListener('click',function(e){
    e.preventDefault()
    open_search.classList.toggle('active')
})

//m_nav 클릭시 open_nav 나타나기
//다시 클릭시 open_nav 숨기기
m_nav.addEventListener('click',function(e){
    e.preventDefault()
    open_nav.classList.toggle('active')
})


//open_nav > li > a 클릭시 해당 open_sub 나타나기
//다시 클릭 시 해당 open_sub 숨기기
aTag.forEach(function(t,i,a){
    t.addEventListener('click',function(e){
        e.preventDefault()
        open_sub[i].classList.toggle('active')
    })
})

