const btn = document.querySelector('#btn')
// const btnBack = document.querySelector('body')
const showNotification = () =>{

    const notification = '<div class="alert alert-primary" role="alert" >A simple primary alert—check it out!</div>'

    const cont=document.querySelector('#notifications-container');
    cont.innerHTML=notification;
    cont.classList.add('notifications-container');
}

btn.addEventListener('click', showNotification)
// btnBack.addEventListener('click', )