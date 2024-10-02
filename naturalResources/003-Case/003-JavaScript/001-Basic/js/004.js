var imgs = document.querySelectorAll('ul > li')
var points = document.querySelectorAll('ol > li')
var banner = document.querySelector('.banner')

var index = 0
function changeOne(type) {

    imgs[index].className = ''
    points[index].className = ''

    if (type === true) {
        index++
    } else if (type === false) {
        index--
    } else {
        index = type
    }
    if (index >= imgs.length) {
        index = 0
    }
    if (index < 0) {
        index = imgs.length - 1
    }

    imgs[index].className = 'active'
    points[index].className = 'active'

}

banner.onclick = function (e) {

    if (e.target.className === 'left') {
        console.log('点击的是左按钮')
        changeOne(false)
    }

    if (e.target.className === 'right') {
        console.log('点击的是右按钮')
        changeOne(true)
    }

    if (e.target.dataset.name === 'point') {
        console.log('点击的是焦点盒子')
        var i = e.target.dataset.i - 0
        changeOne(i)
    }

}

// 自动切换功能
setInterval(function () {

    // 切换到下一张
    changeOne(true)

}, 5000)

