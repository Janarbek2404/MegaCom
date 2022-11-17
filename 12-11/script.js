const btn_primary = document.querySelector('#btn-primary')
const btn_success = document.querySelector('#btn-success')
const btn_danger = document.querySelector('#btn-danger')
const container=document.querySelector('#notification-container');

// console.log(btn_primary);
// console.log(btn_success);
// console.log(btn_danger);
const showNotification = (options) =>{

    container.innerHTML= `<div class="alert ${options.className}" role="alert" >${options.text}</div>`
    container.classList.add('notification-container');
}

btn_primary.addEventListener('click',()=>{
    showNotification({
        text: 'вы успешно зарегестрировались',
        className: 'alert-primary'
    })
})

btn_success.addEventListener('click',()=>{
    showNotification({
        text: 'вы успешно оформили заказ',
        className: 'alert-success'
    })
})

btn_danger.addEventListener('click',()=>{
    showNotification({
        text: 'Ошипка сервера. Статус 500',
        className: 'alert-danger'
        
    })
})

container.addEventListener('click',(obj)=>{
    if(event.target=== container){
        container.className=""
        container.innerHTML=""
    }
    
})