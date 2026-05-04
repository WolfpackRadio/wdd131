let para= document.querySelector('#intro');
para.style.backgroundColor = 'red';

let paraEM = document.querySelector('#intro em');
paraEM.style.backgroundColor = 'teal'
paraEM.textContent = 'USS Voyager Starship'

let starship_img = document.createElement('img');
starship_img.setAttribute('src', 'https://bit.ly/3RfG4sY');
let img_div = document.querySelector('#starship');
img_div.appendChild(starship_img);
starship_img.classList.add('rounded')

