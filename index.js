class Timer {
  constructor(durationInput, startButton, stopButton) {
    console.log(this)
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.stopButton = stopButton;

    this.startButton.addEventListener('click', this.start.bind(this));
  }

  start(){
    console.log(this);
    document.querySelector("body").append("hi! ")
    this.importantMethodtoCall();
  }

  pause() { }
  onDurationChange() { }
  importantMethodtoCall() {
    console.log("call me maybe");
  }
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");

const timer = new Timer(durationInput, startButton, stopButton);

