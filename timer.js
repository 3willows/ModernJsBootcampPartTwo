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
  }

  stop = () => {
    clearInterval(this.interval);
    if (this.onComplete) {
      this.onComplete();
    }
  }

  onDurationChange = () => {
    this.setTime = this.getTime - 1;
  }

  get getTime() {
    return parseFloat(this.durationInput.value);
  }

  set setTime(time) {
    this.durationInput.value = time;
  }

  tick = () => {
    if (this.getTime > 0) {
      if (this.onTick) {
        this.onTick();
      }
      console.log('tick');
      this.onDurationChange();
    }
    else {
      this.stop();
    }
  }
}