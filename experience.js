let labels = document.querySelectorAll('label');

for (let l of labels) {
  l.addEventListener('click', (e) => {
    let currentInput = document.querySelector('#' + l.getAttribute('for'));
    if (!currentInput.checked) {
      currentInput.checked = true
    }

    let otherInputs = document.querySelectorAll('input:not(#' + l.getAttribute('for') + ')');
    for (let i of otherInputs) {
      i.checked = false
    }
  })
}

document.documentElement.scrollTop = 0;