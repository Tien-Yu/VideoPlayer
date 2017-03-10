
var currVideo = document.getElementById("mainPlayer");

function changeVideo(vid){
	var prepareVideo = document.getElementById(vid)
	currVideo.src = prepareVideo.src;
	// reset the speed
	$("#speedRange").val(1);
	$("#speedShow").val(1);
	currVideo.playbackRate = 1;
	
	currVideo.play();
}

$("#speedRange").change(function(){
	$("#speedShow").val($(this).val());
	currVideo.playbackRate = $(this).val();
})


$(".prepareList").on({
	mouseenter: function(){
		$(this).css("cursor", "pointer");
	},
	mouseleave: function(){
	$(this).css("cursor", "auto");	
	}
})

$("#mainPlayer").on({
	mouseenter: function(){ //mouseenter, mouseleave一起用代表hover
		$(this).css("cursor", "pointer");
	},
	mouseleave: function(){
		$(this).css("cursor", "auto");
	},
	click: function(){ //點選主要影片改變主要影片播放狀態
		if(!currVideo.paused){
			this.pause();
		}
		else{
			this.play();
		}	
	}
	
});



