var tahminHak = 5;
document.getElementById("tahminHak").innerText = tahminHak;
var seviye = 1;
document.getElementById("seviye").innerText = seviye;
var tahminSeviye = 10;
var tahminNumber = "";

var infoMessage = document.getElementById("infoMessage");
var count = 30;
var time = document.getElementById("timeLeft");

var gerisayim = setInterval(function () {
  count--;
  time.textContent = count;

  if (count === 0) {
    clearInterval(gerisayim);
    time.textContent = "Süre doldu!";
    //document.getElementById("btn").style="display:none"
    document.getElementById("cardBody").style="display:none"
    infoMessage.innerText="Game Over"
  }
}, 1000);

var randomNumber = Math.floor(Math.random() * tahminSeviye + 1);
console.log(randomNumber);

function CheckNumber() {
  tahminNumber = document.getElementById("input").value;
  if (tahminNumber == randomNumber && tahminHak > 0) {
    infoMessage.innerText = "Tebrikler! Girilen Sayı Doğru";
    tahminHak = 5;
    document.getElementById("tahminHak").innerText = tahminHak;
    seviye++;
    document.getElementById("seviye").innerText = seviye;
    randomNumber = Math.floor(Math.random() * (tahminSeviye * seviye) + 1);
    console.log(randomNumber);
    count=30;
  } else if (tahminNumber < randomNumber && tahminHak > 0) {
    infoMessage.innerText = "Girilen Sayı Tahmin Edilenden Küçük";
    tahminHak--;
    document.getElementById("tahminHak").innerText = tahminHak;
  } else if (tahminNumber > randomNumber && tahminHak > 0) {
    infoMessage.innerText = "Girilen Sayı Tahmin Edilenden Büyük";
    tahminHak--;
    document.getElementById("tahminHak").innerText = tahminHak;
  }
  else{
    document.getElementById("cardBody").style="display:none"
    infoMessage.innerText="Tahmin Hakkınız Bitti"  
       
  }
}


