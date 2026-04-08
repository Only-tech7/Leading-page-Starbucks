const mobileBtn = document.querySelector('.btn-mobile');
const navLinks = document.getElementById('nav-links');
const icon = document.querySelector(' .btn-mobile i'); 
mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    icon.classList.toggle('fa-times');
    icon.classList.toggle('fa-bars');
})

window.addEventListener('scroll', () => {
const header = document.getElementById('header');

//com esse comando estou dizendo que se (if) o meu scroll for maior que 0, ou seja, se eu tiver rolado a página, ele vai adicionar a classe 'scrolled' no meu header, caso contrário (else), ele vai remover a classe 'scrolled' do meu header.
if(window.scrollY > 0) {
   header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
} else {
    header.style.boxshadow = 'none';
}
})