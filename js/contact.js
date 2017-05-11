(function(){
  // constructor object
  var contact = function(){
    this.name = 'willie';
    this.email ='@email';
    this.message = '';
  }
  var c = new contact();

  var fn = document.querySelector('#fullName');
  var email = document.querySelector('#email');
  var msg = document.querySelector('#message');

  //var n=0;
  var s = document.querySelector('#s');
  s.addEventListener('click',function(e){
    e.stopPropagation();
    if(fn.value.length > 0){ c.name = fn.value; }
    else{ console.log('no name'); return; }
    if(email.value.length > 0){ c.email = email.value; }
    else{ console.log('no email'); return; }
    if(msg.value.length > 0){ c.message = msg.value; }
    else{ console.log('no message'); return; }

    console.log(c.name,c.email,c.message);
  });
})();
