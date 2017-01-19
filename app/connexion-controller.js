angular.module('Nakama').controller('ConnexionController',function(){
  var co = this;

  co.setConnexion = function(mode){
    co.isConnected = mode;
  };
});
