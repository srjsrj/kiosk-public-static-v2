class Timer {
  constructor(callback, delay) {
    let timerID, start, remaining = delay;

    this.pause = function() {
      clearTimeout(timerID);
      remaining -= new Date() - start;
    };

    this.resume = function() {
      start = new Date();
      clearTimeout(timerID);
      timerID = setTimeout(callback, remaining);
    };

    this.resume();
  }
}

export default Timer;