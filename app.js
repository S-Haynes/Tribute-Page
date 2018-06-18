window.addEventListener('load', function(){

window.sr = ScrollReveal({
	mobile: true,
});
let header = document.querySelector('#header-bg');
let curtain = document.querySelector('#curtain');
let psp = document.querySelector("#psp_vid_content");
let phero = document.querySelectorAll(".p-hero");
let nhero = document.querySelectorAll(".n-hero");
let n_first_image = document.querySelectorAll('.n-first-image');
let n_second_image = document.querySelectorAll('.n-second-image');
let indexSlide = 0;
let indexHero = 0;
let indexImage = 0;
let indexCurtain = 0;
let $section1 = $('#nintendo-img2');
let $section2 = $('#ps4_console_img');


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

function backgroundSlide() {
  if(indexCurtain === 0){
   header.style.zIndex = "1";
   curtain.style.zIndex = "2";
   setTimeout(function(){
     curtain.style.height = "980px";
   }, 1500)
      setTimeout(function(){
       header.style.transform = "translateY(-100%)"
   }, 2000)
    
   indexCurtain++;
  } else if(indexCurtain === 1){
    sliderImage();

   setTimeout(function(){
     header.style.transform = "translateY(0%)"
     curtain.style.transform = "translateY(100%)";
    }, 1000)
    setTimeout(function(){
    bgSize();
    curtain.style.zIndex = "-1";
    header.style.zIndex = "2";
    }, 1200)
 
   setTimeout(function(){
    curtain.style.transform = "translateY(0%)";
    curtain.style.height = "0px";
   
   }, 2000)
    indexCurtain = 0;
  }
  
}

backgroundSlide();
setInterval(backgroundSlide, 3000);


function sliderImage(){
	if(indexImage === arr.length){
		indexImage = 0;
	}
		header.style.background = "url('" + arr[indexImage] + "')"
		header.style.backgroundSize = "150% 150%";
		header.style.backgroundPosition = "center";
		header.style.backgroundRepeat = "no-repeat";	
   
		indexImage++;
}


function bgSize(){
	header.style.backgroundSize = "100% 100%";

}

function imageSwitch(){
	if(indexHero === phero.length){
		indexHero = 0;
	} 
		
		for(var i = 0; i < phero.length; i++){
		$(".p-hero:eq(" + i + ")").hide();
		$(".n-hero:eq(" + i + ")").hide();
	}

		$(".p-hero:eq('" + indexHero + "')").fadeIn(1000);
		$(".n-hero:eq('" + indexHero + "')").fadeIn(1000);
		return indexHero++		
}

imageSwitch();

setInterval(imageSwitch, 7000);

function imageSlide(){

	if(indexSlide === 0){
		removeFirstImageWidth()

	setTimeout(function(){
		addFirstImageWidth();
		hideFirstImage();
	}, 3000)
	}

	if(indexSlide === 1){
	removeSecondImageWidth();
	setTimeout(function(){
		hideSecondImage();
		addSecondImageWidth()
		return indexSlide = 0;
	}, 3000)	
	}

	indexSlide++
}

function hideFirstImage(){
	for(var i = 0; i < n_first_image.length; i++){
		n_first_image[i].style.zIndex = "-1";
		n_second_image[i].style.zIndex = "1";
	}
}

function hideSecondImage(){
		for(var i = 0; i < n_first_image.length; i++){
		n_first_image[i].style.zIndex = "1";
		n_second_image[i].style.zIndex = "-1";
	}
}

function removeFirstImageWidth(){
		for(var i = 0; i < n_first_image.length; i++){
		n_first_image[i].style.width = "0%";
	}
}

function addFirstImageWidth(){
	for(var i = 0; i < n_first_image.length; i++){
		n_first_image[i].style.width = "100%";
	}
}

function removeSecondImageWidth(){
		for(var i = 0; i < n_first_image.length; i++){
		n_second_image[i].style.width = "0%";
	}
}

function addSecondImageWidth(){
	for(var i = 0; i < n_first_image.length; i++){
		n_second_image[i].style.width = "100%";
	}
}

  $(document).bind('scroll', function(ev) {
        let scrollOffset = $(document).scrollTop();
        let containerOffset = $section1.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
        	setTimeout(imageSlide, 3000);
            setInterval(imageSlide, 8000);
             $(document).off('scroll');
        }
  });

sr.reveal('#nintendo-img2', {
	duration: 2000,
	origin: 'right',
	distance: '300px',
});

sr.reveal('#nintendo-img3', {
	duration: 2000,
	origin: 'right',
	distance: '300px',
});
sr.reveal('#nintendo-img4', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
});

