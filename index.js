//************************** EJERCICIOS NIVEL 1 *******************/

//***********  #1  ********* */

let usuario = prompt("Ingrese su edad:");
if (parseInt(usuario) >= 18) {
    alert("Tiene la edad suficiente para conducir.");
} else {
    alert(`Te faltan ${18 - parseInt(usuario)} años para conducir`);
}

//***********  #2  ********* */

let myAge = 25;
let yourAge = parseInt(prompt("Ingrese su edad:"));
if (myAge > yourAge) {
    console.log(`Soy ${myAge - yourAge} mayor que tú.`);
} else {
    console.log(`Eres ${yourAge - myAge} mayor que yo.`);
}

//***********  #3  ********* */

let a = 4;
let b = 3;
if (a > b) {
    console.log('a es mayor que b');
} else {
    console.log('a es menor que b');
}

// a>b ? console.log('a es mayor que b') : console.log('a es menor que b')

//***********  #4  ********* */

let numero = parseInt(prompt("Ingrese un numero:"));
if (numero % 2 == 0) {
    console.log(`${numero} es un numero par`);
} else {
    console.log(`${numero} es un numero impar`);
}



//************************** EJERCICIOS NIVEL 2 *******************/

//***********  #1  ********* */

let nota = parseInt(prompt("Ingrese una nota:"));
if (nota >= 0 && nota <= 49) {
    console.log("F");
} else if (nota >= 50 && nota <= 59) {
    console.log("D");
} else if (nota >= 60 && nota <= 69) {
    console.log("C");
} else if (nota >= 70 && nota <= 89) {
    console.log("B");
} else if (nota >= 80 && nota <= 100) {
    console.log("A");
} else {
    console.log("no es una nota valida");
}

//***********  #2  ********* */

let mes = prompt("Ingrese mes:")
switch (mes.toLocaleLowerCase()) {
    case "septiembre":
        console.log("La temporada es Otoño");
        break;
    case "octubre":
        console.log("La temporada es Otoño");
        break;
    case "noviembre":
        console.log("La temporada es Otoño");
        break;
    case "diciembre":
        console.log("La temporada es Invierno");
        break;
    case "enero":
        console.log("La temporada es Invierno");
        break;
    case "febrero":
        console.log("La temporada es Invierno");
        break;
    case "marzo":
        console.log("La temporada es Primavera");
        break;
    case "abril":
        console.log("La temporada es Primavera");
        break;
    case "mayo":
        console.log("La temporada es Primavera");
        break;
    case "junio":
        console.log("La temporada es Verano");
        break;
    case "julio":
        console.log("La temporada es Verano");
        break;
    case "agosto":
        console.log("La temporada es Verano");
        break;

    default:
        console.log("La entrada no es un mes");
        break;
}

//***********  #3  ********* */

let dia = prompt("Que dia es hoy:");
switch (dia.toLocaleLowerCase()) {
    case "sabado": case "domingo":
        console.log(`el ${dia} es un fin de semana`);
        break;
    case "lunes": case "martes": case "miercoles": case "jueves": case "viernes":
        console.log(`el ${dia} es un dia laborable`);
        break;
    default:
        console.log("Entrada incorrecta");
        break;
}

//************************** EJERCICIOS NIVEL 3 *******************/

//***********  #1  ********* */

let mes1 = prompt("Ingrese mes:")
switch (mes1.toLocaleLowerCase()) {
    case "septiembre":
        console.log(`${mes1} tiene 30 dias`);
        break;
    case "octubre":
        console.log(`${mes1} tiene 31 dias`);
        break;
    case "noviembre":
        console.log(`${mes1} tiene 30 dias`);
        break;
    case "diciembre":
        console.log(`${mes1} tiene 31 dias`);
        break;
    case "enero":
        console.log(`${mes1} tiene 31 dias`);
        break;
    case "febrero":
        console.log(`${mes1} tiene 28 dias`);
        break;
    case "marzo":
        console.log(`${mes1} tiene 31 dias`);
        break;
    case "abril":
        console.log(`${mes1} tiene 30 dias`);
        break;
    case "mayo":
        console.log(`${mes1} tiene 31 dias`);
        break;
    case "junio":
        console.log(`${mes1} tiene 30 dias`);
        break;
    case "julio":
        console.log(`${mes1} tiene 31 dias`);
        break;
    case "agosto":
        console.log(`${mes1} tiene 31 dias`);
        break;
    default:
        console.log("La entrada no es un mes");
        break;
}


//***********  #2  ********* */

let mes2 = prompt("Ingrese mes:")
let anio = prompt("Indique si es año 'normal' o año 'bisiesto':");
if (anio.toLocaleLowerCase() == "normal" || anio.toLocaleLowerCase() == "bisiesto") {
    switch (mes2.toLocaleLowerCase()) {
        case "septiembre":
            console.log(`${mes2} tiene 30 dias`);
            break;
        case "octubre":
            console.log(`${mes2} tiene 31 dias`);
            break;
        case "noviembre":
            console.log(`${mes2} tiene 30 dias`);
            break;
        case "diciembre":
            console.log(`${mes2} tiene 31 dias`);
            break;
        case "enero":
            console.log(`${mes2} tiene 31 dias`);
            break;
        case "febrero":
            if (anio == "bisiesto") {
                console.log(`${mes2} tiene 29 dias`);
            } else if (anio == "normal") {
                console.log(`${mes2} tiene 28 dias`);
            }
            break;
        case "marzo":
            console.log(`${mes2} tiene 31 dias`);
            break;
        case "abril":
            console.log(`${mes2} tiene 30 dias`);
            break;
        case "mayo":
            console.log(`${mes2} tiene 31 dias`);
            break;
        case "junio":
            console.log(`${mes2} tiene 30 dias`);
            break;
        case "julio":
            console.log(`${mes2} tiene 31 dias`);
            break;
        case "agosto":
            console.log(`${mes2} tiene 31 dias`);
            break;
        default:
            console.log("La entrada no es un mes");
            break;
    }
} else {
    console.log("Entrada incorrecta");
}
