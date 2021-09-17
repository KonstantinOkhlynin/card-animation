const slides = document.querySelectorAll('.slide')

slides.forEach((item) => {
item.addEventListener('mouseover', () => {
    item.classList.add('active')
})

item.addEventListener('mouseout', () => {
    item.classList.remove('active')
})
})

