// Código del cuadrado
console.group("Cuadrados")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm");


const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();


// Código del triangulo
console.group("Triángulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log("Los lados del triangulo miden "
 + ladoTriangulo1 + "cm, "
 + ladoTriangulo2 + "cm, "
 + baseTriangulo + "cm"
 );
 console.log("La altura del triangulo mide " + alturaTriangulo + "cm");

 const perimetroTriangulo = ladoTriangulo1 +
 + ladoTriangulo2 + baseTriangulo;
 console.log
 ("El perimetro del triangulo es: "
 +  perimetroTriangulo + " cm");

 const areaTriangulo = (baseTriangulo *
 alturaTriangulo) / 2;
 console.log
 ("El area del triangulo es: "
 +  areaTriangulo + " cm^2");
 console.groupEnd();


 // Código del circulos
console.group("Circulos")

// Radio
const radioCirculo = 4;
console.log("El radio del circulo mide " + radioCirculo + "cm");

// Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo mide " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
console.log("El PI del circulo mide " + PI);

// Perimetro
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo mide " + perimetroCirculo + "cm");

// Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo mide " + areaCirculo + "cm");
console.groupEnd();