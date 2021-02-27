$(document).ready(()=>{

  const updateBtn = $(".update-to-cart")
  const colorBtn = $(".color-btn");
  const addBtn = $(".add-to-cart");

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
    const category = image.attr("data-image").match(/(?<=\/).*?(?=_)/gs)[0];
   
    console.log(category) 

    image.attr("src", `../${category}_${dataColor}.svg`);
  });
 

updateBtn.on("click", function(){
   console.log("hello")
  

  const diggingItem = $(this).parents(".parent");

   const id = diggingItem.find(".item").attr("data-id")

   const item = diggingItem.find(".item").text()
   console.log(item)

   const imgFileName = diggingItem.find("img").attr("src")
   console.log(imgFileName)

   const color = diggingItem.find(".color-btn .selected").attr("data-color");
   console.log(color);


   const price = diggingItem.find(".price").text();
   console.log(price);

   const size = diggingItem.find(".size-btn.selected").text();
   console.log(size);


  $.ajax({
    url:`/item/${id}`, 
    method:"PUT",
    data: {
       item,
       imgFileName,
       color,
       price,
       size
    }
}).then(response=>{
    window.location= "/cart"
}).catch(err => console.log(err))
    
})





})
