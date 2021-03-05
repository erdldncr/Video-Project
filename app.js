

const btn=document.querySelector('.switch-btn')
const video=document.querySelector('.video-container')
btn.addEventListener('click',()=>{
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide')
        video.pause()
    }
    else{
        btn.classList.remove('slide')
        video.play()
    }
})
//preLoader
window.addEventListener('load',function(){
    
    setTimeout(function(){
     document.querySelector('.preloader').classList.add('hide-preloader')
 },3000)
 })
 