function run(gid){
	setTimeout(function(){
		document.querySelector('.loading').innerHTML="Stitching together"
	},27000)

	var inter = setInterval(function(){
		var xhr = new XMLHttpRequest();
		xhr.addEventListener("readystatechange", function () {
			if (this.readyState === 4 && xhr.status == 200) {
				window.location.href = "/" + gid
				clearInterval(inter)
			}
		});

		xhr.open("GET", "/results/" + gid+'.mp4');

		xhr.send();
	},5000);
}
