const goTopDom = document.createElement('template');
goTopDom.innerHTML=`<div class="goTop"><i class="fas fa-chevron-up"></i></div>`

document.body.appendChild(goTopDom.content);

 // 點擊上滑
 $('.goTop').on('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});