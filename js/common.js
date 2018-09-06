var menu = document.getElementById('nav-menu');
var btnburger = document.getElementById('btn-burger');
function opennav() {
    menu.style.zIndex = '12';
   menu.style.opacity = '1';
}
function closenav() {
    menu.style.opacity = '0';
    menu.style.zIndex = '-1';

}