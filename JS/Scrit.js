//Modo oscuro//
const btn = document.querySelector('#boton');
btn.addEventListener('click', ()=>{
    document.body.classList.toggle('darktheme')
    if(document.body.classList.contains('darktheme')){
        console.log("MODO OSCURO");
        btn.textContent='🌙';
    }
    else{
        console.log("MODO CLARO");
        btn.textContent='☀️';
    }
});
//const//
