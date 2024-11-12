function logar(){
    let email = document.getElementById('txtemail').value;
    let senha = document.getElementById('txtsenha').value;
    
     document.getElementById('msg').innerText = "";   
 
    if(email.trim()==="" || senha.trim()==="")
       document.getElementById('msg').innerText = "Informar e-mail e senha";
    else{
         //reccuperar array de usuarios da storage
         let array_usuarios = JSON.parse(
             localStorage.getItem("array_usuarios"));
 
         if(array_usuarios==null)
             document.getElementById('msg').innerText = "Não é possivel validar! Cadastre-se";
         else{
             //validar (filtro no array procurando quem tem o email e senha iguais aos digitados)
             let usuario = array_usuarios.filter(p => p.senha == senha && p.email == email);
         
             if(usuario.length>0) //encontrou alguem com estes dados
             {
                 //dados estão corretos
                 //salvar o nome do usuario na storage
                 localStorage.setItem("key_email", usuario[0].nome);
 
                 //redirecionar o usuario para a pagina interna
                 location.href='paginainterna.html';
 
             }
             //document.getElementById('msg').innerText = "Dados corretos";   
             else
             document.getElementById('msg').innerText = "Login não encontrado! Cadastre-se!";   
         }
     }
 }
 function cadastrar(){
    location.href='cadastro.html';
 }