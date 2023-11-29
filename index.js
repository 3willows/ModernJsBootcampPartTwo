const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const circle = document.querySelector('circle');

const parameter = circle.getAttribute('r') * 2 * Math.PI;
// console.log(parameter)
circle.setAttribute('stroke-dasharray', parameter)

let inputValue = durationInput.value;
let currentOffset = 0;

const callbacks = {
  onStart() {
    // console.log("time started")
  },
  onTick() {
    // console.log("timer just ticked");
    circle.setAttribute('stroke-dashoffset', currentOffset);
    currentOffset -= parameter/60;

  },
  onComplete() {
    // console.log("time is completed");
  }
}

const timer = new Timer(durationInput, startButton, stopButton, callbacks);

