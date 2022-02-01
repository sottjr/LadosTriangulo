function tipoTrian() {
    let inA = document.getElementById("inA");
    let lnB = document.getElementById("inB");
    let inC = document.getElementById("inC");
    let outLados = document.getElementById("outLados");
    let outTipo = document.getElementById("outTipo");
   

    //Para formar um triangulo, um dos lados não pode ser maior que a soma dos outros dois
    //Caso formar
    //Equilatero = 3 lados iguais
    //Isósceles = 2 lados iguais
    //escaleno 3 lados diferente

    let ladoA = Number(inA.value);
    let ladoB = Number(inB.value);
    let ladoC = Number(inC.value);

    if (ladoA == 0 || ladoA == "" || ladoB == 0 || ladoB == "" || ladoC == 0 || ladoC =="" || isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
        alert("Verifique os números!")
        document.getElementById("inA").value = "";
        document.getElementById("inB").value = "";
        document.getElementById("inC").value = "";
        document.getElementById("outLados").textContent = "";
        document.getElementById("outTipo").textContent = "";
        inA.focus();
        return;
    }
    let verificador = true
    // para saber se pode formar um triângulo
    if (ladoA > (ladoB + ladoC) || ladoB > (ladoA + ladoC) || ladoC > (ladoA + ladoB)) {

        outLados.textContent = "Não é possível montar um triângulo, pois um dos lados é maior que a soma dos outros dois lados números."
        let verificador = false;
    }
    else { outLados.textContent = "Pode formar um triângulo." }



    let equilatero = (ladoA == ladoB && ladoB == ladoC) //três lados iguais
    let escaleno = (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) //três lados diferentes

    if (equilatero == true) {
        outTipo.textContent = "Tipo: Equilátero";
    }
    if (escaleno == true) {
        outTipo.textContent = "Tipo: Escaleno";
    }
    if (equilatero == false && escaleno == false && verificador == true) {
        outTipo.textContent = "Tipo: Isósceles"
    }
}

let btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", tipoTrian);

function limparCampos() {
    document.getElementById("inA").value = "";
    document.getElementById("inB").value = "";
    document.getElementById("inC").value = "";
    document.getElementById("outLados").textContent = "";
    document.getElementById("outTipo").textContent = "";
    inA.focus();
    return;
}

let btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparCampos);