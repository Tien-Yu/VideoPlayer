
var currVideo = document.getElementById("mainPlayer");
var trackNames = document.getElementById("playList");
var lastTrack = 3;
var currentTrack = 3;
var random = false; //play mode

window.onload = function(){
	currVideo.play();
}

$(".prepareList").click(function(){
	var prepareVideo = document.getElementById(this.id);
	document.getElementById(this.id+"o").selected=true;
	currVideo.src = prepareVideo.src;
	
	// reset the speed
	$("#speedRange").val(1);
	$("#speedShow").val(1);
	currVideo.playbackRate = 1;
	
	currVideo.play();
	// update currentTrack
	currentTrack = trackNames.selectedIndex;
	//update lastTrack
	lastTrack = currentTrack;
});

// Speed bar
$("#speedRange").change(function(){
	$("#speedShow").val($(this).val());
	currVideo.playbackRate = $(this).val();
});

// Prepare list
$(".prepareList").on({
	mouseenter: function(){
		$(this).css("cursor", "pointer");
	},
	mouseleave: function(){
	$(this).css("cursor", "auto");	
	}
});
// Player
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
//


currVideo.addEventListener('ended', function() { //Callback
	if(random==false){
		if(lastTrack==trackNames.length-1){
			currentTrack = 0;
		}
		else{
			currentTrack++;
		}
		// 修改路徑
		currVideo.src = "./videos/" + trackNames[currentTrack].value;
		currVideo.play();
		// reset the speed
		$("#speedRange").val(1);
		$("#speedShow").val(1);
		currVideo.playbackRate = 1;
		//update lastTrack
		lastTrack = currentTrack;
	}
	else if(random==true){
		var timee = new Date(); //用來亂數
		trackNames.selectedIndex = timee.getTime() % trackNames.length;
		currentTrack = trackNames.selectedIndex;
		
		// not allow same track
		while(lastTrack==currentTrack){
			timee = new Date();
			trackNames.selectedIndex = timee.getTime() % trackNames.length;
			currentTrack = trackNames.selectedIndex;
		}
		// 修改路徑
		this.src = "./videos/" + trackNames[currentTrack].value;
		this.play();
		// reset the speed
		$("#speedRange").val(1);
		$("#speedShow").val(1);
		this.playbackRate = 1;
		//update lastTrack
		lastTrack = currentTrack;
	}
	
})


// Shuffle play
$("#shuffle").on({
	click: function(){
		if(random==false){
			$(this).attr("src", "./pics/shuffle_c.png");
			random = true;
		}
		else if(random==true){
			$(this).attr("src", "./pics/shuffle_.png");
			random = false;
		}
		
	},
	mouseenter: function(){ //mouseenter, mouseleave一起用代表hover
		$(this).css("cursor", "pointer");
	},
	mouseleave: function(){
		$(this).css("cursor", "auto");
	}
});


