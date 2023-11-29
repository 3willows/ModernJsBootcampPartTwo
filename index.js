const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");

const callbacks = {
  onStart() {
    console.log("time started")
  },
  onTick() {
    console.log("timer just ticked");
  },
  onComplete() {
    console.log("time is completed");
  }
}

const timer = new Timer(durationInput, startButton, stopButton, callbacks);

