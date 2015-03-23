window.setInterval(function(){
  if(document.getElementsByClassName("button continue-playing")[0] != null){
	document.getElementsByClassName("button continue-playing")[0].click();
  }
  if (document.getElementsByClassName("postplay-still-container uitracking-state-visible")[0] != null) {
    var continuePlaying = document.getElementsByClassName("postplay-still-container uitracking-state-visible")[0];
	if(continuePlaying.textContent == "Click to play next episode"){
		var uitrack = continuePlaying.getAttribute("data-uitrack").split(",");
		var movieid = uitrack[0];
		window.open(("http://www.netflix.com/WiPlayer?movieid=" + movieid),"_self");
	}
  }
}, 25);