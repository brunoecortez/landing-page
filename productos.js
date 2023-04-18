//Sidebar===========================
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

//List Order===========================

$(document).on("change", ".sort-by", function () {

  var sortingMethod = $(this).val();

  if (sortingMethod == 'price-ascending') {
    sortProductsPriceAscending();
  } else if (sortingMethod == 'price-descending') {
    sortProductsPriceDescending();
  }
  else {
    $(".product_list").load(location.href + ".product_list", "");
  }
});

function sortProductsPriceAscending() {
  var gridItems = $('.grid-item');
  gridItems.sort(function (a, b) {
    return $('.product-card', a).data("price") - $('.product-card', b).data("price");
  });

  $(".product_list").append(gridItems);
}
  
function sortProductsPriceDescending() {
var gridItems = $('.grid-item');
gridItems.sort(function (a, b) {
return $('.product-card', b).data("price") - $('.product-card', a).data("price");
});
  
$(".product_list").append(gridItems);
  
}

