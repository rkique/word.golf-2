/* makes and renders links */

function makeLink(prompt,word) {
    let link = document.createElement("button");
    let span = document.createElement("span")
    span.innerText = word;
    /*if (word.length < 20){span.style.fontSize = "1.5em"}
    if (word.length < 12){span.style.fontSize = "2.5em"}
    if (word.length < 10){span.style.fontSize = "3em"}
    if (word.length < 8){span.style.fontSize = "3.75em"}*/
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


function maintainLinks(prompt){    
    if(sessionEnded(prompt)){
    disableLinks()
    saySessionEnded()
}}

function tallyScreen(prompts, i, jumpsA){
    total = jumpsA.reduce((a, b) => a + b, 0)
    renderInformation(`you finished today's prompts in ${total} jumps!`)
    renderPrompts(prompts,i, jumpsA)
}

/*this part is very important*/
function saySessionEnded(){
    resp = sendAndReceiveXML(`end=true`)
    if(resp.hasOwnProperty('session_done')){
        tallyScreen(resp.prompts, resp.i, resp.jumpsA)
    }
    else {
    renderInformation("go from " + resp.prompt)
    renderPrompts(resp.prompts,resp.i, resp.jumpsA)
    renderLinks(resp.prompt, resp.results)
    activateLinks()
    }
}

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
    resp = sendAndReceiveXML("word=" + word)
    renderLinks(resp.prompt, resp.results)
    activateLinks()
    }
