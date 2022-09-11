function makePromptInfo(prompt) {
    let p = document.createElement("p");
    p.innerText = prompt
    return p
}

function renderInformation(prompt){
    let information = document.getElementById("information")
    clearChildren(information)
    information.append(makePromptInfo(prompt))
}

