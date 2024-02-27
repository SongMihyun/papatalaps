
//section01 (intro_slide_wrap) - banner slide
const intro_slide_wrap=$('.intro_slide_wrap');
bannerSlide(intro_slide_wrap,3000,1000);

//section01 (intro_slide_wrap) - banner slide
const sec4_event_slide_wrap=$('.sec4_event_slide_wrap');
bannerSlide(sec4_event_slide_wrap,3000,1000);

//section08 (patnersBanner_slide_wrap) - banner slide
const patnersBanner_slide_wrap=$('.patnersBanner_slide_wrap');
bannerSlide(patnersBanner_slide_wrap,3000,500);



//<공통 형식> 자동 슬라이드 (i,3000(인터벌시간),500(슬라이드시간))
//(슬라이드)i(.bannerWrap) >div.banner >div.slideContainer >div.bannerArea >ul.area >li>a>img(p)
//(컨트롤버튼) i(.bannerWrap) >div.slide_control >div.slideBtn >button.prev,.next
//()

function bannerSlide(i,j,k){
    const slideBanner=i.find('.banner_Ul');
    const slideBannerList=slideBanner.children('li');
    let slideBannerList_first=slideBannerList.eq('0');
    let slideWidth=slideBannerList_first.width();
    /* const listCount=slideBannerList.length;
    idx=slideBanner.find('li:first').attr('title'); */


    i.on('mouseover',stop);
    i.on('mouseout',function(){
    bannerSlide(i,j,k)
});

 
    //셋인터벌(오토슬라이드)
    let setIntervalId;
    setIntervalId=setInterval(() =>{
        next();
    },j)


    //컨트롤 버튼 클릭이벤트
    const prevBtn=i.find('.prev');
    const nextBtn=i.find('.next');
    const slideDot=i.find('slideDot');
    
    nextBtn.click(function(){
        next();        
    })
    
    prevBtn.click(function(){
        prev();
    })


    
 

    //다음화면으로 넘기기
    function next(){
        slideBanner.stop().animate({left:-(slideWidth)},k,function(){
            slideBanner.find('li:first').insertAfter(slideBanner.find('li:last'));
            slideBanner.css({left: 0})
            let slideBannerEq=slideBanner.find('li:first').attr('role');
            let slideDot='.slideDot>.dot_'+slideBannerEq;
            i.find(slideDot).siblings().removeClass('on');
            i.find(slideDot).addClass('on');
        })
    }
    //이전으로 돌아가기
    function prev(){
        slideBanner.find('li:last').insertBefore(slideBanner.find('li:first'));
        slideBanner.css({left: -(slideWidth)})
        slideBanner.stop().animate({left:(0)},k,function(){
            let slideBannerEq=slideBanner.find('li:first').attr('role');
            let slideDot='.slideDot>.dot_'+slideBannerEq;
            i.find(slideDot).siblings().removeClass('on');
            i.find(slideDot).addClass('on');
        })
    }
    function stop(){
        clearInterval(setIntervalId);
    }

    
}


//section03 클릭이벤트
const lmLeft_List_li=$('.lmLeft_List>li');
lmLeft_List_li.click(function(){
    lmLeft_List_li.removeClass('ck');
    $(this).addClass('ck');
});


