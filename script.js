//your JS code here. If required.
function updateTextWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000); // 1 second delay
  });
}

const outputElement = document.getElementById('output');

updateTextWithPromise().then((message) => {
  outputElement.textContent = message;
});