var btns = document.querySelectorAll('ul > li')
var tabs = document.querySelectorAll('ol > li')

btns.forEach(function (item, index) {
    item.onclick = function () {
        btns.forEach(function (t, i) {
            t.className = ''
            tabs[i].className = ''
        })
        item.className = 'active'
        tabs[index].className = 'active'
    }
})
