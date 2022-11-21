const forms= document.forms
// console.log(forms);
const form1 = forms[0];
const form2 = forms[1];
// console.log(form1.emailName);

let arr = []
let arr2 = []
form1.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(form1.emailName.value);

})


form2.addEventListener('submit',(e)=>{
    e.preventDefault();
    // console.log(form2.loginName.value);
    const login = form2.loginName.value
    const password = form2.passwordName.value
    arr.push("login: "+ login)
    arr.push("password: "+ password)

    console.log(arr);
})