$(document).ready(() => {
  const colorBtn = $(".color-btn");
  const sweatColorBtn = $(".sweatColor-btn");
  console.log(colorBtn);

  colorBtn.on("click", function(e) {
    e.preventDefault();
    const dataColor = $(this).attr("data-color");
    console.log(dataColor);
    if (dataColor === "yellow") {
      $(".tee-text").text("yellow");
      $(".tee").attr("src", "../sketches/tshirts_yellow.svg");
    } else if (dataColor === "red") {
      $(".tee-text").text("red");
      $(".tee").attr("src", "../sketches/tshirts_red.svg");
    } else if (dataColor === "pink") {
      $(".tee-text").text("pink");
      $(".tee").attr("src", "../sketches/tshirts_pink.svg");
    } else if (dataColor === "blue") {
      $(".tee-text").text("blue");
      $(".tee").attr("src", "../sketches/tshirts_blue.svg");
    } else if (dataColor === "green") {
      $(".tee-text").text("green");
      $(".tee").attr("src", "../sketches/tshirts_green.svg");
    } else if (dataColor === "grey") {
      $(".tee-text").text("grey");
      $(".tee").attr("src", "../sketches/tshirts_grey.svg");
    }
  });

  sweatColorBtn.on("click", function(e) {
    e.preventDefault();
    const dataColor = $(this).attr("data-color");
    if (dataColor === "yellow") {
      $(".sweat-text").text("yellow");
      $(".sweatshirt").attr("src", "../sketches/sweatshirts_yellow.svg");
    } else if (dataColor === "red") {
      $(".sweat-text").text("red");
      $(".sweatshirt").attr("src", "../sketches/sweatshirts_red.svg");
    } else if (dataColor === "pink") {
      $(".sweat-text").text("pink");
      $(".sweatshirt").attr("src", "../sketches/sweatshirts_pink.svg");
    } else if (dataColor === "blue") {
      $(".sweat-text").text("blue");
      $(".sweatshirt").attr("src", "../sketches/sweatshirts_blue.svg");
    }
    else if (dataColor === "green") {
        $(".sweat-text").text("green");
        $(".sweatshirt").attr("src", "../sketches/sweatshirts_green.svg");
      }
    else if (dataColor === "grey") {
        $(".sweat-text").text("grey");
        $(".sweatshirt").attr("src", "../sketches/sweatshirts_grey.svg");
      }
  });
});
