var sound = new Audio("https://github.com/Unabated/Ticket-Alerter/raw/master/NewTicket.mp3");
var x = document.title;
var tc = sessionStorage.getItem("tc");

if (tc == null) {
  x = x.substring(x.indexOf(" ")+1);
  x = x.substring(0,x.indexOf(" "));
  sessionStorage.setItem("tc",x);
} else {
  x = x.substring(x.indexOf(" ")+1);
  x = x.substring(0,x.indexOf(" "));
  if (x > tc) {
    sound.play();
    sessionStorage.setItem("tc",x);
    document.title = document.title + " ALERT";
  } else {
    sessionStorage.setItem("tc",x);
  }
}



