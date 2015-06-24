module.exports = Controller('Home/BaseController', function(){
  'use strict';

  return {
    indexAction: function() {
      var self = this;
      self.assign('title', '');

      if (self.isGet()) {
        self.display();
      }
    }
  };
});