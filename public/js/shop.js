$(document).ready(() => {
  const colorBtn = $(".color-btn");
  const sweatColorBtn = $(".sweatColor-btn");
  console.log(colorBtn);
  const leggingColorBtn = $(".leggingColor-btn")
  const sweatpantsColorBtn = $(".sweatpantsColor-btn")

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


  leggingColorBtn.on("click", function(e) {
    e.preventDefault();
    const dataColor = $(this).attr("data-color");
    if (dataColor === "yellow") {
      $(".legging-text").text("yellow");
      $(".legging").attr("src", "../sketches/legging_yellow.svg");
    } else if (dataColor === "red") {
      $(".legging-text").text("red");
      $(".legging").attr("src", "../sketches/legging_red.svg");
    } else if (dataColor === "pink") {
      $(".legging-text").text("pink");
      $(".legging").attr("src", "../sketches/legging_pink.svg");
    } else if (dataColor === "blue") {
      $(".legging-text").text("blue");
      $(".legging").attr("src", "../sketches/legging_blue.svg");
    }
    else if (dataColor === "green") {
        $(".legging-text").text("green");
        $(".legging").attr("src", "../sketches/legging_green.svg");
      }
    else if (dataColor === "grey") {
        $(".legging-text").text("grey");
        $(".legging").attr("src", "../sketches/legging_grey.svg");
      }

    });


      sweatpantsColorBtn.on("click", function(e) {
        e.preventDefault();
        const dataColor = $(this).attr("data-color");
        if (dataColor === "yellow") {
          $(".sweatpants-text").text("yellow");
          $(".sweatpants").attr("src", "../sketches/spants_yellow.svg");
        } else if (dataColor === "red") {
          $(".sweatpants-text").text("red");
          $(".sweatpants").attr("src", "../sketches/spants_red.svg");
        } else if (dataColor === "pink") {
          $(".sweatpants-text").text("pink");
          $(".sweatpants").attr("src", "../sketches/spants_pink.svg");
        } else if (dataColor === "blue") {
          $(".sweatpants-text").text("blue");
          $(".sweatpants").attr("src", "../sketches/spants_blue.svg");
        }
        else if (dataColor === "green") {
            $(".sweatpants-text").text("green");
            $(".sweatpants").attr("src", "../sketches/spants_green.svg");
          }
        else if (dataColor === "grey") {
            $(".sweatpants-text").text("grey");
            $(".sweatpants").attr("src", "../sketches/spants_grey.svg");
          }
    





  });








});
