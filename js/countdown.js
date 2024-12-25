// Set the date we're counting down to
var countDownDate = new Date("Jan 11, 2025 08:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Countdown
  // Display the result in the element with id="demo"
  document.getElementById(
    "countdownNew"
  ).innerHTML = `<div class="text-center text-white">
  <span class='register-text'>Final Round In</span> <br />
  <p class='bg-dark day-counter'>${days}D ${hours}H ${minutes}m ${seconds}s</p><br />
    <span class='text-white-50'>
    11.01.2025 | 08.00 AM <br />
    <a href="https://maps.app.goo.gl/441Ygzde4tECKnax6" target="_blank" class="text-info">
      Richmond College 📍
    </a>
  </span>

</div>
  `;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdownNew").innerHTML =
      "<span class='register-text bg-info'>Second Round Happening Now</span><br /><br /><a href='./registration.html' class='primary-btn'>Register your Team</a>";
  }

  // Countdown
  // Display the result in the element with id="demo"
  // document.getElementById(
  //   "countdownNew"
  // ).innerHTML = `<span class='register-text text-center'>Selection Round Will be happening in</span> <br /><br /> <p class='bg-dark day-counter'>${days}D ${hours}H ${minutes}m ${seconds}s </p>`;

  // // If the count down is finished, write some text
  // if (distance < 0) {
  //   clearInterval(x);
  //   document.getElementById("countdownNew").innerHTML =
  //     "<span class='register-text bg-info'>Selection Round Happening Now</span><br /><br /><a href='https://us06web.zoom.us/j/83959708403?pwd=hCnbaBlaTi13xmb3Ab9PXu2xQoCzsv.1' class='primary-btn'>Join Now</a>";
  // }
}, 1000);

//Countdown
// // Display the result in the element with id="demo"
//   document.getElementById(
//     "countdownNew"
//   ).innerHTML = `<span class='register-text text-center'>First Round Registrations Will be Opened in</span> <br /><br /> <p class='bg-dark day-counter'>${days}D ${hours}H ${minutes}m ${seconds}s </p>`;

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("countdownNew").innerHTML =
//       "<span class='register-text bg-info'>First Round Registrations</span><br /><br /><a href='./registration.html' class='primary-btn'>Register your Team</a>";
//   }

// // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("countdownNew").innerHTML =
//       "<span class='register-text bg-info'>First Round Registrations</span><br /><br /><button href='./registration.html' class='primary-btn bg-transparent border-0' disabled>Registration Closed</button>";
//   }
