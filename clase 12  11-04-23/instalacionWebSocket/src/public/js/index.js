const socket = io();

let user;
let chatBox = document.getElementById('chatBox');


// Swal.fire({
//     title: 'Hola Coder',
//     text: 'Alerta básica',
//     icon:'success'
// })


Swal.fire({
    title: 'Identificate',
    input: 'text',
    text: 'Ingresa el usuario para identificarte en el chat',
    inputValidator: (value) =>{
        return !value && 'Necesitar escribir el nombre de usuario'
    },
    allowOutsideClick: false
}).then (result =>{
    user = result.value
    console.log(user)
})

chatBox.addEventListener('keyup',e =>{
    if(e.key === 'Enter'){
        if(chatBox.value.trim().length >0){
            socket.emit('message',{user:user,message:chatBox.value});
            chatBox.value = '';
        }
    }
});

socket.on('messageLogs', data =>{
    let log = document.getElementById('messageLogs');
    let messages ='';
    data.forEach(message =>{
        messages = messages + `${message.user} dice: ${message.message}`
    });
    log.innerHTML = messages
})
