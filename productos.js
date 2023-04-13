$(document).ready(function () {
    $('.btn-lg').click(function () {
      $(this).toggleClass("click");
      $('.sidebar').toggleClass("show");
    });
  
  $('.category_item').click(function(){
    var catProduct = $(this).attr('category');
    console.log(catProduct);  
  
    //Agrega Active al seleccionado==========
    $('.category_item').removeClass("active");
    $(this).addClass("active");
    
    //Ocultar===========================
    $('.product-item').hide();
  
    //Mostrar===========================
    $('.product-item[category="'+catProduct+'"]').show();
  });    
  
  $('.category_item[category="all"]').click(function(){
    $('.product-item').show();
    
  });
  });
  
  
  
  