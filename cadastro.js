function cadastrar(){
   let temail = document.getElementById('txtemail').value;
   let tsenha = document.getElementById('txtsenha').value;
   let tnome = document.getElementById('txtnome').value;
   
   document.getElementById('msg').innerText = "";   

   if (tnome.trim() === "" || temail.trim() === "" || tsenha.trim() === "") {
       document.getElementById('msg').innerText = "Preencha os campos corretamente!";
       return; 
   }

   let array = localStorage.getItem('array_usuarios');
   let array_usuarios = array ? JSON.parse(array) : [];

   const emailExistente = array_usuarios.some(usuario => usuario.email === temail);
   if (emailExistente) {
       document.getElementById('msg').innerText = "E-mail já cadastrado";
       return;
   }

   const usuario ={
       nome: tnome,
       senha: tsenha,
       email: temail
   };

   array_usuarios.push(usuario);

   localStorage.setItem('array_usuarios', JSON.stringify(array_usuarios));

   document.getElementById('msg').innerText = 'Dados salvos';
   location.href = 'index.html';

}
