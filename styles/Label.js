function Label (){
  this.text = "";
  this.div = document.createElement("p");
  
  this.reload = function(){

      this.div.innerHTML = this.text;    
  }
  

}
