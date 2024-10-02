function Tabs(ele) {
    this.ele = document.querySelector(ele)
    this.btns = this.ele.querySelectorAll('ul > li')
    this.tabs = this.ele.querySelectorAll('ol > li')
}

Tabs.prototype.change = function () {
    var _this = this
    for (var i = 0; i < this.btns.length; i++) {
        this.btns[i].setAttribute('index', i)
        this.btns[i].addEventListener('click', function () {
            for (var j = 0; j < _this.btns.length; j++) {
                _this.btns[j].className = ''
                _this.tabs[j].className = ''
            }
            this.className = 'active'
            var index = this.getAttribute('index') - 0
            _this.tabs[index].className = 'active'
        })
    }
}
var t = new Tabs('#box')
t.change()
var t2 = new Tabs('#box2')
t2.change()