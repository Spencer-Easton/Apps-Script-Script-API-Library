var IteratorService_ = function(array){
  var newArray = array.slice(0);  
  Object.defineProperty(newArray, 'nextIndex', { value: 0, enumerable: false, writable:true });
  Object.defineProperty(newArray, 'next', { value: function(){if(this.nextIndex >= this.length){throw new Error("NoSuchElementException")}else{return this[this.nextIndex++]}}, enumerable: false });
  Object.defineProperty(newArray, 'hasNext', { value: function(){return (this.nextIndex < this.length)}, enumerable: false });  
  return newArray;
}