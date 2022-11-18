const elements=document.querySelectorAll('.square')

const classes=['square-red','square-yellow','square-green', 'square-gray', 'square-black'];

const changeBackgrount=(e)=>{
    for (let i = 0; i < classes.length; i++) {
        const result = e.target.className.includes(classes[i])
        if(result){
            e.target.className = '';
            if(i === classes.length){
                e.target.classList.add('square', classes[0]);
            }else {
                e.target.classList.add('square', classes[i+1]);
            }
            break;
        } else{
            e.target.classList.add(classes[0])
        };
    }
}
elements.forEach((item)=>{
    item.addEventListener('click',changeBackgrount)
})