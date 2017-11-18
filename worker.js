var schedule = require('node-schedule');
var fs = require('fs');

var APP = {
  scheduleJob: function() {
    // This rule is standard cron syntax for once per minute.
    // See http://stackoverflow.com/a/5398044/1252653
    rule = '* * * * *';

    // Kick off the job
    var job = schedule.scheduleJob(rule, function() {
      console.log('ping!')
      fs.writeFile("./test", "Hey there!", function(err) {
        if(err) {
            return console.log(err);
        }
    
        console.log("The file was saved!");
      }); 
    });
  },

  init: function() {
    APP.scheduleJob();
  }
};


(function(){
  console.log("HERE");
  APP.init();
})();