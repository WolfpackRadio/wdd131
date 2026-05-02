let choose = document.querySelector('select');
let logo = document.querySelector('img');

choose.addEventListener('change', changeTheme);                    

function changeTheme() {
    let current = choose.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = 'black';
        console.log("dark mode go")
        document.body.style.color = 'white';
        logo.setAttribute('src', "byui-logo-dark.png");
    }else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        logo.setAttribute('src', "byui-logo-blue.webp");
    }
}