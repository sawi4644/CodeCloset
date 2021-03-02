$(document).ready(()=>{

    const removeBtn = $(".remove")
    
    
    
    removeBtn.on("click", function(e){
        e.stopPropagation();
      const id = $(this).attr("data-id")
      $.ajax({
          url:`/cart/${id}`, 
          method:"DELETE",
          data: id
      }).then(response=>{
          window.location= "/cart"
      }).catch(err => console.log(err))
    })



});




