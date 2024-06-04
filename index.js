
const spanONE = document.querySelector('.success')
const spanTWO = document.querySelector('.error')
const spanThree = document.querySelector('.need')
const form = document.forms.namedItem('signup')
const inps = form.querySelectorAll('#txt')
const btn = document.querySelector('button')
const inp = document.querySelectorAll('input')



form.onsubmit = (event) => {
  event.preventDefault();
  let success = 0
  let error = 0


  let isError = false
  inps.forEach(inp => {
    if (inp.value.length === 0) {
      inp.style.border = "2px solid red"
      isError = true

      error++

    } else if (inp.value.length > 0) {

      success++
    }

  })
  if (isError === false) {
    submit(event.target)
    return

  }
  spanTWO.innerHTML = error
  spanONE.innerHTML = success




}


function submit(target) {
  const user = {}
  const fm = new FormData(event.target)
  fm.forEach((val, key) => user[key] = val)
  inp.onkeyup = (event) => {
    const val = event.target.value
    let re =   inp.onkeyup = (event) => {
      const val = event.target.value
      let re = /^[\p{L} ,.'-]+$/u
      if(re.test(val)) {
      inp.style.borderColor="blue"
      } else {
    inp.style.borderColor="green"
      }
    }
    if(re.test(val)) {
    inp.style.borderColor="blue"
    } else {
  inp.style.borderColor="green"
    }
  }
 
  
} 
