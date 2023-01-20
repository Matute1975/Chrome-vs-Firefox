
//"use strict"
/* 
//operador de negacion:
let esVerdadero=true //si lo quiero negar, agrego delante de true un ! o delante de la variable al llamarla por el console.log
console.log(esVerdadero)

if (!esVerdadero){
    console.log('Salio por verdadero')//si la variable alconsultar no esta negada, saldra por verdadero.
}else{
    console.log('Salio por falso')//si niego con ! la variable ebn el if saldra por falso.
}

//con operador ternario seria asi:

!esVerdadero? console.log('Salio por verdadero'):console.log('Salio por falso') */


/* 
//funciones nombradas (en java script se dejaran de usar en el futuro)
function miFuncion(a,b){
    console.log('Hola Mundo')
}
miFuncion()
//funciones del tipo flecha (arrow), como se definen:

const miFuncionFlecha=()=>{
    console.log('esta en mi funcion arrow(flecha)')
}
miFuncionFlecha()

//funciones anonimas. //como se usan y se llaman se explicara mas adelante, como se definen:
()=>{

}
 */

/* 
const nombre = (parametro) => { }

for (let i = 0; i < array.length; i++){} */



//FORMULARIOS

/*
let nombre=document.getElementById('usuario.input')
let form=document.getElementById('formulario') 

const enviarFormulario = (event) => { 
event.preventDefault()
let usuario=event.target.usuario.value
//let usuario=Number(event.target.usuario.value) // Asi deberia definir la variable usuario, si precisara hacer operaciones matematicas sobre el valor ingresado.
if(usuario ==''){
    console.log('Es necesario un nombre de usuario') //con ewsto puedo validad que no ingresen usuarios en blanco
}

console.log(typeof(usuario)) //esto me mostrara de que tipo de dato es el dato que estoy manejando. Pero siempre sera string aunque en mi form, en el input el type ponga number.

console.log(Number(usuario))//Number es la unificacion de parseInt y parseFloat (Number con mayuscula)

let resultadoDefinitivo=usuario + 125 //lo concatenara, porque siempre lo tomara como string

console.log(resultadoDefinitivo)

console.log(event.target.usuario.value) 
console.log(event.target.contraseña.value)
}

form.addEventListener('submit',enviarFormulario)

*/

//EJEMPLO DE COMO CAPTURAR INFORMACION DESDE EL INPUT EN UN DIV



let numeroUno=document.getElementById('numeroUno')
let numeroDos=document.getElementById('numeroDos').value


console.log(numeroUno)
console.log(numeroDos)

console.log(numeroUno.value)

//let resultado=numeroUno.value