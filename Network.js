function Network(){
    var successCallBack;
    var failedCallBack;
    this.url = function(){
      
      return "";
    }
    this.param = function(){

      return "";
    }
    this.requestType = function(){
      return "None";
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
            successCallBack(response);
          }else{
            failedCallBack(response.message);
          }
        }else{

          if (that.requestType() === "None") {
            successCallBack(null);
          }
        }

    }
    xmlhttp.open("POST",this.url(),true);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    xmlhttp.send(this.param());

    }

    this.success = function(callBack){

      successCallBack = callBack;
    }
    this.failed = function(callBack){

      failedCallBack = callBack;

    }
    




}


















