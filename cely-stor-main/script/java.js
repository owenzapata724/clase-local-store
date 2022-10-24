let nombre
let apellido
let usuario
let email
let direccion
let departamento

let formulario= document.getElementById('form')

 formulario.addEventListener('submit',(e) =>{
     e.preventDefault()
 })

 function letdata(){
    nombre= document.getElementById("firstName").value 
    apellido= document.getElementById("lastName").value 
    usuario= document.getElementById("userName").value 
    email= document.getElementById("email").value 
    direccion= document.getElementById("address").value 
    departamento= document.getElementById("state").value 
 }

 function guardarlocalstorage(){
     localStorage.setItem("nombre", nombre)
     localStorage.setItem("apellido", apellido)
     localStorage.setItem("ciudad", ciudad)
     localStorage.setItem("usuario", usuario)
     localStorage.setItem("email", email)
     localStorage.setItem("direccion", direccion)
     localStorage.setItem("cvv" cvv)
 }
function extraerdata(){
    let nom=localStorage.getItem('nombre')
    alert('bienvenido',nom)
}
