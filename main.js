let header = document.querySelector('header')
let bar = document.querySelector('.bar')
let floatingShorts = document.querySelector('.floating-shorts')

window.addEventListener('scroll',() => {
    console.log(window.scrollY)
    
    if( window.scrollY > document.querySelector('#intro').offsetHeight -72 ){
        header.classList.add('down')
    }else{
        header.classList.remove('down')
    }

    // ㅈㅉ로 스크롤 가능 높이 = body의 높이 - 뷰포트의 높이
    let body_h = document.body.offsetHeight
    let view_h = window.innerHeight
    let real_h = body_h - view_h
    // 백분율 계산식 = 현재스크롤의 위치 / 스크롤가능높이
    let per = (window.scrollY / real_h) * 100
    bar.style.width = per + '%'


    console.log(window.scrollY)
    if ( window.scrollY > document.querySelector('#genji').offsetTop - 400 ) {
        floatingShorts.classList.add('show')
    } else (
        floatingShorts.classList.remove('show')
        
    )
})
