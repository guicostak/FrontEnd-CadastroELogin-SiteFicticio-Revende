/* VARIÁVEIS */

const facebookLogo = document.getElementById('logo1')
const facebookLogo2 = document.getElementById('logo2')
const facebookButton = document.getElementById('facebook')

const mostrarSenha = document.getElementById('mostrarSenha')
const mostrarSenha2 = document.getElementById('mostrarSenha2')

const nome = document.getElementById('nome')
const email = document.getElementById('email')
const cpf = document.getElementById('cpf')
const nascimento = document.getElementById('nascimento')
const senha = document.getElementById('senha')

const labelNome = document.getElementById('labelNome')
const labelEmail = document.getElementById('labelEmail')
const labelCpf = document.getElementById('labelCpf')
const labelNascimento = document.getElementById('labelNascimento')
const labelSenha = document.getElementById('labelSenha')
const labelCamposVazios = document.getElementById('labelCamposVazios')


/* FORMATAÇÃO DATA */

nascimento.addEventListener('keypress', () => {
  if (nascimento.value.length === 2) {
    nascimento.value += '/'
  }

  if (nascimento.value.length === 5) {
    nascimento.value += '/'
  }
})

const date = new Date()
const formater intl.DateTimeFormat()


/* FORMATAÇÃO CPF */

cpf.addEventListener('keypress', () => {
  if (cpf.value.length === 3) {
    cpf.value += '.'
  }

  if (cpf.value.length === 7) {
    cpf.value += '.'
  }

  if (cpf.value.length === 11) {
    cpf.value += '-'
  }
})

/* CAMPOS RETORNAR SOMENTE NÚMERO */

function retornarNumero(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /^[0-9.]+$/;
  if( !regex.test(key) ) {
     theEvent.returnValue = false;
     if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

/* ANIMAÇÃO BOTÃO FACEBOOK*/

facebookButton.addEventListener('mouseover', () => {
  facebookLogo.style.display = "none"
  facebookLogo2.style.display = "flex"
})

facebookButton.addEventListener('mouseout', () => {
  facebookLogo.style.display = "flex"
  facebookLogo2.style.display = "none"
})

facebookButton.addEventListener('click', () => {
  facebookLogo.style.display = "none"
  facebookLogo2.style.display = "flex"
})

facebookButton.addEventListener('mousedown', () => {
  facebookLogo.style.display = "flex"
  facebookLogo2.style.display = "none"
})

/* MOSTRAR SENHA */

  mostrarSenha.addEventListener('click', () => {
    mostrarSenha.style.display = "none"
    mostrarSenha2.style.display = "flex"
    senha.setAttribute('type', 'text')
    mostrarSenha2.style.borderBottom = "1px solid var(--main-color)"
  })
  
  mostrarSenha2.addEventListener('click', () => {
    mostrarSenha2.style.display = "none"
    mostrarSenha.style.display = "flex"
    senha.setAttribute('type', 'password')
    mostrarSenha.style.borderBottom = "1px solid var(--main-color)"
  })

/* ESTILIZAÇÃO DO INPUT */

nome.addEventListener('focus', () => {
  nome.style.borderBottom = "1px solid var(--text-color)"
})

nome.addEventListener('focusout', () => {
  nome.style.borderBottom = "1px solid var(--main-color)"
})

email.addEventListener('focus', () => {
  email.style.borderBottom = "1px solid var(--text-color)"
})

email.addEventListener('focusout', () => {
  email.style.borderBottom = "1px solid var(--main-color)"
})

cpf.addEventListener('focus', () => {
  cpf.style.borderBottom = "1px solid var(--text-color)"
})

cpf.addEventListener('focusout', () => {
  cpf.style.borderBottom = "1px solid var(--main-color)"
})

nascimento.addEventListener('focus', () => {
  nascimento.style.borderBottom = "1px solid var(--text-color)"
})

nascimento.addEventListener('focusout', () => {
  nascimento.style.borderBottom = "1px solid var(--main-color)"
})

senha.addEventListener('focus', () =>{
  senha.style.borderBottom = "1px solid var(--text-color)"

  if(senha.getAttribute('type') == 'password') {
    mostrarSenha.style.display = "flex"
    mostrarSenha.style.borderBottom = "1px solid var(--text-color)"
    mostrarSenha2.style.display = "none"
    senha.setAttribute('type', 'password')
    
  }
 if(senha.getAttribute('type') == 'text') {
    mostrarSenha.style.display = "none"
    mostrarSenha2.style.display = "flex"
    mostrarSenha2.style.borderBottom = "1px solid var(--text-color)"
    senha.setAttribute('type', 'text')
  }
})

senha.addEventListener('focusout', () => {
  senha.style.borderBottom = "1px solid var(--main-color)"
  mostrarSenha.style.borderBottom = "1px solid var(--text-color)"
  mostrarSenha2.style.borderBottom = "1px solid var(--text-color)"

  if(senha.getAttribute('type') == 'password'){
    mostrarSenha.style.display = "flex"
    mostrarSenha2.style.display = "none"
    mostrarSenha.style.borderBottom = "1px solid var(--main-color)"
    senha.setAttribute('type', 'password')
    
  }
  if(senha.getAttribute('type') == 'text'){
    mostrarSenha.style.display = "none"
    mostrarSenha2.style.display = "flex"
    mostrarSenha2.style.borderBottom = "1px solid var(--main-color)"
    senha.setAttribute('type', 'text')
  }
})

/* VALIDAÇÕES */

function cadastrar() {
  let validNome = false
  let validEmail = false
  let validCpf = false
  let validNascimento = false
  let validSenha = false


  if(nome.value.length == 0) {
    campoVazio();
    validNome = false
  } 
  else {
    if (nome.value.length <= 5) {

      validNome = false
    } 
    else {
      validNome = true
    }
  }
  
  if(email.value.length == 0) {
    campoVazio();
    validEmail = false
  }
  else {
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || email.value.indexOf('.') - email.value.indexOf('@') == 1) {
      validEmail = false
    } 
    else {
      validEmail = true
    }
  }
  
  if(cpf.value.length == 0) {
    validCpf = false;
  }
  else {
    if(cpf.value.length != 14) {
      validCpf = false
    } 
    else {
      validCpf = true
    }
  }
}

function campoVazio() {
  labelCamposVazios.style.display = "flex"
}
