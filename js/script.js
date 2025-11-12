document.getElementById('loginForm').addEventListener('submit', function(e){

    e.preventDefault(); 

    const usuario = document.getElementById('usuario').value
    const senha = document.getElementById('senha').value
        
        //const mensagem_erro = document.getElementById('erro').value
        //const modal = new bootstrap.Modal(document.getElementById('welcomeModal'))
        const usuario_cadastrado = 'cliente1'
        const senha_cadastrada = '567891'
    
    if (usuario === usuario_cadastrado && senha ===senha_cadastrada) {
        //modal.show()
        setTimeout(function(){window.location.href="login.html"},3000)
    } else {
        window.alert("oi")
    }

})

    
    
    //(usuario == usuario_cadastrado && senha == senha_cadastrada)
    //{
       // modal.show()
      //  setTimeout(function(){window.location.href = 'HTML/indexpage2.html'},3000)
    //}


    
    
        //mensagem_erro.textContent = 'Usuário ou senha incorretos.'
        //mensagem_erro.style.display = 'block'