function makePromptTag(promptText, jumps) {
    let p = document.createElement("p");
    p.className = "prompt"
    p.innerText = jumps + " " + promptText
    return p
}

function makeDonePromptTag(promptText, jumps) {
    let pTag = makePromptTag(promptText,jumps)
    pTag.className = "prompt prompt--done"
    return pTag
}

function renderPrompts(promptTexts, i, jumpsA){
    let prompts = document.getElementById("prompts")
    clearChildren(prompts)
    console.log(promptTexts)
    done = promptTexts.slice(0,i)
    todo = promptTexts.slice(i)
    done.map((pT,i) => prompts.append(makeDonePromptTag(pT,jumpsA[i])))
    todo.map(pT => prompts.append(makePromptTag(pT, 0)))
}
