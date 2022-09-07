function makePromptTag(promptText) {
    let p = document.createElement("p");
    p.innerText = promptText
    return p
}

function renderPrompts(promptTexts){
    let prompts = document.getElementById("prompts")
    clearChildren(prompts)
    promptTexts.map(pT => prompts.append(makePromptTag(pT)))
}