sr.reveal('#nintendo-img5', {
	duration: 2000,
	
	origin: 'left',
	distance: '300px',
});

sr.reveal('#nintendo-img6', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
});

sr.reveal('#babyBlue', {
	duration: 2000,
});

sr.reveal('#play_font', {
	duration: 1000,
	delay: 500,
});

sr.reveal('.span-font', {
	duration: 2000,
	delay: 1000,
});

sr.reveal('#png_container_1', {
	duration: 6000,
	origin: 'right',
	distance:'500px',

	
});

sr.reveal('#zeldaAndLink_1', {
	duration: 2000,
	origin: 'left',
	distance:'300px',
	
});
sr.reveal('#stay_1', {
	duration: 2000,
	origin: 'left',
	distance:'300px',

	
});

sr.reveal('#go_1', {
	duration: 2000,
	origin: 'left',
	distance:'300px',
	
	
});

sr.reveal('#stay_2', {
	duration: 2000,
	origin: 'right',
	distance:'300px',

});

sr.reveal('#go_2', {
	duration: 2000,
	origin: 'right',
	distance:'300px',
	
});

sr.reveal('.images_footer_1', {
	duration: 2000,
	origin: 'right',
	distance:'300px',
	
});

sr.reveal('.images_footer_2', {
	duration: 2000,
	origin: 'left',
	distance:'300px',

});

sr.reveal('#nintendo-controller img', {
	duration: 2000,
	origin: 'left',
	distance:'300px',
	delay: 500,		
});


sr.reveal('#logo_img', {
	duration: 1000,
	origin: 'left',
	distance:'300px',	
	delay: 500,	
});

sr.reveal('#playstation_img1', {
	duration: 2000,
	origin: 'left',
	distance:'300px',

});

sr.reveal('#playstation_img2', {
	duration: 2000,
	origin: 'right',
	distance:'300px',

});

sr.reveal('#playstation_img3', {
	duration: 2000,
	origin: 'right',
	distance:'300px',

});

sr.reveal('#playstation_img4', {
	duration: 2000,
	origin: 'right',
	distance:'300px',
	
});

sr.reveal('.video_text1', {
	duration: 2000,	
});

sr.reveal('.video_text2', {
	duration: 2000,
	origin: 'right',
	distance:'300px',
	
});

sr.reveal('#ps4_console_img', {
	duration: 2000,
	origin: 'left',
	distance:'300px',
	
});

sr.reveal('#psp_video_image', {
	duration: 3000,
	origin: 'top',
	distance:'1000px',
	
});

sr.reveal('#psp_container', {
	duration: 3000,
	origin: 'top',
	distance:'1000px',
});

sr.reveal('#gaming-made-easy', {
	duration: 2000,
	origin: 'bottom',
	distance:'300px',
	
});

sr.reveal('#scrolling-bg', {
	duration: 2000,
	origin: 'top',
	distance:'300px',
	
});

sr.reveal('#choice-playstation', {
	duration: 2000,
	origin: 'left',
	distance:'300px',
	
});

sr.reveal('#choice-nintendo', {
	duration: 2000,
	origin: 'right',
	distance:'300px',
	
});

})

