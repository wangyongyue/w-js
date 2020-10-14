function Text (){
  this.text = "";
  this.div = document.createElement("input");
  
  this.reload = function(){

      this.div.innerHTML = this.text;    
      this.div.type = 'text';
  }


}
