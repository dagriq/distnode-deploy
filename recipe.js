module.exports=class Recipe {
 constructor(id) {
  this.id = Number(id);
  this.name= null;
 } 

 async hydrate() { //pretend db lookup
   this.name=`Recipe: #${this.id}` ;
 }

  toJSON() {
    return {id: this.id, name: this.name };
  }

];



