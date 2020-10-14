function Book (model){
  this.model = model
  var button
  var content
  var callBack

  this.setDiv = function(callBack){



     content = new View()
     button = new Button()
     button.text = "button";
     button.div.onclick = function(){

      callBack();

     }

    content.appendChild(button);

    return content.div;
  }
  
  this.reload = function(){

    button.text = this.model.name;

    content.reload();
    button.reload();


  }


}
