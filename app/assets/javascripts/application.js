// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require bootstrap
//= require bootsy
//= require social-share-button
// alert("here");
// window.setInterval(function(){
//   alert("ok");
// }, 5000);
// flag = 0
function notifications()
{
    $.post("/notifications/user_update",
    function(data)
    {
        if(data.count > 0)
        {
          $("#notification").removeClass("notification-active");
          $("#notification").addClass("notification-active");
          $('#number-notification').text(data.count);
        }else{
          $("#notification").removeClass("notification-active");
          $('#number-notification').text(data.count);
        }
    });
}
setInterval(notifications, 5000);
