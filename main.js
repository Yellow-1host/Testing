function yhg() {
  //variable
  var yhg = new Date();
  var h = yhg.getHours();
  var m = yhg.getMinutes();
  var s = yhg.getSeconds();
  var years = yhg.getFullYear();
  var dt = yhg.getDate();
  var mon = ["January", "February", "mMarch", "April", "May", "June", "July", "August", "September", "October", "November", "Decemmber"];
  var month = yhg.getMonth();
  var day = yhg.getDay();
  var date = yhg.getDate();
  var period = "";
  var days = document.querySelector(`.daywrapper span:nth-child(${day + 1})`);
  
  // if for digital clock
  if (h > 12) {
    h = h -12;
    period = "PM";
  } else {
    h == h;
    period = "AM";
  }
  
  if (h == 0) {
    h = 12;
  } else {
    h = h;
  }
  
  date = date < 10 ? "0" + date : date
  h = h < 10 ? "0" + h : h
  m = m < 10 ? "0" + m : m
  s = s < 10 ? "0" + s : s
  
  
  //analog clock//
  hrotate = 30 * h + m / 2;
  mrotate = 6 * m;
  srotate = 6 * s;
  hour.style.transform = `rotate(${hrotate}deg)`;
  min.style.transform = `rotate(${mrotate}deg)`;
  sec.style.transform = `rotate(${srotate}deg)`;
  
  //document area for digital
  document.getElementById('hours').innerHTML = h
  document.getElementById('minute').innerHTML = m
  document.getElementById('second').innerHTML = s
  document.getElementById('month').innerHTML = mon[month] + ","
  document.getElementById('date').innerHTML = date
  document.getElementById('year').innerHTML = years
  document.getElementById('period').innerHTML = period
  days.classList.add('now')
  
}
setInterval(yhg, 1000);