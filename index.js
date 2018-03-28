
const app = "I don't do much.";

let xhr = new XMLHttpRequest()
xhr.open('GET', 'https://api.github.com/repos/jquery/jquery/commits');

xhr.response_type = 'json'

xhr.onload = function(){
  console.log(xhr.response)
}
xhr.onerror = function() {
  console.log('Boo')
}

xhr.send()


fetch('https://api.github.com/repos/jquery/jquery/commits').then(res => res.json()).then(json => console.log(json))

const token = "test_token"

fetch('https://api.github.com/users/youssefmys/repos', {
  header: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json))
