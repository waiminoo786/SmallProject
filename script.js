let btnn = document.querySelector('.btnn');

let div1 = document.querySelector('.div1');
let div2 = document.querySelector('.div2');
let div3 = document.querySelector('.div3');
let div4 = document.querySelector('.div4');
let div5 = document.querySelector('.div5');

btnn.addEventListener('click', ()=> {
    if ( div1.classList.contains('forallcar')){
        btnn.innerHTML = 'Go';
        div1.classList.remove('forallcar');
        div2.classList.remove('forallcar');
        div3.classList.remove('forallcar');
        div4.classList.remove('forallcar');
        div5.classList.remove('forallcar');

    }else{
        btnn.innerHTML = 'Back';
        div1.classList.add('forallcar');
        div2.classList.add('forallcar');
        div3.classList.add('forallcar');
        div4.classList.add('forallcar');
        div5.classList.add('forallcar');
    }
})