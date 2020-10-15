function View (){
  this.div = document.createElement("div");
  
  this.reload = function(){

    this.div.style.backgroundColor = 'red';
    
  }
  this.appendChild = function(sub){
    this.div.appendChild(sub.div);


  }


}
