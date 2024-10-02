//Posicionarnos en el elemento #contenedorCartas y mostrarme por consola los siguientes elementos:
//1) Su primer hijo
const primerHijo =document.querySelector(".carta");
console.log(primerHijo);

//2) Su tercer hijo
const TercerHijo = document.querySelector("#contenedorCartas .carta:nth-child(3)");
console.log(TercerHijo);
//3) El siguiente hermano del tercer hijo
const siguienteHermano = TercerHijo.nextElementSibling;
console.log(siguienteHermano);
//4) Su último hijo
const ultimoHijo = document.querySelector("#contenedorCartas").lastElementChild;
console.log(ultimoHijo);
//5) Su padre
const padre=TercerHijo.parentElement;
console.log(padre);
//6) El padre del padre
const padrePadre=padre.parentElement;
console.log(padrePadre);
//7) Su hermano anterior
console.log(padrePadre.previousElementSibling);
//8) Las clases del último hijo
console.log(ultimoHijo.classList) ;