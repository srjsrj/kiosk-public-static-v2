export const animate = (runner) => {
  const action = (
    window.requestAnimationFrame       ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function(cb) {
      window.setTimeout(cb, 1000 / 60);
    }
  );

  action.call(window, runner);
};