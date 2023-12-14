const $cursor = document.querySelector('.pointer');
document.addEventListener('mousemove', function (e) {
    $cursor.style.left = e.clientX + 'px';
    $cursor.style.top = e.clientY + 'px';
});

var myHeader = document.getElementById("header");
var isHeaderVisible = true;
var previousScrollY = window.scrollY;

myHeader.onmouseover = function() {
    this.classList.add("over");
};

myHeader.onmouseout = function() {
    this.classList.remove("over");
};

var didScroll;
// 스크롤시에 사용자가 스크롤했다는 것을 알림 
$(window).scroll(function(event){
    didScroll = true;
});

// hasScrolled()를 실행하고 didScroll 상태를 재설정
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        // $('header').removeClass('nav-down');
        $('header').addClass('nav-up');
    } else if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up');
            // $('header').addClass('nav-down');
        
    }
    
    lastScrollTop = st;
}
let currentNum = 0;
        let imgInit = function(){
            if(currentNum !=0){
                document.getElementById("img" + currentNum).classList.remove("hide");
            }
        }
        setInterval(function(){
            imgInit();
            if(currentNum == 4){
                currentNum = 1;
            } else {
                currentNum++;
            }
            console.log(currentNum);
            document.getElementById("img" + currentNum).classList.add("hide");
            let clear = setInterval(function(){
                document.getElementById("imgSet").prepend(document.getElementById("img"+currentNum));
                clearInterval(clear);
            }, 1000)
        }, 5000);



