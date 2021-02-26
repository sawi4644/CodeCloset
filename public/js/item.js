
// editBtn.on("click", function(e){
//     e.stopPropagation();
//     const id = $(this).attr("data-id")

// const imgFileName = $(this).parent().find("img").attr("src");
// const item = $(this).parent().find(".item-name").text();
// const price = $(this).parent().find(".item-price").text();

 
//   // ajax call 
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
    
// })