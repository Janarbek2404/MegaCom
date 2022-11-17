//         DZ
// const showMessage =(message)=>{
//     alert(message);
// }
// setTimeout(showMessage, 4000, "Hello after 4 seconds");
// setTimeout(showMessage, 8000, "Hello after 8 seconds");

//                             DOM

const menu = document.getElementById('menu');
const links = document.getElementsByTagName('a');
const elems = document.getElementsByClassName('logo')
const elem = document.querySelector('.logo')
const firstLink = document.querySelector('nav a')
const allLinks = document.querySelectorAll('a[href="#"]')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
const btn5 = document.querySelector('#btn5')
const btn6 = document.querySelector('#btn6')
const btn7 = document.querySelector('#btn7')

// console.log(menu);
// console.log(links);
// console.log(elems);
// console.log(elem);
// console.log(firstLink);
// console.log(allLinks);
const showNotification =()=>{
    alert('Hello')
}
const showLog =()=>{
    console.log('work');
}

// btn2.onclick = showNotification;
// btn3.ondblclick = showNotification;
// btn4.oncontextmenu = showNotification;
// btn5.onmouseenter = showLog;
// btn5.onmouseleave = showNotification;
// btn5.onmouseleave = showNotification;
// btn6.onmousemove = showLog;


btn2.addEventListener('click', showNotification);
btn2.addEventListener('click', showLog);

