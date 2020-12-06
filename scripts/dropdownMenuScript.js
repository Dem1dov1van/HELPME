(function(){
    // let toggle = document.querySelector('header__toggle')
    let toggle = document.getElementById('toggle-menu')
    toggle.addEventListener('click', function(event){
        event.preventDefault
    // let dropdown = event.target.parentNode
    let drop = document.getElementById('navigation')
    drop.classList.toggle('is-open')
    let button = document.getElementById("main-button")
    button.classList.toggle('is-visible')
    // dropdown.classList.toggle('is-open')
    })
}())