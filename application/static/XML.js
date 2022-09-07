function sendAndReceiveXML(message) {
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", '/', false);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(message);
    resp = {}
    try {
        console.log(JSON.parse(xhttp.responseText))
        return JSON.parse(xhttp.responseText);
    } catch (e) {
        alert(xhttp.responseText)
    }
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        }
    };
}
