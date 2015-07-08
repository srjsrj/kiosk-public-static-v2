export default function createObjectURL(file) {
  if (window.URL && window.URL.createObjectURL) {
    return window.URL.createObjectURL(file);
  } else if (window.webkitURL) {
    return window.webkitURL.createObjectURL(file);
  } else {
    return null;
  }
}