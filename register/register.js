/**
 * Created by leiuno on 14/09/2017.
 */
var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

var headerLogin = $('.header-login')
headerLogin.addEventListener('click',function(e){
    $('.modal-login').style.display = 'block'
    //$$('.modal').forEach(function(element){
        //element.style.display = "block"
    //})
    e.preventDefault()
})

var close = $$('.close')
/*close[0].addEventListener('click',function(e){
    $$('.modal').forEach(function(element){
        element.style.display = "none"
    })
    e.preventDefault()
})*/
close[1].addEventListener('click',function(e){
    $$('.modal').forEach(function(element){
        element.style.display = "none"
    })
    e.preventDefault()
})

$('.flip-modal').addEventListener('click',function(e){
    if(e.target.classList.contains('.login')){
        $('.flip-modal').classListremove('.register')
        $('.flip-modal').classListadd('.login')
    }
    if(e.target.classList.contains('.register')){
        $('.flip-modal').classListremove('.login')
        $('.flip-modal').classListadd('.register')
    }
})
