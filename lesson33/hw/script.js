let button = document.querySelector('#btn');
  button.style.width = '50px';
  button.style.height = '15px';
button.onclick = function(){
  let string = document.querySelector('#str').value;
  button.textContent = string;

}

document.querySelector('.title').textContent = 'Billie Eillish';
let image = document.querySelector('img');
image.src="./img/d7328c881b6a9453be9010e9d4915ae9.jpg";
image.alt="Billie Eillish";
let link = document.querySelector('.link');
link.href = 'https://music.apple.com/ru/artist/billie-eilish/1065981054?l=uk';

let songs = document.querySelectorAll('.songs-el');
songs[0].textContent = 'BIRDS OF THE FEATHER';