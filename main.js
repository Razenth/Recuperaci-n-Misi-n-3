const inputEmail = document.querySelector('.email')
const inputUser = document.querySelector('.user')
const login = document.querySelector('#login')
const error = document.querySelector('.error')
let datos = null


const main = async () => {
    const anwser = await fetch ('https://jsonplaceholder.typicode.com/users')
    const data = await anwser.json()
    console.log (data)

    localStorage.setItem('data', JSON.stringify(data))
}
main()


function mostrarError(){
    inputEmail.value=''
    inputUser.value=''
    error.innerHTML='Error, el usuario o el email no coinciden'
    error.style.display='block'
    inputEmail.style.border='1px solid rgb(172, 27, 27)'
    inputUser.style.border='1px solid rgb(172, 27, 27)'
        setTimeout(() => {
            error.style.display='none'
            inputEmail.style.border='1px solid #3E334E'
            inputUser.style.border='1px solid #3E334E'
        },2000)
}


login.addEventListener('click', ()=>{
    if(inputEmail.value=='' || inputUser.value==''){
        if(inputEmail.value==''){
            error.innerHTML='No debe dejar espacios vacios'
            error.style.display='block'
            inputEmail.style.border='1px solid rgb(172, 27, 27)'
            setTimeout(() => {
                error.style.display='none'
                inputEmail.style.border='1px solid #3E334E'
            },2000)
        }else if(inputUser.value==''){
            error.innerHTML='No debe dejar espacios vacios'
            error.style.display='block'
            inputUser.style.border='1px solid rgb(172, 27, 27)'
            setTimeout(() => {
                error.style.display='none'
                inputUser.style.border='1px solid #3E334E'
            },2000)
        }

    }else{
        datos = JSON.parse(localStorage.getItem('data'))
        console.log(datos)
        let encontrado = datos.find(element => element.email==inputEmail.value)
        console.log(encontrado)
        if(encontrado != undefined){
            if(encontrado.username == inputUser.value){
                inputEmail.value=''
                inputUser.value=''
                location.href='./welcome.html'

            }else{
                mostrarError()
            }

        }else{
            mostrarError()
        }
    }
})
