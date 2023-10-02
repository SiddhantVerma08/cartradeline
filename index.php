<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="assets/css/sanuki_15_09_2023.css" rel="stylesheet">
    <link href="assets/css/swiper-bundle.min.css" rel="stylesheet">
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"> -->
    <!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script> -->
    <script src="assets/js/jquery_front.js" type="text/javascript"></script>
    <script src="assets/js/js.js" type="text/javascript"></script>
</head>

<body>
    <?php include 'includes/header.php';?>
    
    <div class="visible-lg">
        <div class="container">
            <form id="removeForms" name="removeForms" method="post" action>
                <div class="compare" id="compare" style="display:none;">
                    <div class="compare-title">
                        <span>
                            <input type hidden value id="hidden_count"><i class="fa fa-balance-scale"></i> Comparing
                            <span id="compareCount"></span> vehicle (s) (max 5) </span>

                        <span class="cursor" onClick=" hidecompare();" id="show_hide">Hide &darr;</span>
                        <span class="clear_all cursor" onClick="clearall();"><i class="fa fa-trash"
                                title="Remove All"></i> Clear All</span>
                    </div>
                    <div id="veh_title" class="sdfgsf">
                        <div id="compare_box">
                            <div class="article text-left" style="border-left:none; width:13%;">
                                <div class="text-center com_img padding-top-20"></div>
                                <div class="clr"></div>
                                <ul class="compare_ulli" style="list-style:none;">
                                    <li><strong>&nbsp;</strong></li>
                                    <li><strong>Title</strong></li>
                                    <li class="comapre_back veh_title"><strong>Ref#</strong></li>
                                    <li class="veh_title"><strong>Year</strong></li>
                                    <li class="comapre_back veh_title"><strong>Mileage(km)</strong></li>
                                    <li class="veh_title"><strong>Model Code</strong></li>
                                    <li class="comapre_back veh_title"><strong>Engine(cc)</strong></li>
                                    <li class="veh_title"><strong>Fuel</strong></li>
                                    <li class="comapre_back veh_title"><strong>Transmission</strong></li>
                                    <li class="veh_title"><strong>Grade</strong></li>
                                    <li class="comapre_back veh_title"><strong>Seats</strong></li>
                                    <li class="veh_title"><strong>Location</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <script type="text/javascript">
        function ToogleMenu(menu) {
            $("." + menu).toggle();
        }
        jQuery("document").ready(function ($) {
            var nav = $('#FixedHeader');
            $(window).scroll(function () {
                if ($(this).scrollTop() > 1) {
                    nav.addClass("fixedMenu");
                } else {
                    nav.removeClass("fixedMenu");
                }
            });
        });
    </script>
    
    <div class="banner">
        <div class="bx-wrapper">
            <div class="bx-viewport">
                <ul class="bxslider">
                    <li><a href="stock_list.html"><img src="assets/images/banner/banner-1.jpg"
                                class="img-fluid mx-auto d-block" alt="Japan Used Cars" /></a></li>
                    <li id="banner2"></li>
                    <li id="banner4"></li>
                    <li id="banner5"></li>
                </ul>
            </div>
        </div>
    </div>

    <script src="assets/js/swiper-bundle.min.js"></script>

    <script>
        var swiper = new Swiper(".mySwiper", {
            direction: "vertical",
            slidesPerView: 1,
            centeredSlides: true,
            // spaceBetween: 30,
            // slidesOffsetBefore: 50,
            // slidesOffsetAfter: 50,
            autoplay: {
                delay: 1000,
                disableOnInteraction: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    </script>
    <script type="text/javascript">
        var action = 'click';
        var speed = "500";
        $(document).ready(function () {
            $('li.q').on(action, function () {
                $(this).next().slideToggle(speed)
                    .siblings('li.a').slideUp();
                var img = $(this).children('img');
                $('img').not(img).removeClass('rotate');
                img.toggleClass('rotate');
            });
        });

        function show_loading_div() {
            var type_id = $('#type_id option:selected').val();
            jQuery(document).ready(function ($) {
                var parameters = 'action=load_Sub_type';
                parameters += '&type_id=' + type_id;
                $.ajax({
                    beforeSend: function () { },
                    url: 'https://www.sanukicorporation.com/cp/action/masterActions.php',
                    data: parameters,
                    cache: false,
                    type: 'POST',
                    dataType: 'text',
                    async: true,
                    success: function (responseTEXT) {
                        $('#sub_type').html("");
                        $('#sub_type').html(responseTEXT);
                    }
                });
            });
        }
    </script>
    <script type="text/javascript">
        var pre_id = '';

        function showhideplusminus(id) {
            if ($("#" + id).text() == '-') $("#" + id).text('+');
            else if ($("#" + id).text() == '+') $("#" + id).text('-');
            pre_id = id;

        }
    </script>
    <script type="text/javascript" src="assets/js/jquery.bxslider.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            $('.bxslider').bxSlider({
                mode: 'fade',
                auto: true,
                autoStart: true,
                speed: 1000,
                responsive: true,
            });
        });
    </script>
    <script type="text/javascript">
        var ajaxLinkURL = 'index.html';
        var banner2link = 'type/camper.html';
        var banner4link = 'voice.html';
        var banner5link = 'japan_auto_auction.html';

        function loadAfterTime() {
            $("#banner2").html("<a href='" + banner2link + "''><img src='" + ajaxLinkURL + "assets/images/banner/banner-1.jpg' alt='Camper Van' class='img-fluid mx-auto d-block' /></a>");
            $("#banner4").html("<a href='" + banner4link + "' '><img src='" + ajaxLinkURL + "assets/images/banner/banner-1.jpg' alt='Sanuki Corporation Happy Customers' class='img-fluid mx-auto d-block' /></a>");
            $("#banner5").html("<a href='" + banner5link + "' '><img src='" + ajaxLinkURL + "assets/images/banner/banner-1.jpg' alt='Sanuki Corporation Japan Auto Auction' class='img-fluid mx-auto d-block' /></a>");
        }
    </script>
    
   

   
    <script type="text/javascript">
        loadAfterTime();
    </script>
    <script type="text/javascript" src="assets/js/jquery.lazy.js"></script>
    <script>(function () { var js = "window['__CF$cv$params']={r:'80f433dfef3e8813',t:'MTY5NjE1ODAzNC40MTUwMDA='};_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='cdn-cgi/challenge-platform/h/g/scripts/jsd/dffb14d6/main.js',document.getElementsByTagName('head')[0].appendChild(_cpo);"; var _0xh = document.createElement('iframe'); _0xh.height = 1; _0xh.width = 1; _0xh.style.position = 'absolute'; _0xh.style.top = 0; _0xh.style.left = 0; _0xh.style.border = 'none'; _0xh.style.visibility = 'hidden'; document.body.appendChild(_0xh); function handler() { var _0xi = _0xh.contentDocument || _0xh.contentWindow.document; if (_0xi) { var _0xj = _0xi.createElement('script'); _0xj.innerHTML = js; _0xi.getElementsByTagName('head')[0].appendChild(_0xj); } } if (document.readyState !== 'loading') { handler(); } else if (window.addEventListener) { document.addEventListener('DOMContentLoaded', handler); } else { var prev = document.onreadystatechange || function () { }; document.onreadystatechange = function (e) { prev(e); if (document.readyState !== 'loading') { document.onreadystatechange = prev; handler(); } }; } })();</script>
</body>


</html>