var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        //const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        //const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
        //console.log(thumbUp)
        const manitoArriba=Number(element.dataset.like)
        console.log(manitoArriba)
        fetch('/messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp':manitoArriba
          })
        })
        .then(response => {
          if (response.ok) console.log(response.json()) 
        })
        .then(data => {
          console.log(data)
          window.location.reload();
        })
        .catch(error => console.error(error));
      });
});
//thumbs down
Array.from(thumbDown).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        //const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        const manitoAbajo = Number(element.dataset.unlike)

         console.log(manitoAbajo)
        fetch('/manitoAbajo', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbDown':manitoAbajo
            
          })
        })
        .then(response => {
          if (response.ok) console.log(response.json()) 
        })
        .then(data => {
        //  console.log(data)
        //  console.log(data.thumbUp)
        //  console.log(data.thumbDown)
          window.location.reload(true)
        })
      });
});
Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
