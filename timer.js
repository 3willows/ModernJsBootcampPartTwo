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
      this.onStart(this.timeRemaining);
    }
    this.tick();
    this.interval = setInterval(this.tick, 50);
  }

  stop = () => {
    clearInterval(this.interval);
    if (this.onComplete) {
      this.onComplete();
    }
  }

  onDurationChange = () => {
    this.setTime = this.timeRemaining - 1;
  }

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set setTime(time) {
    this.durationInput.value = Math.round(time);
  }

  tick = () => {
    if (this.timeRemaining > 0) {
      if (this.onTick) {
        this.onTick(this.timeRemaining);
      this.onDurationChange();
      }
    }
    else {
      this.stop();
    }
  }
}