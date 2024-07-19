
//criptografia




function Criptografar(){

// Variables

    let NChave = document.getElementById('Key').value;
    let nChave = parseInt(NChave)
    let cFraseOriginal = document.getElementById('Txt').value;
    let cFraseCifrada = [];
    let nCodigo = [];
    let nCodCifrado = [];
    
    for (let index = 0; index < cFraseOriginal.length; index++) {

        nCodigo[index] = cFraseOriginal.charCodeAt(index);
        nCodCifrado[index] = cFraseOriginal.charCodeAt(index) + nChave;
        cFraseCifrada[index] = String.fromCharCode(cFraseOriginal.charCodeAt(index) + nChave);
        }

        document.getElementById('P').innerHTML = cFraseCifrada.join("");
        console.warn("Criptografado " + cFraseCifrada + " Codigo das letra em ASCII " + nCodigo + " Codigo das letras criptografada em ASCII " + nCodCifrado);

}

        
//descriptografia

function Descriptografar() {

    let NChave = document.getElementById('Key').value;
    let nChave = parseInt(NChave)
    let cFraseOriginal = document.getElementById('Txt').value;
    let nCodigo = [];
    let nCodCifrado = [];
    let cFraseCifrada = [];
    
    for (let index = 0; index < cFraseOriginal.length; index++) {

        nCodigo[index] = cFraseOriginal.charCodeAt(index);
        nCodCifrado[index] = cFraseOriginal.charCodeAt(index) - (nChave);
        cFraseCifrada[index] = String.fromCharCode(cFraseOriginal.charCodeAt(index) - (nChave));
        }

        document.getElementById('P2').innerHTML = cFraseCifrada.join("");
        console.warn(cFraseCifrada + " Descriptografado");
    
}

