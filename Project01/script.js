const button = document.querySelectorAll('Button');
const body = document.querySelector('body');

button.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.className == 'Blue'){
            body.style.backgroundColor = e.target.className;
        }
        if(e.target.className == 'green'){
            body.style.backgroundColor = e.target.className;
        }
        if(e.target.className == 'red'){
            body.style.backgroundColor = e.target.className;
        }
        if(e.target.className == 'yellow'){
            body.style.backgroundColor = e.target.className;
        }
    })
})
