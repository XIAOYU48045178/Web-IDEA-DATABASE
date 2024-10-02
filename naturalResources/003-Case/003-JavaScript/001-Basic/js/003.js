var users = [
    { id: 1, name: '1', age: 18 },
    { id: 2, name: '2', age: 22 },
    { id: 3, name: '3', age: 30 }
]

var tbody = document.querySelector('tbody')

users.forEach(function (item) {
    console.log(item)
    var tr = document.createElement('tr')
    for (var key in item) {
        var td = document.createElement('td')
        td.innerHTML = item[key]
        tr.appendChild(td)
    }
    tbody.appendChild(tr)
})