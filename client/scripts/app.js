'use strict';

document.querySelector('button').addEventListener('click', function () {
  var val = document.querySelector('input').value;
  var payload = JSON.stringify({ value: val });

  //make request. 
  var myInit = {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: payload,
    mode: 'cors',
    cache: 'default'
  };
  fetch('/api', myInit).then(function (res) {
    return res.text();
  }).then(function (text) {
    console.log(text);
    document.getElementById('server-result').innerText = text;
  });
});
//# sourceMappingURL=app.js.map
