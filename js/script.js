function getData(){
  var name = document.getElementById("fname").value;
  var bday = document.getElementById("datepicker").value;
  var sex = document.getElementById("inputGroupSelect01").value;
  var address = document.getElementById("faddress").value;
  var email = document.getElementById("femail").value;
  var phone = document.getElementById("fphone").value;
  var temp = "36.0"
  var joined = [name,bday,sex,address,email,phone,temp];
  alert(joined.join(", "));
}



function generateQR() {
  var name = document.getElementById("fname").value;
  var bday = document.getElementById("datepicker").value;
  var sex = document.getElementById("inputGroupSelect01").value;
  var address = document.getElementById("faddress").value;
  var email = document.getElementById("femail").value;
  var phone = document.getElementById("fphone").value;
  var temp = "36.0"
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;
  var joined = name+";"+bday+";"+sex+";"+address+";"+phone+";"+email+";"+temp+";0;0;0;0;"+dateTime+";1";
  // var encrypted = CryptoJS.AES.encrypt(joined, "password");
  // document.getElementById("content").value = encrypted;
  document.getElementById("qr-name").innerHTML  = name;
  var revjoined = document.getElementById("content").value = reverseString(joined);
  var QR_CODE = new QRCode("qrcoder", {
    logo: "files/qr-logo.png",
    logoWidth: 65,
    logoHeight: 65,
    width: 360,
    height: 360,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});
QR_CODE.makeCode(revjoined);
}

function clearCode(){
  var QR_CODE = new QRCode("qrcoder", {
    logo: "files/qr-logo.png",
    width: 360,
    height: 360,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});QR_CODE.clear();
}
function clearQR(){
  var QR_CODE = new QRCode("qrcoder", {
    width: 520,
    height: 520,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
  QR_CODE.clear();
}

function takeshot() {
    let div =document.getElementById('photo');
    html2canvas(div).then(
        function (canvas) {
            document.getElementById('saved-output').appendChild(canvas);
        })
}

function reverseString(str) {
    var splitString = str.split("");

    var reverseArray = splitString.reverse();

    var joinArray = reverseArray.join("");

    return joinArray;
}

var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

var step = 0;
var colorIndices = [0,1,2,3];
var gradientSpeed = 0.002;
function updateGradient()
{
  if ( $===undefined ) return;
      var c0_0 = colors[colorIndices[0]];
      var c0_1 = colors[colorIndices[1]];
      var c1_0 = colors[colorIndices[2]];
      var c1_1 = colors[colorIndices[3]];

      var istep = 1 - step;
      var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
      var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
      var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
      var color1 = "rgb("+r1+","+g1+","+b1+")";

      var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
      var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
      var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
      var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];

    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

  }
}

setInterval(updateGradient,10);

// Set the date we're counting down to
var countDownDate = new Date("Jul 24, 2021 0:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = days + " Days " + hours + " Hours "
  + minutes + " Minutes and " + seconds + " Seconds.";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "SIte's up";
  }
}, 1000);
