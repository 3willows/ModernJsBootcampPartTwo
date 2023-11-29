const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
// console.log(perimeter)
circle.setAttribute('stroke-dasharray', perimeter)

let inputValue = durationInput.value;
let currentOffset;
let duration;

const callbacks = {
  onStart(totalDuration) {
    // console.log("time started")
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    // console.log("timer just ticked");
    currentOffset = (perimeter * timeRemaining) / duration - perimeter;
    circle.setAttribute('stroke-dashoffset', currentOffset)
  },
  onComplete() {
    // console.log("time is completed");
  }
}

const timer = new Timer(durationInput, startButton, stopButton, callbacks);

