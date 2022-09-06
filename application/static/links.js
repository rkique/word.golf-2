/* makes and renders links */


function makeLink(word) {
    let link = document.createElement("button");
    let span = document.createElement("span")
    span.innerText = word;
    link.appendChild(span)
    link.className = "link"
    return link
}

function makeStartLink(word){
    startLink = makeLink(word)
    startLink.className = "link link--starting"
    return startLink
}

function strip(element){
    while (element.lastChild) {
        element.removeChild(element.lastChild);
    }
}
function renderLinks(results){
    console.log("rendering " + results)
    let wordspace = document.getElementById("wordspace")
    strip(wordspace)
    wordspace.append(makeStartLink(results.shift()))
    results.forEach(result => wordspace.append(makeLink(result)))
}

//activates links on the page
function activateLinks(){
    let wordspace = document.getElementById("wordspace")
    ws_array = Array.from(wordspace.children)
    ws_texts = ws_array.map(el => el.firstChild.innerText)
    ws_array.map(function(el, i){el.onclick = function() {
        console.log("clciked me")
        postWord(ws_texts[i])
    }})
}

function postWord(word) {
    resp = sendAndReceiveXML(word)
    console.log(resp.results)
    renderLinks(resp.results)
    activateLinks()
    }
