document.addEventListener("DOMContentLoaded", function () {
  fetch("./data.json")
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      let total = 0;

      document.querySelector(".category-1").innerHTML = result[0].category;
      document.querySelector(".category-2").innerHTML = result[1].category;
      document.querySelector(".category-3").innerHTML = result[2].category;
      document.querySelector(".category-4").innerHTML = result[3].category;

      for (let i = 0; i < result.length; i++) {
        document.querySelectorAll(".score-number")[i].innerHTML =
          result[i].score;

        document.querySelectorAll("img")[i].src = result[i].icon;
        total += +result[i].score;
      }
      console.log(total);

      document.querySelector("#average").innerHTML = Math.floor(
        total / result.length
      );
    });
});
