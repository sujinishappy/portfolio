$(document).ready(function () {
    const loader = $('.loader');
    const html = $('html');

    function hideLoader() {
        loader.addClass('hidden2');
        html.removeClass('no-scroll');
    }

    // Check if it's a page reload
    if (performance.navigation.type === 1) {
        // Page is loaded for the first time
        html.addClass('no-scroll');
        setTimeout(hideLoader, 3800);
    } else {
        // Page is reloaded
        hideLoader();
    }
});

const $cursor = document.querySelector('.pointer');
document.addEventListener('mousemove', function (e) {
    $cursor.style.left = e.clientX + 'px';
    $cursor.style.top = e.clientY + 'px';
});

// Scroll to the top of the page when the button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const circle = document.getElementById('circle');
    const moveFactor = 0.08; // 조절 가능한 이동 계수

    document.addEventListener('mousemove', (e) => {
    const x = e.clientX * moveFactor;
    const y = e.clientY * moveFactor;
    circle.style.transform = `translate(${x}px, ${y}px)`;
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

const first = document.querySelectorAll(".first");
const sections = document.querySelectorAll("section");

const firstTop = sections[0].offsetTop;
const secondTop = sections[1].offsetTop;
const thirdTop = sections[2].offsetTop;
const fourthTop = sections[3].offsetTop;

first[0].onclick = function(event) {
  event.preventDefault(); // 기본 이벤트 막기
  window.scroll({ top: firstTop, behavior: "smooth" });
};

first[1].onclick = function(event) {
  event.preventDefault(); // 기본 이벤트 막기
  window.scroll({ top: secondTop, behavior: "smooth" });
};

first[2].onclick = function(event) {
  event.preventDefault(); // 기본 이벤트 막기
  window.scroll({ top: thirdTop, behavior: "smooth" });
};
first[3].onclick = function(event) {
    event.preventDefault(); // 기본 이벤트 막기
    window.scroll({ top: fourthTop, behavior: "smooth" });
  };



setTimeout(() => {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                document.querySelector('.n').classList.add('cnt2');
                document.querySelector('.n2').classList.add('cnt2');
            } else {
                document.querySelector('.n').classList.remove('cnt2');
                document.querySelector('.n2').classList.remove('cnt2');
            }
        });
    });

    let div = document.querySelector('.n');
    observer.observe(div);
}, 1000);

setTimeout(() => {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                document.querySelector('.m').classList.add('cnt');
            } else {
                document.querySelector('.m').classList.remove('cnt');
            }
        });
    });

    let div = document.querySelector('.m');
    observer.observe(div);
}, 2000);

setTimeout(() => {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                document.querySelector('.s').classList.add('cnt2');
                document.querySelector('.s2').classList.add('cnt2');
            } else {
                document.querySelector('.s').classList.remove('cnt2');
                document.querySelector('.s2').classList.remove('cnt2');
            }
        });
    });

    let div = document.querySelector('.s');
    observer.observe(div);
}, 2000);

setTimeout(() => {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                document.querySelector('.j').classList.add('cnt');
            } else {
                document.querySelector('.j').classList.remove('cnt');
            }
        });
    });

    let div = document.querySelector('.j');
    observer.observe(div);
}, 2000);

setTimeout(() => {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                document.querySelector('.i').classList.add('cnt2');
                document.querySelector('.i2').classList.add('cnt2');
                document.querySelector('.i3').classList.add('cnt2');
            } else {
                document.querySelector('.i').classList.remove('cnt2');
                document.querySelector('.i2').classList.remove('cnt2');
                document.querySelector('.i3').classList.remove('cnt2');
            }
        });
    });

    let div = document.querySelector('.i');
    observer.observe(div);
}, 2000);

setTimeout(() => {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                document.querySelector('.p').classList.add('cnt');
            } else {
                document.querySelector('.p').classList.remove('cnt');
            }
        });
    });

    let div = document.querySelector('.p');
    observer.observe(div);
}, 2000);

setTimeout(() => {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                document.querySelector('.o').classList.add('cnt2');
                document.querySelector('.o2').classList.add('cnt2');
            } else {
                document.querySelector('.o').classList.remove('cnt2');
                document.querySelector('.o2').classList.remove('cnt2');
            }
        });
    });

    let div = document.querySelector('.o');
    observer.observe(div);
}, 2000);

