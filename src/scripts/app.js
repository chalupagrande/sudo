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

