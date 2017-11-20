//SEND TEXT TO THE SERVER
document.querySelector('#send-text').addEventListener('click', ()=>{
  let val = document.querySelector('input').value
  let payload = JSON.stringify({value: val})

  //make request. 
  let myInit = { 
                method: 'POST',
                headers: {
                      'Accept': 'application/json, text/plain, */*',
                      'Content-Type': 'application/json'
                  },
                body: payload,
                mode: 'cors',
                cache: 'default'
              };
  fetch('/api', myInit)
  .then((res)=>{
    return res.text()
  })
  .then((text)=>{
    console.log(text)
    document.getElementById('server-result').innerText = text
  })
})

//SUBMIT FORM TO THE SERVER
let form = document.querySelector('form')
form.addEventListener('submit', ()=>{
  event.preventDefault()
  let payload = {
    name: form.querySelector('#name').value,
    email: form.querySelector('#email').value,
    age: +form.querySelector('#age').value,
    gender: form.querySelector('#gender').value,
    state: form.querySelector('#state').value,
    results: [+form.querySelector('#number').value]  
  }
  console.log("payload", payload)

  let myInit = { 
    method: 'POST',
    headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
      },
    body: JSON.stringify(payload),
    mode: 'cors',
    cache: 'default'
  };

  fetch('/api/entry', myInit)
    .then((res)=>{
      console.log(res)
      return res.json()
    })
    .then((json)=>{
      console.log(json)
      document.getElementById('response').innerText = json.success
    })
})

