(function getData() {
  fetch('/userInfo')
    .then(response => response.json())
    .then(console.log);
})();
