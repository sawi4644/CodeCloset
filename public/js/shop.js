$(document).ready(() => {
  const sizeBtn = $(".size-btn");
  const colorBtn = $(".color-btn");
  const addBtn = $(".add-to-cart");

  sizeBtn.on("click", function(e) {
    e.preventDefault();
    $(this)
      .parent()
      .find(".size-btn")
      .removeClass("selected");
    $(this).addClass("selected");
  });

  colorBtn.on("click", function(e) {
    e.preventDefault();

    $(this)
      .parent()
      .find(".color-btn")
      .removeClass("selected");
    $(this).addClass("selected");
    const dataColor = $(this).attr("data-color");
    $(this)
      .parent()
      .find(".color-text")
      .text(dataColor);
    const image = $(this)
      .closest(".item-container")
      .find("img");
    const category = image.attr("data-category");

    image.attr("src", `../sketches/${category}_${dataColor}.svg`);
  });

  addBtn.on("click", function(e) {
      e.stopPropagation();

      const diggingItem = $(this).parents(".parent");

      const item = diggingItem.find(".item").attr("data-item");
      console.log(item);

      const color = diggingItem.find(".color-btn.selected").attr("data-color");
      console.log(color);

      const price = diggingItem.find(".price").text();
      console.log(price);

      const size = diggingItem.find(".size-btn.selected").text();
      console.log(size);

      const imgFileName = diggingItem.find("img").attr("src")
      console.log(imgFileName)

  

      $.ajax({
       url: "/cart",
        method: "POST",
        data: {
          item,
          color,
          size,
          price,
          imgFileName
        }
      })
      .then(function(response){
        console.log(response)
        window.location = "/cart";
      })
      .catch(function(err){console.log(err)});
    })
<<<<<<< HEAD
  
       $.ajax({
         url: "/api/cart",
         method: "POST",
         data:{
           item,
           color,
           size,
           price

         }
       }).then(response =>{
         window.location="/api/cart"
       }).catch(err=>console.log(err))


<<<<<<< HEAD
  })
   
 
=======
// }
=======




>>>>>>> 47eb9684bb0aeaa3a8441d0b95d0e08f0979b590
  
>>>>>>> c8981190afe4a3d5dc83a6a9f3670d3e901cb3b2
});




