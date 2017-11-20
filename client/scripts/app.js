'use strict';

//SEND TEXT TO THE SERVER
document.querySelector('#send-text').addEventListener('click', function () {
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

//SUBMIT FORM TO THE SERVER
var form = document.querySelector('form');
form.addEventListener('submit', function () {
  event.preventDefault();
  var payload = {
    name: form.querySelector('#name').value,
    email: form.querySelector('#email').value,
    age: +form.querySelector('#age').value,
    gender: form.querySelector('#gender').value,
    state: form.querySelector('#state').value,
    results: [+form.querySelector('#number').value]
  };
  console.log("payload", payload);

  var myInit = {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload),
    mode: 'cors',
    cache: 'default'
  };

  fetch('/api/entry', myInit).then(function (res) {
    console.log(res);
    return res.json();
  }).then(function (json) {
    console.log(json);
    document.getElementById('response').innerText = json.success;
  });
});
//# sourceMappingURL=app.js.map
