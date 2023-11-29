class Timer {
  constructor(durationInput, startButton, stopButton, callbacks) {
    // console.log(this)
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.stopButton = stopButton;

    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.startButton.addEventListener('click', this.start);
    this.stopButton.addEventListener('click', this.stop);
  }

  start = () => {
    if (this.onStart) {
      this.onStart();
    }
    this.tick();
    this.interval = setInterval(this.tick, 1000);
    // this.onDurationChange();      
  }
  stop = () => {
    // console.log("clicked stop")
    clearInterval(this.interval);
  }
  onDurationChange = () => {
    this.currentTime = this.getTime - 1;
    durationInput.value = this.currentTime;
  }

  get getTime() {
    return parseFloat(durationInput.value);
  }
  // leave the setter for later

  tick = () => {
    if (this.onTick) {
      this.onTick();
    }
    console.log('tick');
    this.onDurationChange();
  }
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");

const callbacks =   {
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

