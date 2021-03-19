$('#header .open').addClass('on')
$('#header .open').on('click', function(){
    $(this).next().css({
        display:'block'
    }).animate({right:0}, 300)
    $(this).removeClass('on')
    $(this).next().next().addClass('on')
})
$('#header .close').on('click', function(){
    $(this).prev().animate({left:'-170px'}, 300, function(){
        $(this).css({ display:'none' })
    })
    $(this).removeClass('on')
    $(this).prev().prev().addClass('on')
    $('.depth1 > li').find('.depth2').slideUp(100)
})













var deviceSize = 1024;    

function scrollOX(status) {
    $('html').css({
        overflowY:status
    })
    var htmlWidth = $('html').width()
    return htmlWidth
}
var swh = scrollOX('hidden')
var sws = scrollOX('scroll')
var swd = swh - sws
if (swd>0) {
    deviceSize = deviceSize - swd
}

var elTxtBoxP2 = document.querySelectorAll('.txtbox .p2')
var pArr = []
for (var i=0; i<elTxtBoxP2.length; i++) {
    pArr[i] = elTxtBoxP2[i].textContent
}
var ww
var wh
function init(){
    ww = $(window).width()
    wh = $(window).height()
    if (ww>deviceSize && !$('html').hasClass('pc') ) {
        $('html').addClass('pc').removeClass('mobile')
        $('.depth1 > li').removeClass('on')
        $('html').scrollTop(0)
        for (var i=0; i<elTxtBoxP2.length; i++) {
            elTxtBoxP2[i].textContent = pArr[i]
        }
    } else if ( ww<=deviceSize && !$('html').hasClass('mobile') ) {
        $('html').addClass('mobile').removeClass('pc')
        $('#header .nav').removeClass('on')
        $('#header .open').removeClass('on')
        $('html').scrollTop(0)
        for (var i=0; i<elTxtBoxP2.length; i++) {
            var text = pArr[i].substring(0, 20)
            elTxtBoxP2[i].textContent = text+'...'
        }
    }
}

init()

$(window).on('resize', function(){
    init()
})

// 여기까지 resize 이벤트 발생시 스크롤바 유무에 따른 상태제어 프로그램


$('.depth1 > li').on('click', function(e){
    if ( $('html').hasClass('mobile') ) {
        e.preventDefault()
        $(this).toggleClass('on').siblings().removeClass('on')
    }
})
$('.depth2 > li').on('click', function(e){
    e.stopPropagation()
})


$('.depth1 > li').hover(
    function(){
        if ( $('html').hasClass('pc') ) {
            $(this).addClass('on')
        }
    },
    function(){
        if ( $('html').hasClass('pc') ) {
            $(this).removeClass('on')
        }
    }
)
