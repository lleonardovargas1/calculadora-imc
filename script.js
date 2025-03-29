let imc = 0;
 
const btnCalcula = document.getElementById('calcular'); // crei uma variavel para o botão que ele vai calcular o imc
btnCalcula.addEventListener('click', () => {
 
    let altura = parseFloat(document.getElementById('altura').value); // peguei o valor do input altura e transformei em float com o parseFloat
    let peso = parseFloat(document.getElementById('peso').value);
 
    imc = (peso / (altura * altura)); // fiz a conta do imc
 
    document.getElementById('resultadoIMC').innerHTML = imc; // coloquei o resultado do imc no html
     
    // Resetei todas as classes dos elementos
    const ids = ['bx', 'pn', 'ep', 'o', 'o1', 'o2', 'om'];
    ids.forEach(id => {
        const element = document.getElementById(id);
        element.classList.remove('show', 'hide'); // Remove as classes 'show' e 'hide'
        element.classList.add('hide'); // Adiciona apenas a classe 'hide'
    });
   
    if ( imc < 18.5) {
        document.getElementById('bx').classList.add('show');
    }else if( imc > 18.5 && imc < 24.9){
        document.getElementById('pn').classList.add('show');
    }else if( imc > 25 && imc < 29.9){
        document.getElementById('ep').classList.add('show');
    }else if( imc >= 30 && imc < 31){
        document.getElementById('o').classList.add('show');
    }else if( imc >= 30 && imc < 34.9){
        document.getElementById('o1').classList.add('show');
    }else if( imc >= 35 && imc < 39.9){
        document.getElementById('o2').classList.add('show');
    }else if( imc >= 40){
        document.getElementById('om').classList.add('show'); //
    }
});