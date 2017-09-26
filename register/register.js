/**
 * Created by leiuno on 14/09/2017.
 */
var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

$('.header-login').addEventListener('click',function(e){
    e.stopPropagation()
    $('.flip-modal').style.display = 'block'
    e.preventDefault()
})

$('.flip-modal').addEventListener('click',function(e){
    e.stopPropagation()
    if(e.target.classList.contains('login')){
        $('.flip-modal').classList.remove('register')
        $('.flip-modal').classList.add('login')
    }
    if(e.target.classList.contains('register')){
        $('.flip-modal').classList.add('register')
        $('.flip-modal').classList.remove('login')
    }
    if(e.target.classList.contains('close')){
        $('.flip-modal').style.display = 'none'
    }
    e.preventDefault()
})
document.addEventListener('click',function(){
    $('.flip-modal').style.display = 'none'
})
