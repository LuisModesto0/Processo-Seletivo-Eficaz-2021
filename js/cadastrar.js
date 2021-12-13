function cadastrar() {
var inputEmailpessoal = document.getElementById("email_pessoal")
var inputNome = document.getElementById("nome")
var inputEmail = document.getElementById("email")
var inputTelefone = document.getElementById("telefone")
var inputRua = document.getElementById("rua")
var inputNumero = document.getElementById("numero")
var inputComplemento = document.getElementById("complemento")
var inputBairro = document.getElementById("bairro")
var inputCep = document.getElementById("cep")
var inputCidade = document.getElementById("cidade")
var inputUf = document.getElementById("uf")


var usuario = {
        seu_email: inputEmailpessoal.value,
        nome: inputNome.value,
        email: inputEmail.value,
        telefone: inputTelefone.value,
        rua: inputRua.value,
        numero: inputNumero.value,
        complemento: inputComplemento.value,
        bairro: inputBairro.value,
        cidade: inputCidade.value,
        uf: inputUf.value,
        cep: inputCep.value,

} 

console.log(usuario);

fetch("https://estagio.eficazmarketing.com/api/user",
        {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(usuario)
        })
        .then(function(res){ location.reload() })
        .catch(function(err){ console.log(err) })
}