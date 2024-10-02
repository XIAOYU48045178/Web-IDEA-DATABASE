var loginForm = document.querySelector('form')
var nameInput = document.querySelector('.username')
var passwordInput = document.querySelector('.password')
var errorBox = document.querySelector('.error')
loginForm.onsubmit = function (e) {
    e.preventDefault() 
    var name = nameInput.value
    var password = passwordInput.value
    if (!name || !password) return alert('请完整填写表单')
    var xhr = new XMLHttpRequest()
    xhr.open('POST', 'Website', true)
    xhr.onload = function () {
        var res = JSON.parse(xhr.responseText)
        console.log(res)
        if (res.code === 0) {
            errorBox.style.display = 'block'
        } else {
            window.location.href = 'Website'
        }
    }
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
    xhr.send('username=' + name + '&password=' + password)
}

