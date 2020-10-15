
function Button (){
  this.text = "";
  this.div = document.createElement("button");
  var clickCallBack
  
  this.reload = function(){

      this.div.innerHTML = this.text; 
  
  }




}
