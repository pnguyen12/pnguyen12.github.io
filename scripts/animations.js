$(function (){
    setTimeout(function(){
      $('.fly-in-text').removeClass('hidden');
    }, 500);
  });

  function toggleSidebar() {
      document.getElementById('side-bar').classList.toggle('active');
  }