export default function then(callback, timeout) {
  setTimeout(callback, timeout > 0 ? timeout : 0);
  return { then };
}