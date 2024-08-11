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
        // 幕を閉じて開く
        $(".maku__left, .maku__right").addClass('move');
      }, 1000);
      setTimeout(function () {
        // プログレスバーを非表示にする
        $(".progress").addClass('dispNone');
      }, 2200);
      setTimeout(function () {
        // ロード画面を非表示にする
        $(".load").addClass('dispNone');
      }, 4000);
      // トップページの要素を非表示に
      $(".hero__msg--1").addClass('opac0');
      $(".hero__msg--2").addClass('opac0');
      $(".hero__scroll").addClass('opac0');
      // $(".top > .header").addClass('opac0');
      // トップページの要素を順番に表示
      setTimeout(function () {
        $(".hero__msg--1").removeClass('opac0');
      }, 4000);
      setTimeout(function () {
        $(".hero__msg--2").removeClass('opac0');
      }, 5500);
      setTimeout(function () {
        $(".hero__scroll").removeClass('opac0');
        // $(".top > .header").removeClass('opac0');
      }, 7000);
    }
  }
  webStorage();
});

// ハンバーガーメニュー
$(function() {
    $(".hamburger").click(function() {
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(".hamburgerMenu").addClass("active");
        } else {
            $(".hamburgerMenu").removeClass("active");
        }
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
