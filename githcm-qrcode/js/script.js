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
  var joined = [name,bday,dateTime,sex,address,email,phone,temp];
  document.getElementById("content").value = joined;
}
