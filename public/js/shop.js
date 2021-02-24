$(document).ready(() => {
  const sizeBtn = $(".size-btn");
  const colorBtn = $(".color-btn");
  const addBtn = $(".add-to-cart");

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

  addBtn.on("click", function(e){
    e.stopPropagation();
    // const item = $(this).parent().parent().parent().find(".item").attr("data-item")
    const diggingItem = $(this).parents(".parent")

    const item = diggingItem.find(".item").attr("data-item")
    console.log(item)

    const color = diggingItem.find(".color-btn.selected").attr("data-color")
    console.log(color)

    const price = diggingItem.find(".price").text()
    console.log(price)


    const size = diggingItem.find(".size-btn.selected").text()
    console.log(size)
  
    // const item = $(this).parents().find(".item").attr("data-item")
    // console.log(item)



   
  
      //  $.ajax({
      //    url: "/api/cart",
      //    method: "POST",
      //    data:{
      //     //  item: 

      //    }
      //  }).then(response =>{
      //    window.location="/api/cart"
      //  })
  })
   
 






});
