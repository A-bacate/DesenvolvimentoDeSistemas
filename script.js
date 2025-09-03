let inputNome = document.getElementById('nome').;
let inputEmail = document.getElementById(`email`);
let inputSenha = document.getElementById(`senha`);
let inputConfirmarSenha = document.getElementById(`confirma-senha`);
let inputIdade = document.getElementById('idade');
let inputDataNascimento = document.getElementById(`nascimento`);

inputNome.addEventListener('input', function(){
    inputNome.classList.remove('borda-erro');
})
inputEmail.addEventListener('input', function(){
    inputEmail.classList.remove('borda-erro');
})
inputSenha.addEventListener('input', function(){
    inputSenha.classList.remove('borda-erro');
})
inputConfirmarSenha.addEventListener('input', function(){
    inputConfirmarSenha.classList.remove('borda-erro');
})
inputIdade.addEventListener('input', function(){
    inputIdade.classList.remove('borda-erro');
})
inputDataNascimento.addEventListener('input', function(){
    inputDataNascimento.classList.remove('borda-erro');
})


function enviarForm(){
    let confirmar = true;

    let nome = document.getElementById(`nome`).value;

    let senha = document.getElementById(`senha`).value;
    let confirmarSenha = document.getElementById(`confirma-senha`).value;

    let email = document.getElementById(`email`).value;

    let idade = document.getElementById('idade').value;

    let dataNascimento = document.getElementById(`nascimento`).value;

    let estado = document.getElementById('estado').value;
    
    // radio -- sexo
    let radios = document.getElementsByName('sexo').value;
    let sexo = null;
    for(let i=0;i<radios.length;i++){
        if (radios[i].checked){
            sexo = radios[i].value;
            break;
        }
    }
    console.log(sexo);

    //checkbox -- animal de estimação
    let checkbox = document.getElementsByName('animal');
    let animal = [];
    for(i=0;i<checkbox.length;i++){
        if (checkbox[i].checked){
            animal.push(checkbox[i].value);
        }
    }
    console.log(animal);
    
    // if (!maiorDeIdade(idade)){
    //     document.getElementById('nascimento').classList.add('borda-erro');
    //     alert('Menor de Idade!');
    // }

    if (nome.length < 2){
        document.getElementById('nome').classList.add('borda-erro');
        confirmar = false;
    }
    if(senha.length === 0){
        document.getElementById('senha').classList.add('borda-erro');
        confirmar = false;
    }
    if (confirmarSenha.length === 0){
        document.getElementById('confirma-senha').classList.add('borda-erro');
        confirmar = false;
    }
    if (idade.value<=9) {
        document.getElementById('idade').classList.add('borda-erro');
        confirmar = false;
    }   
    if (dataNascimento===''){
        document.getElementById('nascimento').classList.add('borda-erro');
        confirmar = false;
    }
    if (email.length === 0){
        document.getElementById('email').classList.add('borda-erro');
        confirmar = false;
    }

    if (!confirmar){
        alert('Preencha os dados corretamente!');
    } else {
        // Bruxaria:
        localStorage.setItem('nome', nome);
        localStorage.setItem('email', email);
        localStorage.setItem('idade', idade);
        localStorage.setItem('dataNascimento', dataNascimento);
        localStorage.setItem('estado', estado);
        localStorage.setItem('sexo', sexo);
        localStorage.setItem('animal', JSON.stringify(animal));

        window.location.href = 'resposta.html';

         let objetoEnvio = {};

        objetoEnvio.nome = nome;
        objetoEnvio.email = email;
        objetoEnvio.senha = senha;
        objetoEnvio.idade = idade;
        objetoEnvio.dataNascimento = dataNascimento;
        objetoEnvio.estado = estado;
        objetoEnvio.sexo = sexo;
        objetoEnvio.animal = animal;

        console.log(objetoEnvio);
    }
            
            // if (senha==confirmarSenha){
            //     alert(`Formulário enviado com sucesso!`);
            //     alert(`Nome: ${nome} / Email: ${email}`);
            // } else {
            //     alert(`Senhas não batem!`);
            // }
            
}

// function maiorDeIdade(idade){
//     if(!idade) return false;

//     return idade>=18;
// }
