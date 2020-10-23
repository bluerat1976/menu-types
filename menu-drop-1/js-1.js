document.getElementById('nav').onmouseover = function(event) {

    let target = event.target;
    if(target.className == 'menu-item') {
        let a = target.getElementsByClassName('submenu');
        closeMenu();

        for(let i = 0; i < a.length; i++) {
             a[i].style.display = 'block';  
        }
         
    }
};

document.onmouseover = function(event) {
    let target = event.target;
    console.log(event.target);
    if(target.className != 'menu-item' && target.className != 'submenu') {
        closeMenu();
    }
};

function closeMenu() {
    let menu = document.getElementById('nav');
    let s = document.getElementsByClassName('submenu');
    for(let i = 0; i < s.length; i++) {
        s[i].style.display = 'none';
    }
}


