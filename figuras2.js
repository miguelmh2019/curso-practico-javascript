// Código del cuadrado
console.group("Cuadrados")
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm");


function perimetroCuadrado(lado) {
    return lado * 4;
}

//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");
function areaCuadrado(lado) {
    return lado * lado;
}
//console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();


// Código del triangulo
console.group("Triángulos")
// const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;
//console.log("Los lados del triangulo miden "
//+ ladoTriangulo1 + "cm, "
//+ ladoTriangulo2 + "cm, "
//+ baseTriangulo + "cm"
//);
//console.log("La altura del triangulo mide " + alturaTriangulo + "cm");

 function perimetroTriangulo(lado1, lado2, base) {
     return lado1 + lado2 + base;
 }
// console.log
// ("El perimetro del triangulo es: "
// +  perimetroTriangulo + " cm");

 function areaTriangulo(base, altura) {
     return   (base * altura) / 2;
    }
 /* console.log
 ("El area del triangulo es: "
 +  areaTriangulo + " cm^2");
 console.groupEnd(); */


 // Código del circulos
console.group("Circulos")

// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo mide " + radioCirculo + "cm");

// Diametro
function diametroCirculo(radio) {
    return radio * 2;
}
// console.log("El diametro del circulo mide " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
console.log("El PI del circulo mide " + PI);

// Perimetro
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return diametro * PI;
}
// console.log("El perimetro del circulo mide " + perimetroCirculo + "cm");

// Area
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
function areaCirculo(radio) {
return (radio * radio) * PI;
}
// console.log("El area del circulo mide " + areaCirculo + "cm");
console.groupEnd();