let inputNome = document.getElementById('nome');
        let inputEmail = document.getElementById(`email`);
        let inputDataNascimento = document.getElementById(`nascimento`);
        let inputSenha = document.getElementById(`senha`);
        let inputConfirmarSenha = document.getElementById(`confirma-senha`);

        inputNome.addEventListener('input', function(){
            inputNome.classList.remove('borda-erro');
        })
        inputEmail.addEventListener('input', function(){
            inputEmail.classList.remove('borda-erro');
        })
        inputDataNascimento.addEventListener('input', function(){
            inputDataNascimento.classList.remove('borda-erro');
        })
        inputSenha.addEventListener('input', function(){
            inputSenha.classList.remove('borda-erro');
        })
        inputConfirmarSenha.addEventListener('input', function(){
            inputC.classList.remove('borda-erro');
        })


        function enviarForm(){
            let nome = document.getElementById(`nome`).value;
            let email = document.getElementById(`email`).value;
            let dataNascimento = document.getElementById(`nascimento`).value;
            let senha = document.getElementById(`senha`).value;
            let confirmarSenha = document.getElementById(`confirma-senha`).value;
            
            let radios = document.getElementsByName('sexo');
            let sexo = null;

            for(let i=0;i<radios.length;i++){
                if (radios[i].checked){
                    sexo = radios[i].value;
                    break;
                }
            }
            console.log(sexo);

            if (!maiorDeIdade(dataNascimento)){
                document.getElementById('nascimento').classList.add('borda-erro');
                alert('Menor de Idade!');
            }

            if (nome.length < 2){
                document.getElementById('nome').classList.add('borda-erro');
            }
            if (email.length === 0){
                document.getElementById('email').classList.add('borda-erro');
            }
            if(senha.length === 0){
                document.getElementById('senha').classList.add('borda-erro');
            }
            if (confirmarSenha.length === 0){
                document.getElementById('confirma-senha').classList.add('borda-erro');
            }
            
            // if (senha==confirmarSenha){
            //     alert(`Formulário enviado com sucesso!`);
            //     alert(`Nome: ${nome} / Email: ${email}`);
            // } else {
            //     alert(`Senhas não batem!`);
            // }
            
        }
        function maiorDeIdade(data){
            if(!data) return false;

            let hoje = new Date;
            let nascimento = new Date(data);

            let idade = hoje.getFullYear() - nascimento.getFullYear();
            let mes = hoje.getMonth() - nascimento.getMonth();
            if(mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())){
                idade--;
            }

            return idade>=18;
        }