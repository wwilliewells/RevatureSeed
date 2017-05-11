//  literal object
// var contact = {
//   name: 'Willie',
//   email: 'wwilliewells@gmail.com',
//   message: '',
// }

// constructor object
var contact = function(){
  this.name = 'willie';
  this.email ='@email';
  this.message = '';
}

var c = new contact();
/*c.name =
  c.email =
  c.message =*/ 

var c2 = new contact();
c2.name = 'david';
c2.message = 'what';

contact.title = 'this';
contact.prototype.title = 'stuff';
console.log(c2.title);
console.log(c.name);
console.log(contact.title);
