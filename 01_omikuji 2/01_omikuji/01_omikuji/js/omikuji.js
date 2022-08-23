"use strict";

window.addEventListener("DOMContentLoaded",
  function() {
  　　$("header").textillate({
    loop: false, // ループのオンオフ
    minDisplayTime: 2000, // テキストが置き換えられるまでの表示時間
    initialDelay: 2000, // 遅延時間
    autoStart: true, // アニメーションを自動的にスタート
    in: { // フェードインのエフェクトの詳細設定
    effect: "fadeInLeftBig", // エフェクトの名前(animate.css参照)
    delayScale: 1.5, // 遅延時間の指数
    delay: 50, // 文字ごとの遅延時間
    sync: false, // trueはアニメーションをすべての文字に同時に適用
    shuffle: true // trueは文字を順番にではなく、ランダムに
    }
    });
    // おみくじボタン(id="btn1") ボヤァと表示させる
    $(function(){
    ScrollReveal().reveal("#btn1", { duration: 9000 });
    });
    let popMesseage = "いらっしゃい！おみくじ引いてって!";
    window.alert(popMesseage)
},false

);
let soundEndflag = "0";
const btn1 = document.getElementById ("btn1");
const omikujiText = document.getElementById("omikujiText");
btn1.addEventListener    ("click",
    function(){
      if( soundEndflag === "1"){
        soundControl("end","");
      }
      //let n = Math.floor(Math.random() * 3);
      //switch (n) {
      //  case 0:
      //  btn1.textContent = "Very Happy!!";
      //  btn1.style.color = "#FF0000";
      //  btn1.style.fontSize ="2em";
      //  break;
      //  case 1:
      //  btn1.textContent = "Happy!!";
      //  btn1.style.color = "#FFF001";
      //  btn1.style.fontSize ="2em";
      //  break;
      //  case 2:
      //  btn1.textContent = "UnHappy!!";
      //  btn1.style.color = "#261e1c";
      //  btn1.style.fontSize ="2em";
      // breakl
      //}/omikuji_sound1.mp3

      let resultSound = ["sound/omikuji_sound1.mp3","sound/omikuji_sound2.mp3","sound/omikuji_sound3.mp3","sound/omikuji_sound4.mp3","sound/omikuji_sound5.mp3","sound/omikuji_sound3.mp3"];
      let resultText = ["大吉","吉","中吉","小吉","末吉","凶"];
      let resultColor = ["#ff0000","#c71585","#ff1493","#ff69b4","#ff8c00","#1e90ff"];
      let resultFontSize=["90px","80px","70px","60px","50px","40px"];
      let n = Math.floor(Math.random() *resultText.length);
      omikujiText.textContent = resultText[n];
      omikujiText.style.color = resultColor[n];
      omikujiText.style.fontSize = resultFontSize[n];
      w_sound = resultSound[n];
      soundControl("start", w_sound);
      soundEndflag = "1";
      $(document).snowfall("clear");
      // jQueryl
      setTimeout(
        function() {
      $(document).ready(function(){
        $(document).snowfall({
          maxSpeed :resultMaxSpeed[n], // 最大速度
          minSpeed : 1, // 最小速度
          maxSize : resultMaxSize[n], // 最大サイズ
          minSize : 1, // 最小サイズ
          image : resultImage[n]
        });
      });
    },
      "200"
      );
  },false

);
let w_sound
let music
function soundControl(status, w_sound){
  if(status === "start") {
    music = new Audio(w_sound);
    music.currentTime = 0;
    music.play();
  } else if(status === "end"){
    music.pause();
    music.currentTime= 0;
  }
}