const toggle = document.querySelectorAll('.toggle');

toggle.forEach(item => {
    const click = item.querySelector('.toggle__header');
    const panel = item.querySelector('.toggle__text')
    click.addEventListener('click', () => {
        toggle.forEach(element => {
            if (element !== item) {
                element.classList.remove("show")
            }
        });          
        item.classList.toggle("show")        
    })
});