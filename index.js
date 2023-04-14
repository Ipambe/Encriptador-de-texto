const typeToEncrypt = document.getElementById("typeToEncrypt");
const encriptadorB = document.querySelector(".encriptador");
const resultScreen = document.getElementById("resultScreen");
const desencriptadorB = document.querySelector(".desencriptador");
const copiar = document.getElementById("copiar");
const keys = ["e", "i", "a", "o", "u"];
const keys2 = ["enter", "imes", "ai", "ober", "ufat"];
const encriptador = function () {
  if (this.innerHTML == "encriptar") {
    
    for (let i = 0; i < 5; i++) {
      typeToEncrypt.value = typeToEncrypt.value.replaceAll(keys[i], keys2[i]);
    }
  } else {
    for (let i = 0; i < 5; i++) {
      typeToEncrypt.value = typeToEncrypt.value.replaceAll(keys2[i], keys[i]);
    }
  }
  resultScreen.value = typeToEncrypt.value;
  typeToEncrypt.value = "";
  typeToEncrypt.focus();
};
function copiarTexto() {
  var texto = resultScreen.value;
  navigator.clipboard.writeText(texto);
}

encriptadorB.onclick = encriptador;
desencriptadorB.onclick = encriptador;
copiar.onclick = copiarTexto;





