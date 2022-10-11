//click to top 
const onTop = $('.top-arrow')

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    onTop.style.display = "block";
  } else {
    onTop.style.display = "none";
  }

}
onTop.onclick = function() {
    document.documentElement.scrollTop = 0
    console.log('ok')
}
