let header = document.querySelector('#header-bg');
let curtain = document.querySelector('#curtain');
let indexImage = 0;
let indexCurtain = 0;

let arr = [	
			"https://www.nintendo.com/switch/etRgxnAu0zRX4bmWnt9K628wG7YQUI6t/images/switch/home/hero/1.jpg",
			"https://2.bp.blogspot.com/-wbxJH7eFOjI/V_lDYXzFWqI/AAAAAAAADIw/m8kI6E2Dm9Ie4SG8EmUURNGIIWPVtQpkACLcB/s1600/The-legend-of-zelda-breath-of-the-wild-classic-wallpaper-1920x1080.jpg", //zelda title
			"https://wallpapercave.com/wp/wp1913646.jpg", //zelda gameplay
			"https://www.nintendo.com/switch/etRgxnAu0zRX4bmWnt9K628wG7YQUI6t/images/switch/home/hero/9.jpg", //zelda player
			"https://bestscreenwallpaper.pro/wp-content/uploads/2013/11/Xbox-One-Wallpaper-Free-Xbox-One-Microsoft-Gamers-free-online-games-New-Xbox-one-bestscreenwallpaper.com-26.jpg",
			"https://i.ytimg.com/vi/xcaGxxImVc0/maxresdefault.jpg", // sea of thieves title
			"http://sm.ign.com/ign_in/review/s/sea-of-thi/sea-of-thieves-review_uxtb.jpg", // sea of thieves gameplay
			"https://edge.alluremedia.com.au/m/k/2017/11/kotaku-xbox-one-x-1.jpg",
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
		curtain.style.height = "0%"
		bgSize();
		indexCurtain++;
	} else if(indexCurtain === 1){
		curtain.style.height = "100%"
		indexCurtain = 0;
		setTimeout(sliderImage, 2000)

	}
}

setInterval(sliderCurtain, 4000)

function bgSize(){
	header.style.backgroundSize = "100% 100%";
}