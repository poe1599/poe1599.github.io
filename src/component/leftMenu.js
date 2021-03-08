//  左側選單 
const menu = document.createElement('template');
menu.innerHTML = ` 
<div class="left-menu d-flex">
    <div class="left-menu-body">
        <ul>
            <li><a href="https://poe1599.github.io/">葉柏毅的履歷</a></li>
            <li><a href="https://github.com/poe1599/proj19">資策會期中個人專題</a></li>
            <li>資策會期末小組專題</li>
            <ul>
                <li><a href="https://github.com/Liu-Lydia/simple-meal">前端專案</a></li>
                <li><a href="https://github.com/poe1599/SimpleMeal-node">後端專案</a></li>
            </ul>
        </ul>
    </div>
    <div class="left-menu-tag">
        <i class="fas fa-chevron-right"></i>
    </div>

</div>`

document.body.appendChild(menu.content);

 // 左側選單開閉
 $('.left-menu-tag').on('click', () => {
    $('.left-menu').toggleClass('left-menu-active')
    $('.fa-chevron-right').toggleClass('rotateArrow')
})