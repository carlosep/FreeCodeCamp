var Person = function(firstAndLast) {
  this.getFullName  = function(){return firstAndLast;};
  this.getFirstName = function(){return firstAndLast.split(' ')[0];};
  this.getLastName  = function(){return firstAndLast.split(' ')[1];};
  this.setFirstName = function(newName){firstAndLast = newName + ' ' + firstAndLast.split(' ')[1];};
  this.setLastName  = function(newName){firstAndLast = firstAndLast.split(' ')[0] + ' ' + newName;};
  this.setFullName  = function(newName){firstAndLast = newName;};
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFirstName();
