(function(){

  var fullname = document.querySelector('#fullName');
  var email = document.querySelector('#email');
  var message = document.querySelector('#message');

  var submit = document.querySelector('#submit');
  submit.addEventListener('click',function(event){
    event.stopPropagation();
    if(fullname.value.length < 1){ console.log('no name'); return; }
    if(email.value.length < 1){ console.log('no email'); return; }
    if(message.value.length < 1){ console.log('no message'); return; }

    console.log(fullname.value,email.value,message.value);
  });

  // constructor object
  function xhr(func){
    var ajax = new XMLHttpRequest(); // xhr object
    ajax.open('get','../data.json');
    ajax.onreadystatechange = function(){
      console.log(ajax.readyState,ajax.status);
      if(ajax.readyState == 4){ 
        if(ajax.status == 200){ 
          console.log(ajax.response); func(ajax.response); 
        }
        else{ console.log('error'); return; }
      }
    };
    
    ajax.send();
  }
  xhr(preLoadForm);

  function preLoadForm(response){
    if(response){ 
      var r=JSON.parse(response);
      console.log(r.fullname,r.email,r.message);
      fullname.value = r.fullname; 
      email.value = r.email;
      message.value = r.message;
    }
  }
   

})();
