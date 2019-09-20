    // add event handler
function submitComment() {
    // gather data
    const inputField = document.getElementById('name')
    const name = inputField.value
    const textArea = document.getElementById('msg')
    const msg = textArea.value

    // create the elements you need
    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')

    // adjust the elements we created
    h3.innerHTML = (`${name} said: `)
    p.innerHTML = msg
    comment.classList.add('comment')

    // apend the elements to the document
    comment.appendChild(h3)
    comment.appendChild(p)

    // test
    console.log(comment);
}

