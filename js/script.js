 //스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

//2
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	        });    
                  }); 

//햄버거메뉴
$(function(){
    $('.menuOpen .open').on('click', function(){
        $('.menuOpen .menuWrap').addClass('on');
    });
    $('.menuOpen .menuWrap .close').on('click', function(){
        $('.menuOpen .menuWrap').removeClass('on');
    })
});

//상단으로 부드럽게
$(function(){
    $('.topBtn').on('click', function(){
       var top = $('body').offset().top;  //offset()함수는 대상자의 top, left 등 위치값을 반환한다.
       $('html, body').animate({scrollTop : (top)}, 400);
    })
 })
 
//fixheader
var scrollValue = 0;
scrollValue = $(document).scrollTop(); 

fixHeader();

$(window).on('scroll resize', function(){
 scrollValue = $(document).scrollTop(); 
 fixHeader();
});

function fixHeader(){
  if(scrollValue > 150) {
       $('header').addClass('on');
   } else {
      $('header').removeClass('on');}
 }

// about 슬라이더
$(function() {
    $(".slide").slick({ 
         arrows: true, //화살표 사용안함
         dots: true, //닷츠
         autoplay: false, //자동재생
         fade: true, //페이드인 효과        
         autoplaySpeed: 5000, //재생시간
         pauseOnHover:false, //마우스 오버시 슬라이드 멈춤 해제
        pauseOnFocus:false //포커스시 슬라이드 멈춤 해제
     });
  }); 

     //스플리팅
     $(function(){
        Splitting();
   });

//scrolla
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	        });    
                  }); 

// slick - clones
$(function() {
    $('.clone_slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        nextArrow:$('.next'),
        prevArrow:$('.prev'),
        pauseOnHover:false, //마우스 오버시 슬라이드 멈춤 해제
        pauseOnFocus:false, //포커스시 슬라이드 멈춤 해제
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
});

//5.length구하기
$(function(){
    $('svg').find('path').each(function(i, path){
        var length = path.getTotalLength();
        //alert(length); //총길이 구하기
    });
});

//ncs상세
var scrollValue = 0;
scrollValue = $(document).scrollTop();

$(window).on('scroll resize', function(){
    scrollValue = $(document).scrollTop();
    if(scrollValue > 1080){
        $('.bred').addClass('on');
    } else {
        $('.bred').removeClass('on');
    }
});







