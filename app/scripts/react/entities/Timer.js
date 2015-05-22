class Timer {
  constructor(callback, delay) {
    let timerID, start, remaining = delay;

    this.pause = () => {
      window.clearTimeout(timerID);
      remaining -= new Date() - start;
    };

    this.resume = () => {
      start = new Date();
      window.clearTimeout(timerID);
      timerID = window.setTimeout(callback, remaining);
    };

    this.stop = () => {
      remaining = delay;
      window.clearTimeout(timerID);
    };
  }
}

export default Timer;