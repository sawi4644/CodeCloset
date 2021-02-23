$(document).ready(() => {
  const sizeBtn = $(".size-btn");
  const colorBtn = $(".color-btn");

  sizeBtn.on("click", function(e){
    e.preventDefault();
    $(this).parent().find(".size-btn").removeClass("selected")
    $(this).addClass("selected")
  });

  colorBtn.on("click", function(e){
    e.preventDefault();

    $(this).parent().find(".color-btn").removeClass("selected")
    $(this).addClass("selected")
    const dataColor = $(this).attr("data-color");
    $(this).parent().find(".color-text").text(dataColor);
    const image = $(this).closest(".item-container").find("img");
    const category = image.attr("data-category");

    image.attr("src", `../sketches/${category}_${dataColor}.svg`);
  });



 






});
