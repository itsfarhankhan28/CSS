const toggleBtn = document.getElementsByClassName('mobile-nav-icon')[0]
const navLinks = document.getElementsByClassName('nav-list')[0]

toggleBtn.addEventListener('click',()=>{
    navLinks.classList.toggle('active')
})