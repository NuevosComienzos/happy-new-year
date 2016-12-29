// counter
function startTimer(duration, display) {
  var minutes;
  var seconds;
  setInterval(function() {
    minutes = parseInt(duration / 60, 10);
    seconds = parseInt(duration % 60, 10);
    // prepend leading zero
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    // display output
    display.textContent = minutes + ":" + seconds;
    // when success
    if (--duration < 0) {
      display.innerHTML = "Felicidades";
      Fireworks.createParticle();
      Fireworks.createParticle();
    }
  }, 1000);
}

// elements
var go = document.querySelector('#go');
var display = document.querySelector('#display');
var durationField = document.querySelector('#lapse');

// trigger
go.onclick = function(event) {
  event.preventDefault();
  var durationValue = durationField.value;
  if (durationValue > 0) {
    durationField.classList.remove('danger');
    durationValue = durationValue * 60;
    Fireworks.initialize();
    startTimer(durationValue, display);
  } else {
    durationField.classList.add('danger');
  }
};
