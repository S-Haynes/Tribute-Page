let header = document.querySelector('#header-bg');
let curtain = document.querySelector('#curtain');
let psp = document.querySelector("#psp_vid_content");
let phero = document.querySelectorAll(".p-hero");
let nhero = document.querySelectorAll(".n-hero");
let indexHero = 0;
let indexImage = 0;
let indexCurtain = 0;

let arr = [	
			"https://www.nintendo.com/switch/etRgxnAu0zRX4bmWnt9K628wG7YQUI6t/images/switch/home/hero/1.jpg",
			"https://2.bp.blogspot.com/-wbxJH7eFOjI/V_lDYXzFWqI/AAAAAAAADIw/m8kI6E2Dm9Ie4SG8EmUURNGIIWPVtQpkACLcB/s1600/The-legend-of-zelda-breath-of-the-wild-classic-wallpaper-1920x1080.jpg", //zelda title
			"https://wallpapercave.com/wp/wp1913646.jpg", //zelda gameplay
			"https://www.nintendo.com/switch/etRgxnAu0zRX4bmWnt9K628wG7YQUI6t/images/switch/home/hero/9.jpg", //zelda player
			"https://cnet3.cbsistatic.com/img/fws2Vj3CvMw6YrKXvPTrJ46TBZc=/1600x900/2016/10/20/6492fde4-41cb-483c-9015-024e43a42759/playstation-4-pro-ps4-008.jpg",
			"https://i.ytimg.com/vi/xcaGxxImVc0/maxresdefault.jpg", // sea of thieves title
			"http://sm.ign.com/ign_in/review/s/sea-of-thi/sea-of-thieves-review_uxtb.jpg", // sea of thieves gameplay
			"https://c.wallhere.com/photos/21/4d/video_games_DualShock_PlayStation_4_controllers_500px_DualShock_4-1297453.jpg!d",
]



function sliderImage(){
	if(indexImage === arr.length){
		indexImage = 0;
	}
		header.style.background = "url(" + arr[indexImage] + ")"
		header.style.backgroundSize = "150% 150%";
		header.style.backgroundPosition = "center";
		header.style.backgroundRepeat = "no-repeat";	
		indexImage++;
}

sliderImage();

function sliderCurtain(){
	if(indexCurtain === 0){
		curtain.style.height = "0%";
		curtain.style.background = "steelblue";
		bgSize();
		indexCurtain++;
	} else if(indexCurtain === 1){
		curtain.style.height = "100%";
		curtain.style.background = "rgb(218,69,87)";
		indexCurtain = 0;
		setTimeout(sliderImage, 2000);

	}
}


setTimeout(sliderCurtain, 1000)

setInterval(sliderCurtain, 3500)

function bgSize(){
	header.style.backgroundSize = "100% 100%";
}


function imageSwitch(){
	if(indexHero === phero.length){
		indexHero = 0;
	} 
		
		for(var i = 0; i < phero.length; i++){
		// phero[i].classList.add('hidden');
		// nhero[i].classList.add('hidden');
		$(".p-hero:eq(" + i + ")").hide();
		$(".n-hero:eq(" + i + ")").hide();
	}

		$(".p-hero:eq(" + indexHero + ")").fadeIn(1000);
		$(".n-hero:eq(" + indexHero + ")").fadeIn(1000);
		// phero[indexHero].classList.remove('hidden');
		// nhero[indexHero].classList.remove('hidden');
		return indexHero++
		
		
}

imageSwitch();


setInterval(imageSwitch, 7000);