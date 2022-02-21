

//buttons
const perimetroCuadrado = document.getElementById('perimetroCua')
const areaCuadrado = document.getElementById('areaCua')
const perimetroTriangulo = document.getElementById('perimetroTri')
const areaTriangulo = document.getElementById('areaTri')
const perimetroCirculo = document.getElementById('perimetroCir')
const areaCirculo = document.getElementById('areaCir')

//funciones cuadrado
perimetroCuadrado.addEventListener('click', ()=>{
    const inputCuadrado = document.getElementById('lado').value;
    const nuevo = parseInt(inputCuadrado)
    alert('el valor del perimetro cuadrado es: ' + nuevo * 4)
})
areaCuadrado.addEventListener('click', ()=>{
    const inputCuadrado = document.getElementById('lado').value;
    const nuevo = parseInt(inputCuadrado)
    alert('el valor del perimetro cuadrado es: ' + nuevo * nuevo)   
})

//funciones Triangulo
perimetroTriangulo.addEventListener('click', ()=>{
    const inputTriangulo1 = document.getElementById('lado1').value;

    const inputTriangulo2 = document.getElementById('lado2').value;

    const inputTrianguloB = document.getElementById('base').value;

    const ladox = parseInt(inputTriangulo1)
    const ladoy = parseInt(inputTriangulo2)
    const base = parseInt(inputTrianguloB)

    const perimetro = ladox + ladoy + base 

    alert('el valor del perimetro triangulo es: ' + perimetro)

})
areaTriangulo.addEventListener('click', ()=>{
    const inputTrianguloB = document.getElementById('base').value;

    const inputTrianguloAltura = document.getElementById('altura')

    const base = parseInt(inputTrianguloB)
    const alto = parseInt(inputTrianguloB)

    const altura = (base * alto) / 2

    alert('el valor del area del triangulo es: ' + altura)
})

//funciones circulo
perimetroCirculo.addEventListener('click', ()=>{
    const inputRadio = document.getElementById('radio').value;

    const nuevo = parseInt(inputRadio);
     
    alert('el valor del perimetro del circulo es: ' + nuevo * 2)

})
areaCirculo.addEventListener('click', ()=>{
    const inputRadio = document.getElementById('radio').value;

    const nuevo = parseInt(inputRadio);
    const pi = Math.PI.toFixed(2)
    const area =  (nuevo * nuevo) * pi
     
    alert('el valor del perimetro del circulo es: ' + area)

})