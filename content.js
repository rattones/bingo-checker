
const interval= setInterval(()=> {
  clearInterval(interval)
  const shoulders= document.querySelector('shoulders')

  let addHtml= '<div>'
    addHtml+= '<label for="num">Marcar: </label>'
    addHtml+= '<input type="text" id="num" />'
    addHtml+= '<button id="btn" type="button">+</button>'
    addHtml+= '</div>'
    addHtml+= '<div>'
    addHtml+= '<span id="sorteados">Sorteados: </span>'
    addHtml+= '</div>'

  shoulders.innerHTML= addHtml

  const num= document.querySelector('#num')

  document.querySelector('#btn').addEventListener('click', () => {
    // const num= document.querySelector('#num')
    const a= document.querySelectorAll('.a')
    const sorteados= document.querySelector('#sorteados')
    const bingo = []

    a.forEach( b => { 
      if (num.value == b.innerHTML) { 
        b.classList.add('strike')
      } 
    })

    bingo.push(num.value)
    sorteados.innerHTML+= ` ${num.value}`

    num.value= '';
  })

  num.focus();
  
}, 500)