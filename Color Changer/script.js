const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')

buttons.forEach(function(button){
    button.addEventListener('click',function(events){
        // console.log(e);
        
        
        console.log(events.target);
        if(events.target.id==='grey'){
            body.style.backgroundColor=events.target.id
        }
        if(events.target.id==='white'){
            body.style.backgroundColor=events.target.id
        }
        if(events.target.id==='blue'){
            body.style.backgroundColor=events.target.id
        }
        if(events.target.id==='yellow'){
            body.style.backgroundColor=events.target.id
        }
        
    })
})