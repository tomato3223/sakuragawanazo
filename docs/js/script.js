// ロード画面
$(function () {
  var webStorage = function () {
    if (sessionStorage.getItem('access')) {
      // 2回目以降アクセス時
      $(".load").addClass('dispNone'); // 非表示
    } else {
      // 初回アクセス時
      sessionStorage.setItem('access', 'true'); // sessionStorageにデータを保存
      $(".progress__bar__now").css("animation","progress .6s forwards");
      setTimeout(function () {
        // ロゴをゆっくり表示
        $(".load__logo").fadeIn(900);
      }, 300);
      setTimeout(function () {
        // ロード画面を非表示にする
        $(".load").fadeOut(1200);
      }, 3000);
    }
  }
  webStorage();
});

// ハンバーガーメニュー
$(function() {
    $(".hamburger").click(function() {
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(".hamburgerMenu").addClass("active")
            $(".mask").addClass("active")
        } else {
            $(".hamburgerMenu").removeClass("active");
            $(".mask").removeClass("active")
        }
    });
    // aタグを押したときもメニューを閉じる
    $("a").click(function() {
      $(".hamburger").removeClass("active");
      $(".hamburgerMenu").removeClass("active");
      $(".mask").removeClass("active")
    });
});

// スムーズスクロール
$(function () {
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    var speed = 500;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});

// アドレスバーの高さを除いたサイズを取得
$(function () {
  $('.hero').height($(window).innerHeight());
});
$(window).resize(function () {
  $('.hero').height($(window).innerHeight());
});

// スクロール
$(window).on('load resize', function() {
  //ウィンドウの高さを取得する
  var targetY = $(window).innerHeight();
  //スクロールをクリックするとウィンドウの高さ分、下にスクロールする
  $('.hero__scroll').on('click', function() {
    $("html, body").stop().animate({
      scrollTop: targetY
    }, 500, 'swing');
    return false;
  });
});
