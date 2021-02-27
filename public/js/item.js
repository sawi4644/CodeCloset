$(document).ready(()=>{

const updateBtn = $(".update-to-cart")


updateBtn.on("click", function(){
   console.log("hello")
    const id = $(this).attr("data-id")
    console.log(id)

    const diggingItem = $(this).parents(".parent");

    console.log(diggingItem)

// const imgFileName = $(this).parent().find("img").attr("src");
// const item = $(this).parent().find(".item-name").text();
// const price = $(this).parent().find(".item-price").text();

 
  // ajax call 
//   $.ajax({
//     url:`/cart/${id}`, 
//     method:"PUT",
//     data: {
//        item,
//        imgFileName,
//        price
//     }
// }).then(response=>{
//     window.location= "/item"
// }).catch(err => console.log(err))
    
})





})
