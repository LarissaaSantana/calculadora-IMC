


function calcular(){
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    
    let alturaAoQuadrado = (parseFloat(altura) * parseFloat(altura))
    let imc = parseFloat(peso) / alturaAoQuadrado
    console.log('seu IMC é -> ', imc);
}