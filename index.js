$(".nav-icon").click(function(){
  $("body").toggleClass("body");
  $(".nav-link-text").toggleClass("nav-link-text-black");
  $(".nav-icon").toggleClass("nav-icon-black");
  $(".columns").toggleClass("columns-black");
  $("p").toggleClass("text-black");
  $(".icon-col").toggleClass("icon-col-black");
  $(".nav-icon").toggleClass("fa-moon");
  $(".circle").toggleClass("circle-black");

  // $("button").toggleClass("btn-outline-dark");
});