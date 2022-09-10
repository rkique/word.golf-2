function sendAndReceiveXML(message) {
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", '/', false);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(message);
    resp = {}
    if (xhttp.responseText.startsWith("session_done"))
    {
        j = JSON.parse(xhttp.responseText.substring(12));
        j['session_done'] = 1
        return j
    }
    else {
        try {
            console.log(JSON.parse(xhttp.responseText))
            return JSON.parse(xhttp.responseText);
        } catch (e) {
            alert(xhttp.responseText)
        }
    }
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        }
    };
}
