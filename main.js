let print = function (message) {
    document.getElementById('output').innerHTML = "Length is " + message;
}

document.getElementById('btn').onclick = function (e) {
    print(document.getElementById('string').value.length)
}