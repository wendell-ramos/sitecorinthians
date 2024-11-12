function cadastrar() {
   let temail = document.getElementById('txtemail').value;
   let tsenha = document.getElementById('txtsenha').value;
   let tnome = document.getElementById('txtnome').value;
   
   document.getElementById('msg').innerText = "";   

   // Verificar se todos os campos estão preenchidos
   if (tnome.trim() === "" || temail.trim() === "" || tsenha.trim() === "") {
       document.getElementById('msg').innerText = "Preencha os campos corretamente!";
       return; // Interrompe a função caso algum campo não esteja preenchido
   }

   // Carregar array de usuários do localStorage
   let array = localStorage.getItem('array_usuarios');
   let array_usuarios = array ? JSON.parse(array) : [];

   // Verificar se o e-mail já está cadastrado
   const emailExistente = array_usuarios.some(usuario => usuario.email === temail);
   if (emailExistente) {
       document.getElementById('msg').innerText = "E-mail já cadastrado";
       return; // Interrompe a função caso o e-mail já exista
   }

   // Criar o objeto usuario
   const usuario = {
       nome: tnome,
       senha: tsenha,
       email: temail
   };

   // Adicionar no array
   array_usuarios.push(usuario);

   // Salvar na storage
   localStorage.setItem('array_usuarios', JSON.stringify(array_usuarios));

   document.getElementById('msg').innerText = 'Dados salvos';
   location.href = 'index.html';
}