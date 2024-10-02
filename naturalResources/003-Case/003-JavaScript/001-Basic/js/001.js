var allBtn = document.querySelector('input')
var items = document.querySelectorAll('input:nth-child(n + 2)')

allBtn.onclick = function () {
    var type = allBtn.checked
    for (var i = 0; i < items.length; i++) {
        items[i].checked = type
    }
}

for (var i = 0; i < items.length; i++) {
    items[i].onclick = function () {
        var flag = true
        for (var j = 0; j < items.length; j++) {
            if (items[j].checked === false) {
                flag = false
                break
            }
        }
        allBtn.checked = flag
    }
}