function logar(){
    let email = document.getElementById('txtemail').value;
    let senha = document.getElementById('txtsenha').value;
    
     document.getElementById('msg').innerText = "";   
 
    if(email.trim()==="" || senha.trim()==="")
       document.getElementById('msg').innerText = "Informar e-mail e senha";
    else{
         let array_usuarios = JSON.parse(
             localStorage.getItem("array_usuarios"));
 
         if(array_usuarios==null)
             document.getElementById('msg').innerText = "Não é possivel validar! Cadastre-se";
         else{
             let usuario = array_usuarios.filter(p => p.senha == senha && p.email == email);
         
             if(usuario.length>0) 
             {
                 localStorage.setItem("key_email", usuario[0].nome);

                 location.href='paginainterna.html';
 
             } 
             else
             document.getElementById('msg').innerText = "Login não encontrado! Cadastre-se!";   
         }
     }
 }
 function cadastrar(){
    location.href='cadastro.html';

 }
