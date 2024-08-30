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
            $("body").css({ height: "100%", overflow: "hidden" })
        } else {
            $(".hamburgerMenu").removeClass("active");
            $(".mask").removeClass("active")
            $("body").css({ height: "", overflow: "" })
        }
    });
    // aタグを押したときもメニューを閉じる
    $("a").click(function() {
      $(".hamburger").removeClass("active");
      $(".hamburgerMenu").removeClass("active");
      $(".mask").removeClass("active")
      $("body").css({ height: "", overflow: "" })
    });
});

// ヒント画像ポップアップ表示
$(function(){
  $(".btn__hint").click(function(){
    // 背景が動かないように固定
    $("body").css({ height: "100%", overflow: "hidden" })
    // 親要素によって表示するヒント画像を変更
    var parent = $(this).parent().attr("class")
    if(parent == "practice1"){
      $(".hint2").hide()
      $(".hint3").hide()
    }else if(parent == "practice2"){
      $(".hint1").hide()
      $(".hint3").hide()
    }else if(parent == "practice3"){
      $(".hint1").hide()
      $(".hint2").hide()
    }
    $(this).addClass("active")
    $(".modal").addClass("active")
    $(".overlay").addClass("active")
    $(".hamburger").hide()
    $(".top_button").hide()
    $(".answer1").hide()
    $(".answer2").hide()
    $(".answer3").hide()
  })
  $(".modal-close").click(function(){
    // 背景固定を解除
    $("body").css({ height: "", overflow: "" })

    $(".overlay").removeClass("active")
    $(".modal").removeClass("active")
    $(".btn__hint").removeClass("active")
    $(".hamburger").show()
    $(".top_button").show()
    $(".hint1").show()
    $(".hint2").show()
    $(".hint3").show()
    $(".answer1").show()
    $(".answer2").show()
    $(".answer3").show()
  })
})

// 答え画像ポップアップ表示
$(function(){
  $(".btn__answer").click(function(){
    // 背景が動かないように固定
    $("body").css({ height: "100%", overflow: "hidden" })
   // 親要素によって表示する答え画像を変更
    var parent = $(this).parent().attr("class")
    if(parent == "practice1"){
      $(".answer2").hide()
      $(".answer3").hide()
    }else if(parent == "practice2"){
      $(".answer1").hide()
      $(".answer3").hide()
    }else if(parent == "practice3"){
      $(".answer1").hide()
      $(".answer2").hide()
    }
    $(this).addClass("active")
    $(".modal").addClass("active")
    $(".overlay").addClass("active")
    $(".hamburger").hide()
    $(".top_button").hide()
    $(".hint1").hide()
    $(".hint2").hide()
    $(".hint3").hide()
  })
  $(".modal-close").click(function(){
    // 背景固定を解除
    $("body").css({ height: "", overflow: "" })
    
    $(".overlay").removeClass("active")
    $(".modal").removeClass("active")
    $(".btn__answer").removeClass("active")
    $(".hamburger").show()
    $(".top_button").show()
    $(".hint1").show()
    $(".hint2").show()
    $(".hint3").show()
    $(".answer1").show()
    $(".answer2").show()
    $(".answer3").show()
  })
})

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

// もし端末がPCならPC用の画像に差し替え
$(function () {
  var width = $(window).width();
  if( width > 768 ){
    $('.image').each(function(){
      $('#sp-only').remove();
      $(this).attr("src", $(this).attr("src").replace("_sp","_pc"));
    })
  }
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
