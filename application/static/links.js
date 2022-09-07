/* makes and renders links */

function makeLink(prompt,word) {
    let link = document.createElement("button");
    let span = document.createElement("span")
    span.innerText = word;
    link.appendChild(span)
    link.className = "link"
    if(prompt[1] == word){link.className = "link link--target"}
    return link
}

function makeStartLink(prompt, word){
    startLink = makeLink(prompt, word)
    startLink.className = "link link--disabled link--starting"
    return startLink
}

function disableLinks(){
    links = document.getElementsByClassName("link")
    links.map(link => link.classList.add("link--disabled"))
}

function clearChildren(element){
    while (element.lastChild) {
        element.removeChild(element.lastChild);
    }
}

function sessionEnded(prompt){
    ws_texts = ws_to_text()
    return ws_texts[0] == prompt[1]
}

function maintainLinks(prompt){    
    if(sessionEnded(prompt)){
    alert("you win!")
    disableLinks()
}}


function renderLinks(prompt, results){
    let wordspace = document.getElementById("wordspace")
    clearChildren(wordspace)
    wordspace.append(makeStartLink(prompt, results.shift()))
    results.forEach(result => wordspace.append(makeLink(prompt,result)))
    maintainLinks(prompt)
}

function ws_to_text(){
    let wordspace = document.getElementById("wordspace")
    ws_array = Array.from(wordspace.children)
    return ws_array.map(el => el.firstChild.innerText)
}

//activates links on the page
function activateLinks(){
    ws_texts = ws_to_text()
    ws_array.map(function(el, i){el.onclick = function() {
        postWord(ws_texts[i])
    }})
}

function postWord(word) {
    resp = sendAndReceiveXML(word)
    renderLinks(resp.prompt, resp.results)
    activateLinks()
    }
