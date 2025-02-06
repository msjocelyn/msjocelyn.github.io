// $('.gotop').on('click', function(event){
// 	event.preventDefault();
// 	$('body,html').animate({
// 		scrollTop: 0 ,
// 		}, 600
// 	);
// });

window.onscroll = function(e) {
    var height = document.scrollingElement.scrollHeight - document.scrollingElement.clientHeight;
    progressBar.style.width = (document.scrollingElement.scrollTop / height) * 100 + "%";
}