setTimeout(() => {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                document.querySelector('.f').classList.add('fan');
                document.querySelector('.s0').classList.add('s0an');
                document.querySelector('.t').classList.add('tan');
                document.querySelector('.f1').classList.add('f1an');
                document.querySelector('.s1').classList.add('s1an');
                document.querySelector('.t1').classList.add('t1an');
                document.querySelector('.f2').classList.add('f2an');
                document.querySelector('.s02').classList.add('s02an');

            } else {
                document.querySelector('.f').classList.remove('fan');
                document.querySelector('.s0').classList.remove('s0an');
                document.querySelector('.t').classList.remove('tan');
                document.querySelector('.f1').classList.remove('f1an');
                document.querySelector('.s1').classList.remove('s1an');
                document.querySelector('.t1').classList.remove('t1an');
                document.querySelector('.f2').classList.remove('f2an');
                document.querySelector('.s02').classList.remove('s02an');
            }
        });
    });

    let div = document.querySelector('#wrap4 .s02');
    observer.observe(div);
}, 2000);


function addLastanClass() {
    const laContents = document.querySelectorAll('.la_content');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const lspElement = entry
                    .target
                    .querySelector('.lsp');
                setTimeout(() => {
                    lspElement
                        .classList
                        .add('lastan');
                }, 800);
            }
        });
    });

    laContents.forEach(laContent => {
        observer.observe(laContent);
    });
}

// DOM 로드 후 실행
document.addEventListener('DOMContentLoaded', () => {
    addLastanClass();
});

let last = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            document.querySelectorAll('.la_content .lsp').forEach(lspElement => {
                lspElement.classList.remove('lastan');
            });
        
        }
    });
});

let olast = document.querySelector('#wrap4 .titled');
last.observe(olast);

setTimeout(() => {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                document.querySelector('.left1 .content').classList.add('slideInDown');
                document.querySelector('.left1 .content2').classList.add('slideInDown');
                document.querySelector('.o2').classList.add('cnt');
            } else {
                document.querySelector('.left1 .content').classList.remove('slideInDown');
                document.querySelector('.left1 .content2').classList.remove('slideInDown');
                document.querySelector('.o2').classList.remove('cnt');
            }
        });
    });

    let div = document.querySelector('.left1');
    observer.observe(div);
}, 2000);
setTimeout(() => {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                document.querySelector('.left2 .content').classList.add('slideInDown');
                document.querySelector('.left2 .content2').classList.add('slideInDown');
                document.querySelector('.o2').classList.add('cnt');
            } else {
                document.querySelector('.left2 .content').classList.remove('slideInDown');
                document.querySelector('.left2 .content2').classList.remove('slideInDown');
                document.querySelector('.o2').classList.remove('cnt');
            }
        });
    });

    let div = document.querySelector('.left2');
    observer.observe(div);
}, 2000);
setTimeout(() => {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                document.querySelector('.left3 .content').classList.add('slideInDown');
                document.querySelector('.left3 .content2').classList.add('slideInDown');
                document.querySelector('.o2').classList.add('cnt');
            } else {
                document.querySelector('.left3 .content').classList.remove('slideInDown');
                document.querySelector('.left3 .content2').classList.remove('slideInDown');
                document.querySelector('.o2').classList.remove('cnt');
            }
        });
    });

    let div = document.querySelector('.left3');
    observer.observe(div);
}, 2000);
setTimeout(() => {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                document.querySelector('.left4 .content').classList.add('slideInDown');
                document.querySelector('.left4 .content2').classList.add('slideInDown');
                document.querySelector('.o2').classList.add('cnt');
            } else {
                document.querySelector('.left4 .content').classList.remove('slideInDown');
                document.querySelector('.left4 .content2').classList.remove('slideInDown');
                document.querySelector('.o2').classList.remove('cnt');
            }
        });
    });

    let div = document.querySelector('.left4');
    observer.observe(div);
}, 2000);
setTimeout(() => {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                document.querySelector('.left5 .content').classList.add('slideInDown');
                document.querySelector('.left5 .content2').classList.add('slideInDown');
                document.querySelector('.o2').classList.add('cnt');
            } else {
                document.querySelector('.left5 .content').classList.remove('slideInDown');
                document.querySelector('.left5 .content2').classList.remove('slideInDown');
                document.querySelector('.o2').classList.remove('cnt');
            }
        });
    });

    let div = document.querySelector('.left5');
    observer.observe(div);
}, 2000);
