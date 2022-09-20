function lang_mob() {
    document.getElementById("ul-mob").classList.add('list-mob');
}
function lang() {
    document.getElementById("ul").classList.add('list');
}
const check = document.querySelector('.main');
let list = document.getElementById('ul');
let list_mob = document.getElementById('ul-mob');

let menu__box = document.querySelector('.menu__box');

check.addEventListener('click', event => {
    menu__toggle.checked = false;
    document.getElementById("ul").classList.remove('list');
});
list.addEventListener('click', event => {
    document.getElementById("ul").classList.remove('list');
});
menu__box.addEventListener('click', event => {
    document.getElementById("ul-mob").classList.remove('list-mob');
});
list_mob.addEventListener('click', event => {
    document.getElementById("ul-mob").classList.remove('list-mob');
});