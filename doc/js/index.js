// 初始化 highlight
hljs.initHighlightingOnLoad();

window.onload = function () {
    var menuList = document.querySelector('.menu-list').querySelectorAll('li')
    for (let i = 0; i < menuList.length; i++) {
        menuList[i].addEventListener('click', function () {

            document.querySelector('.menu-list li.active').classList.remove('active')

            menuList[i].classList.add('active')
        }, false)
    }
}