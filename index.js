
const spanONE = document.querySelector('.success')
const spanTWO = document.querySelector('.error')
const form = document.forms.namedItem('signup')
const inps = form.querySelectorAll('#txt')
const btn = document.querySelector('button')
let success =0
let error =0
let need =0


form.onsubmit = (event) => {
    event.preventDefault();

    let isError = false
    inps.forEach(inp => {
        if (inp.value.length === 0) {
            inp.style.border = "2px solid red"
            isError = true
            spanTWO.innerHTML = error +1
            error++
           
        } else if (inp.value.length > 0) 
        {
            spanONE.innerHTML = success
            success++
            need = success - error
        }

    })
    if (isError === false ) {
        submit(event.target)
        return

    }
  
    


        }    


        function submit(target) {
            const user = {}
            const fm = new FormData(event.target)
            fm.forEach((val, key) => user[key] = val)
        
            console.log(user);
        }