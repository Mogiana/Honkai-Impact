const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const navItem = $$('.nav-list-item');
const cate = $$('.cate')
const news = $$('.home-news-content')

if (cate.length) {
    for(let i = 0 ; i < cate.length ; i++){
        cate[i].onclick = function() {
            $('.cate.active').classList.remove('active')
            $('.home-news-content.active').classList.remove('active')
            this.classList.add('active')
            news[i].classList.add('active')
        } 
    }
}

// 

let clickModal = $('.pv-video-btn')
let clickWeaponModal = $('.weapon-video-btn')
let video = $('.video-modal-content video ')
let closeVideo = $('.video-close')
let modal = $('.modal-overlay')
clickModal.onclick = function() {
    modal.style.display = 'block'
    video.src = 'https://webstatic.hoyoverse.com/upload/contentweb/2022/07/01/1269db4526f0936597f6f1c4afa6b20e_3961549695787257129.mp4'
    video.play()

    console.log('ok')
    
}
clickWeaponModal.onclick = function() {
    modal.style.display = 'block'
    video.src = 'https://webstatic.hoyoverse.com/upload/contentweb/2022/09/14/4d360ad468b4166795cee44e5fc7d8b0_4213504998567146559.mp4'
    video.play()

    console.log('ok')
    
}

closeVideo.onclick = function() {
    modal.style.display = 'none'
    video.pause()
    
    
}
// ....
let includes = document.getElementsByTagName('include');
for(var i=0; i<includes.length; i++){
    let include = includes[i];
    load_file(includes[i].attributes.src.value, function(text){
        include.insertAdjacentHTML('afterend', text);
        include.remove();
    });
}
function load_file(filename, callback) {
    fetch(filename).then(response => response.text()).then(text => callback(text));
}