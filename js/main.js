let usuario = document.getElementById('username');
let senha = document.getElementById('password');

let btnValidar = document.getElementById('validar');

let CaracterEspecial = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
let Numeros = /([0-9])/;
let Alfabeto = /([a-zA-Z])/;

// Var Icons
let btnIconEyeOpen = document.getElementById('iconEyeOpen');
let btnIconEyeClosed = document.getElementById('iconEyeClosed');

btnIconEyeOpen.addEventListener('click', function(){
    if(senha.getAttribute('type') == 'password') {
        btnIconEyeOpen.src = ('img/eyeclosed.svg');
        senha.setAttribute('type','text');
        senha.setAttribute('placeholder',' ');
        senha.setAttribute('style',' color: white; ');
        
    }else{
        btnIconEyeOpen.src =('img/eyeopen.svg');
        senha.setAttribute('type', 'password');
        senha.setAttribute('placeholder' , 'Type your password');
    }
});


validar.addEventListener('click', function(){

    if (usuario.value == "") {
        toastr["warning"]("Username field not filled!", "Warn");
        document.getElementById('img-username').src = ('../img/emoji-serious-colorido.svg');
        usuario.focus();
    }else if (usuario.value != "admin") {
        toastr["error"]("User not found", "Warn");
        document.getElementById('img-username').src = ('../img/emoji-furios-colorido.svg');
        usuario.focus();
    }else if (usuario.value == "admin" && senha.value == ""){
        document.getElementById('img-username').src = ('../img/emoji-smile-colorido.svg');
        toastr["warning"]("Password field not filled!", "Warn");
        document.getElementById('img-password').src = ('../img/emoji-serious-colorido.svg');
        senha.focus();
    }else if (senha.value.length < 4){ 
        toastr["warning"]("Oops, password must be longer than 4 characters.", "Warn");
        document.getElementById('img-password').src = ('../img/emoji-serious-colorido.svg');
        senha.focus();
    }else if (senha.value != "admin"){
        toastr["error"]("Incorrect password", "Warn");    
        document.getElementById('img-password').src = ('../img/emoji-furios-colorido.svg');
        senha.focus();
    }
    else if(senha.value == "admin"){
        toastr['success']("successfully logged in" , "Success");
        // document.getElementById('img-sucess').src = ('../img/emoji-smile-colorido.svg');
        document.getElementById('img-username').src = ('../img/emoji-smile-colorido.svg');
        document.getElementById('img-password').src = ('../img/emoji-smile-colorido.svg');
    }
});

// Balão de alerta jQuery

toastr.options = {
    "closeButton": false,
    "debug": true,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-left",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

