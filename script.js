function fruits() {
  document.getElementById("1").style.display = "inline";
  document.getElementById("2").style.display = "inline";
  document.getElementById("3").style.display = "inline";
  document.getElementById("4").style.display = "inline";

  document.getElementById("text").innerHTML = "Fruits";
  var fruitimage =
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg";
  document.getElementById("image").style.backgroundImage =
    "url(" + fruitimage + ")";
  document.getElementById("1").innerHTML = "Apple";
  document.getElementById("1").addEventListener("click", apple);

  function apple() {
    document.getElementById("text").innerHTML = "Apple";
    var appleimg =
      "https://idsb.tmgrup.com.tr/ly/uploads/images/2020/05/13/35552.jpeg";
    document.getElementById("image").style.backgroundImage =
      "url(" + appleimg + ")";
  }

  document.getElementById("2").innerHTML = "Banana";
  document.getElementById("2").addEventListener("click", banana);

  function banana() {
    document.getElementById("text").innerHTML = "Banana";
    var bananaimg =
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/271157_2200-732x549.jpg";
    document.getElementById("image").style.backgroundImage =
      "url(" + bananaimg + ")";
  }
  document.getElementById("3").innerHTML = "Watermelon";
  document.getElementById("3").addEventListener("click", watermelon);

  function watermelon() {
    document.getElementById("text").innerHTML = "Watermelon";
    var waterimg =
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2021/02/watermelon_keto_GettyImages1093715728_Thumb.jpg";
    document.getElementById("image").style.backgroundImage =
      "url(" + waterimg + ")";
  }

  document.getElementById("4").innerHTML = "Orange";
  document.getElementById("4").addEventListener("click", orange);

  function orange() {
    document.getElementById("text").innerHTML = "Orange";
    var orangeimg =
      "https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg";
    document.getElementById("image").style.backgroundImage =
      "url(" + orangeimg + ")";
  }
}

function vegetables() {
  document.getElementById("1").style.display = "inline";
  document.getElementById("2").style.display = "inline";
  document.getElementById("3").style.display = "inline";
  document.getElementById("4").style.display = "inline";
  document.getElementById("text").innerHTML = "Vegetables";
  var vegimage =
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shopping-bag-full-of-fresh-vegetables-and-fruits-royalty-free-image-1128687123-1564523576.jpg";
  document.getElementById("image").style.backgroundImage =
    "url(" + vegimage + ")";
  document.getElementById("1").innerHTML = "Carrot";
  document.getElementById("1").addEventListener("click", carrot);
  function carrot() {
    document.getElementById("text").innerHTML = "Carrots are healthy";
    var carrotimg =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVIyJsI-i95lyAROuWobSCuSvqGZN3olNjg&usqp=CAU";
    document.getElementById("image").style.backgroundImage =
      "url(" + carrotimg + ")";
  }

  document.getElementById("2").innerHTML = "Beetroot";
  document.getElementById("2").addEventListener("click", beet);
  function beet() {
    document.getElementById("text").innerHTML = "Beetroot";
    var beetimg =
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beetroof-health-benefits-1637616232.jpg";
    document.getElementById("image").style.backgroundImage =
      "url(" + beetimg + ")";
  }

  document.getElementById("3").innerHTML = "Turnip";
  document.getElementById("3").addEventListener("click", turnip);
  function turnip() {
    document.getElementById("text").innerHTML = "Turnip";
    var turnipimg =
      "https://cdn-prod.medicalnewstoday.com/content/images/articles/284/284815/a-bunch-of-turnips-on-a-table.jpg";
    document.getElementById("image").style.backgroundImage =
      "url(" + turnipimg + ")";
  }
  document.getElementById("4").innerHTML = "Brinjal";
  document.getElementById("4").addEventListener("click", bri);
  function bri() {
    document.getElementById("text").innerHTML = "Brinjal";
    var briimg =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_qgLEYIMaYdZFre6RXfWMk2U3fJIFxzU-dg&usqp=CAU";
    document.getElementById("image").style.backgroundImage =
      "url(" + briimg + ")";
  }
}
function aboutus() {
  document.getElementById("text").innerHTML = "About us";
  var aboutusimage =
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/f7/8b/38/exterior.jpg?w=900&h=-1&s=1";
  document.getElementById("image").style.backgroundImage =
    "url(" + aboutusimage + ")";
  document.getElementById("1").style.display = "none";
  document.getElementById("2").style.display = "none";
  document.getElementById("3").style.display = "none";
  document.getElementById("4").style.display = "none";
}