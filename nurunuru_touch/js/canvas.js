// canvasの初期設定
const canvas = $('#canvas')[0];
const ctx = canvas.getContext('2d');

// canvasのサイズ設定
// 横幅は画面全体、縦幅は画面全体の85%
// 画面サイズに応じて幅が変化する
$( '#canvas' ).get( 0 ).width = $( window ).width();
$( '#canvas' ).get( 0 ).height = $( window ).height()*0.98;

// パスの開始（初期化）
ctx.beginPath();

// 背景を白に設定
// この処理がないと背景が透明になってしまう
ctx.fillStyle = 'rgb(255, 255, 255)';
ctx.fillRect(0, 0, canvas.width, canvas.height);


// canvas内部の設計について
// １．最初の要素は「why me?、今やっている、時間を忘れてできる、
//     好きな言葉、やりたくない、将来やりたい」
// ２．１の流れを関数に落とし込む
// ３．クリックするとテキストボックスが出現、文字をうっていく

var img = new Image();
img.src = 'http://www.w3.org/Icons/SVG/svg-logo-v.svg';
img.onload = function() {
    var c = document.getElementById('c');
    var ctx = c.getContext('2d');
    ctx.drawImage(img, 0, 0, 200, 200);
}
