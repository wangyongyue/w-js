// service
function service(){

    this.arr = [];
    this.divId = "";
    this.content = document.createElement("div");


//继承需要重写
    this.url = function(){
      
      return "";
    }
    this.param = function(){

      return "";
    }
    this.requestType = function(){
      return "None";
    }
    this.clickIndex = function(index){
      console.log(index);
    }
    this.success = function(response){

      this.reload();
    }
    this.failed = function(error){

    }

//继承不需要重写

  this.reload = function(){
    console.log(this.arr);
    var element = document.getElementById(this.divId);
    element.innerHTML = "";
    element.appendChild(this.content)

      for(b in this.arr){
         var div =  function(i,that){
          return that.arr[b].setDiv(function(){
            that.clickIndex(i);
          });
         }(b,this);
        this.content.appendChild(div);
        var m = this.arr[b];
        m.reload();
      }
  }
 
  this.reloadIndex = function(index){

    var m = this.arr[index];
    m.reload();

  }
  this.disAppear = function () {

        var element = document.getElementById(this.divId);
        element.innerHTML  = "";
        this.content.innerHTML  = "";

  }
  this.appear = function () {
      if (this.arr.length > 0) {
          var element = document.getElementById(this.divId);
          element.innerHTML  = "";
          element.appendChild(this.content)
          return
      }
  }

  this.request = function(){
      var that = this;
      if (that.requestType() == "None") {
            that.success(null);
            return
      }
       var xmlhttp = new XMLHttpRequest();
       xmlhttp.onreadystatechange = function()
       {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var response = JSON.parse( xmlhttp.responseText);
          console.log(response);

          if (response.code == 1)
          {
            that.success(response);
          
          }else{
            that.failed(response.message);
          }
        }else{

          that.failed("网络错误");
        }

    }
    xmlhttp.open("POST",this.url(),true);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    xmlhttp.send(this.param());

    }
 
}
// service
function serviceCommit(){

//继承需要重写
    this.url = function(){

      return "";
    }
    this.param = function(){

      return "";
    }
    this.requestType = function(){

      return "None";
    }

    this.success = function(response){

    }
    this.failed = function(error){

    }



  this.request = function(){
      var that = this;
       var xmlhttp = new XMLHttpRequest();
       xmlhttp.onreadystatechange = function()
       {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var response = JSON.parse( xmlhttp.responseText);
          console.log(response);

          if (response.code == 1)
          {
            that.success(response);

          }else{
            that.failed(response.message);
          }
        }else{

          if (that.requestType() === "None") {
            that.success(null);
          }
        }

    }
    xmlhttp.open("POST",this.url(),true);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    xmlhttp.send(this.param());

    }

}